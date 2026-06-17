import { useEffect, useMemo, useState } from 'react'
import {
  DndContext, DragOverlay, PointerSensor, useSensor, useSensors,
  closestCenter, useDroppable, useDraggable,
} from '@dnd-kit/core'
import {
  SortableContext, verticalListSortingStrategy, useSortable, arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  getAllCareerPaths, getCompletedSkills, toggleSkillCompletion,
  getWorkspace, saveWorkspace, clearWorkspace, checkAndFailMissedWeeks,
  getDailyCheckins, upsertDailyCheckin, deleteDailyCheckin,
  getPinnedNodes, isNodePinned, togglePinnedNode,
} from '../services/storage'
import './Journey.css'

// ── Static helpers ────────────────────────────────────────────────
function getTodayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
function fmtDate(ds) {
  if (!ds) return ''
  const [, m, d] = ds.split('-')
  return `${d}/${m}`
}
function fmtDateLong(ds) {
  if (!ds) return ''
  const [y, m, d] = ds.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric' })
}
function addDaysLocal(dateStr, days) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  date.setDate(date.getDate() + days)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
function daysSince(startDateStr, today) {
  if (!startDateStr) return 0
  const [y, m, d] = startDateStr.split('-').map(Number)
  const [ty, tm, td] = today.split('-').map(Number)
  const diff = new Date(ty, tm - 1, td) - new Date(y, m - 1, d)
  return Math.max(0, Math.floor(diff / 86400000))
}

const FREQ_LABELS = { daily: 'Hàng ngày', every2days: 'Mỗi 2 ngày', weekly: 'Hàng tuần' }
const FREQ_DAYS = { daily: 1, every2days: 2, weekly: 7 }

const WEEK_META = {
  done: { emoji: '✅', cls: 'wk-done' },
  active: { emoji: '🔄', cls: 'wk-active' },
  failed: { emoji: '❌', cls: 'wk-failed' },
  upcoming: { emoji: '🔒', cls: 'wk-upcoming' },
}

const CHECKIN_STATUS = {
  ahead: { label: 'Sớm hơn kế hoạch', emoji: '🚀', cls: 'ci-ahead' },
  'on-track': { label: 'Đúng hạn', emoji: '✅', cls: 'ci-ontrack' },
  behind: { label: 'Muộn hơn kế hoạch', emoji: '🐢', cls: 'ci-behind' },
}

// ── Plan helpers (periods-based) ──────────────────────────────────

/**
 * planPeriods: Array<{ id: string, nodes: Array<{ id, label }> }>
 * Each period maps to one entry in weeklyPlan.
 */
function buildWeeklyPlanFromPeriods(planPeriods, startDate, freq) {
  const interval = FREQ_DAYS[freq] || 1
  const nonEmpty = planPeriods.filter(p => p.nodes.length > 0)
  return nonEmpty.map((period, i) => {
    const periodStart = addDaysLocal(startDate, i * interval)
    const periodEnd = addDaysLocal(periodStart, interval - 1)
    const nodeLabels = {}
    period.nodes.forEach(n => { nodeLabels[n.id] = n.label })
    return {
      week: i + 1,
      nodeIds: period.nodes.map(n => n.id),
      nodeLabels,
      missedNodeIds: [],
      status: 'upcoming',
      startDate: periodStart,
      endDate: periodEnd,
      label: period.nodes.map(n => n.label).join(', '),
    }
  })
}

/** Convert saved weeklyPlan back to planPeriods (for editing) */
function weeklyPlanToPeriods(weeklyPlan, pathNodes) {
  return weeklyPlan.map((w, i) => ({
    id: `period-edit-${i + 1}`,
    nodes: w.nodeIds.map(id => {
      const rn = pathNodes?.find(n => n.id === id)
      return { id, label: rn?.label || w.nodeLabels?.[id] || id }
    }),
  }))
}

// ─────────────────────────────────────────────────────────────────
//  DnD sub-components
// ─────────────────────────────────────────────────────────────────

function LibraryCard({ node, pathColor }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `lib-${node.id}`,
    data: { source: 'library', node },
  })
  return (
    <div
      ref={setNodeRef} {...listeners} {...attributes}
      className={`pe-lib-card ${isDragging ? 'pe-lib-dragging' : ''}`}
      style={{ '--pc': pathColor }}
    >
      <span className="pe-lib-label">{node.label}</span>
    </div>
  )
}

function SortablePlanNode({ node, pathColor, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: node.id, data: { source: 'plan', node } })
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`pe-plan-node ${isDragging ? 'pe-plan-dragging' : ''}`}
      {...listeners} {...attributes}
    >
      <span className="pe-node-label">{node.label}</span>
      <button
        className="pe-node-delete-hover"
        onClick={e => { e.stopPropagation(); onDelete(node.id) }}
        title="Xóa node"
        onPointerDown={e => e.stopPropagation()}
      >✕</button>
    </div>
  )
}

/** One period drop-zone in the Kanban plan */
function PeriodZone({ period, periodNum, checkInDate, pathColor, onDeleteNode, onDeletePeriod, canDelete }) {
  const { setNodeRef, isOver } = useDroppable({ id: period.id })

  return (
    <div className={`pe-period-zone ${isOver ? 'pe-period-over' : ''}`} style={{ '--pc': pathColor }}>
      <div className="pe-period-header">
        <span className="pe-period-num">Kỳ {periodNum}</span>
        <span className="pe-period-date">{fmtDate(checkInDate)}</span>
        {canDelete && (
          <button
            className="pe-period-delete"
            onClick={() => onDeletePeriod(period.id)}
            title="Xóa kỳ (node chuyển về kỳ trước)"
          >✕</button>
        )}
      </div>
      <div ref={setNodeRef} className="pe-period-nodes">
        <SortableContext items={period.nodes.map(n => n.id)} strategy={verticalListSortingStrategy}>
          {period.nodes.length === 0 ? (
            <div className={`pe-period-empty ${isOver ? 'pe-period-empty-over' : ''}`}>
              Kéo node vào đây
            </div>
          ) : (
            period.nodes.map(node => (
              <SortablePlanNode
                key={node.id}
                node={node}
                pathColor={pathColor}
                onDelete={nodeId => onDeleteNode(period.id, nodeId)}
              />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  )
}

// ── Plan Editor (Kanban) ──────────────────────────────────────────
function PlanEditor({ pathNodes, planPeriods, setPlanPeriods, startDate, freq, pathColor }) {
  const [activeId, setActiveId] = useState(null)
  const [activeData, setActiveData] = useState(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))
  const interval = FREQ_DAYS[freq] || 1

  // Attach check-in dates to periods
  const periodsWithDates = useMemo(() => {
    let ki = 0
    return planPeriods.map(p => {
      const date = addDaysLocal(startDate, ki * interval)
      if (p.nodes.length > 0) ki++
      return { ...p, checkInDate: date }
    })
  }, [planPeriods, startDate, interval])

  const totalNodes = planPeriods.reduce((s, p) => s + p.nodes.length, 0)
  const nonEmptyCount = planPeriods.filter(p => p.nodes.length > 0).length
  const completionDate = nonEmptyCount > 0
    ? addDaysLocal(startDate, (nonEmptyCount - 1) * interval)
    : null

  // ── Container lookup helpers ──
  const findContainer = id => {
    if (planPeriods.find(p => p.id === id)) return id
    return planPeriods.find(p => p.nodes.some(n => n.id === id))?.id ?? null
  }

  // ── DnD handlers ──
  const handleDragStart = ({ active }) => {
    setActiveId(active.id)
    setActiveData(active.data.current)
  }

  const handleDragOver = ({ active, over }) => {
    if (!over) return
    if (String(active.id).startsWith('lib-')) return // handled in dragEnd

    const activeContainer = findContainer(active.id)
    const overContainer = findContainer(over.id)
    if (!activeContainer || !overContainer || activeContainer === overContainer) return

    // Move node to new container for live preview
    setPlanPeriods(prev => {
      const src = prev.find(p => p.id === activeContainer)
      const dst = prev.find(p => p.id === overContainer)
      if (!src || !dst) return prev

      const movedNode = src.nodes.find(n => n.id === active.id)
      if (!movedNode) return prev

      const overNodeIdx = dst.nodes.findIndex(n => n.id === over.id)
      const insertAt = overNodeIdx >= 0 ? overNodeIdx : dst.nodes.length

      return prev.map(p => {
        if (p.id === activeContainer) return { ...p, nodes: p.nodes.filter(n => n.id !== active.id) }
        if (p.id === overContainer) {
          const next = [...p.nodes]
          next.splice(insertAt, 0, movedNode)
          return { ...p, nodes: next }
        }
        return p
      })
    })
  }

  const handleDragEnd = ({ active, over }) => {
    const savedData = activeData
    setActiveId(null)
    setActiveData(null)
    if (!over) return

    const fromLib = String(active.id).startsWith('lib-')

    if (fromLib) {
      const node = savedData?.node
      if (!node) return

      // Target = the period the user dropped onto (or its containing period)
      const targetId = findContainer(over.id) ?? planPeriods[planPeriods.length - 1]?.id
      if (!targetId) return

      const isDup = planPeriods.some(p =>
        p.nodes.some(n => n.id === node.id || n.id.startsWith(`${node.id}-`))
      )
      const newNode = {
        id: isDup ? `${node.id}-${Date.now()}` : node.id,
        label: node.label,
      }

      setPlanPeriods(prev => prev.map(p => {
        if (p.id !== targetId) return p
        const overNodeIdx = p.nodes.findIndex(n => n.id === over.id)
        const next = [...p.nodes]
        overNodeIdx >= 0
          ? next.splice(overNodeIdx + 1, 0, newNode)
          : next.push(newNode)
        return { ...p, nodes: next }
      }))
      return
    }

    // Within-same-container reorder (cross-container already done in onDragOver)
    const activeContainer = findContainer(active.id)
    const overContainer = findContainer(over.id)
    if (!activeContainer || activeContainer !== overContainer) return

    setPlanPeriods(prev => prev.map(p => {
      if (p.id !== activeContainer) return p
      const oldIdx = p.nodes.findIndex(n => n.id === active.id)
      const newIdx = p.nodes.findIndex(n => n.id === over.id)
      if (oldIdx < 0 || newIdx < 0 || oldIdx === newIdx) return p
      return { ...p, nodes: arrayMove(p.nodes, oldIdx, newIdx) }
    }))
  }

  // ── Period / node mutations ──
  const handleDeleteNode = (periodId, nodeId) => {
    setPlanPeriods(prev => prev.map(p =>
      p.id !== periodId ? p : { ...p, nodes: p.nodes.filter(n => n.id !== nodeId) }
    ))
  }

  const handleAddPeriod = () => {
    setPlanPeriods(prev => [...prev, { id: `period-${Date.now()}`, nodes: [] }])
  }

  const handleDeletePeriod = periodId => {
    if (planPeriods.length <= 1) return
    setPlanPeriods(prev => {
      const idx = prev.findIndex(p => p.id === periodId)
      const orphans = prev[idx]?.nodes ?? []
      const target = idx > 0 ? idx - 1 : 1
      return prev
        .map((p, i) => i === target ? { ...p, nodes: [...p.nodes, ...orphans] } : p)
        .filter(p => p.id !== periodId)
    })
  }

  const handleLoadAll = () => {
    const existingIds = new Set(planPeriods.flatMap(p => p.nodes.map(n => n.id.split('-')[0])))
    const missing = pathNodes.filter(n => !existingIds.has(n.id))
    if (missing.length === 0) return
    setPlanPeriods(prev => [
      ...prev,
      ...missing.map((n, i) => ({
        id: `period-${n.id}-${Date.now()}-${i}`,
        nodes: [{ id: n.id, label: n.label }],
      })),
    ])
  }

  const handleClearAll = () => {
    if (totalNodes === 0) return
    if (window.confirm('Xóa toàn bộ kế hoạch hiện tại?'))
      setPlanPeriods([{ id: `period-${Date.now()}`, nodes: [] }])
  }

  // Active node label for overlay
  const activeNode = useMemo(() => {
    if (!activeId) return null
    if (String(activeId).startsWith('lib-')) return activeData?.node ?? null
    return planPeriods.flatMap(p => p.nodes).find(n => n.id === activeId) ?? null
  }, [activeId, activeData, planPeriods])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="plan-editor">

        {/* Library */}
        <div className="pe-library">
          <div className="pe-library-header">
            <h4>📚 Thư viện Node</h4>
            <button
              className="btn pe-load-all"
              onClick={handleLoadAll}
              disabled={pathNodes.length === 0}
            >
              Thêm tất cả ↓
            </button>
          </div>
          <div className="pe-library-list">
            {pathNodes.map(node => (
              <LibraryCard key={node.id} node={node} pathColor={pathColor} />
            ))}
          </div>
        </div>

        {/* Kanban periods */}
        <div className="pe-kanban">
          <div className="pe-plan-header">
            <div>
              <h4>📋 Kế hoạch học tập</h4>
              <span className="pe-plan-count">
                {totalNodes} node · {nonEmptyCount} kỳ
                {completionDate && <> · 🏁 {fmtDate(completionDate)}</>}
              </span>
            </div>
            {totalNodes > 0 && (
              <button className="pe-clear-btn" onClick={handleClearAll}>🗑 Xóa tất cả</button>
            )}
          </div>

          <div className="pe-periods-list">
            {periodsWithDates.map((period, idx) => (
              <PeriodZone
                key={period.id}
                period={period}
                periodNum={idx + 1}
                checkInDate={period.checkInDate}
                pathColor={pathColor}
                onDeleteNode={handleDeleteNode}
                onDeletePeriod={handleDeletePeriod}
                canDelete={planPeriods.length > 1}
              />
            ))}
          </div>

          <button className="pe-add-period-btn" onClick={handleAddPeriod}>
            + Thêm kỳ mới
          </button>
        </div>
      </div>

      <DragOverlay>
        {activeNode && (
          <div className="pe-drag-ghost">{activeNode.label}</div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

// ── Main Component ────────────────────────────────────────────────
export default function Journey({ onOpenPath }) {
  const [phase, setPhase] = useState('loading')
  const [paths, setPaths] = useState([])
  const [workspace, setWorkspace] = useState(null)

  // Configure state
  const [selPathId, setSelPathId] = useState(null)
  const [startDate, setStartDate] = useState(() => getTodayStr())
  const [freq, setFreq] = useState('daily')
  // planPeriods: Array<{ id, nodes: Array<{id, label}> }>
  const [planPeriods, setPlanPeriods] = useState([])

  // Workspace state
  const [checkins, setCheckins] = useState({})
  const [completedSkills, setCompleted] = useState([])
  const [pinnedNodes, setPinnedNodes] = useState([])

  // Check-in form
  const [ciMinutes, setCiMinutes] = useState(30)
  const [ciNote, setCiNote] = useState('')
  const [ciStatus, setCiStatus] = useState('on-track')

  // Edit plan overlay
  const [editPlanOpen, setEditPlanOpen] = useState(false)
  const [editPlanPeriods, setEditPlanPeriods] = useState([])

  // Timeline check-in date view
  const [selectedCheckinDate, setSelectedCheckinDate] = useState(null)

  const today = useMemo(() => getTodayStr(), [])

  // ── Mount ──────────────────────────────────────────────
  useEffect(() => {
    const allPaths = getAllCareerPaths()
    setPaths(allPaths)
    const ws = getWorkspace()
    if (ws) {
      const updated = checkAndFailMissedWeeks(ws)
      saveWorkspace(updated)
      setWorkspace(updated)
      setCompleted(getCompletedSkills(updated.pathId))
      setCheckins(getDailyCheckins())
      setPinnedNodes(getPinnedNodes())
      setPhase('workspace')
    } else {
      setPhase('select')
    }
  }, [])

  // Initialize periods when entering configure for a new path
  useEffect(() => {
    if (phase === 'configure' && selPathId && !workspace) {
      const selPath = paths.find(p => p.id === selPathId)
      const ordered = (selPath?.nodes || [])
        .slice()
        .sort((a, b) => a.level - b.level || a.id.localeCompare(b.id))
      // Start with 1 node per period — user merges by dragging
      setPlanPeriods(
        ordered.map((n, i) => ({
          id: `period-${i + 1}`,
          nodes: [{ id: n.id, label: n.label }],
        }))
      )
    }
  }, [phase, selPathId, paths, workspace])

  // ── Check-in availability ──────────────────────────────
  const checkinAvailability = useMemo(() => {
    if (!workspace) return { canCheckin: false, nextDate: null, lastDate: null }
    const allDates = Object.keys(checkins).sort()
    const lastDate = allDates[allDates.length - 1] || null
    if (!lastDate) return { canCheckin: true, nextDate: today, lastDate: null }
    const nextDate = addDaysLocal(lastDate, FREQ_DAYS[workspace.checkinFrequency] || 1)
    return { canCheckin: today >= nextDate, nextDate, lastDate }
  }, [checkins, workspace, today])

  const viewDate = selectedCheckinDate || today
  const viewCheckin = checkins[viewDate]
  const prevCheckin = useMemo(() => {
    if (!workspace) return null
    const dates = Object.keys(checkins)
      .filter(d => d < today && d >= workspace.startDate)
      .sort()
    return dates.length ? checkins[dates[dates.length - 1]] : null
  }, [checkins, today, workspace])

  // ── Actions ────────────────────────────────────────────

  const handleSelectPath = pathId => {
    setSelPathId(pathId)
    setStartDate(today)
    setFreq('daily')
    setPhase('configure')
  }

  const handleStartJourney = () => {
    const hasNodes = planPeriods.some(p => p.nodes.length > 0)
    if (!hasNodes) {
      window.alert('Thêm ít nhất một node vào một kỳ học trước khi bắt đầu.')
      return
    }
    const weeklyPlan = buildWeeklyPlanFromPeriods(planPeriods, startDate, freq)

    // FIX: Set the first period as 'active' right away — do NOT call
    // checkAndFailMissedWeeks on a brand-new workspace because it may
    // incorrectly mark same-day periods as failed.
    if (weeklyPlan.length > 0) {
      weeklyPlan[0].status = 'active'
    }

    const raw = { pathId: selPathId, startDate, checkinFrequency: freq, weeklyPlan }
    saveWorkspace(raw)
    setWorkspace(raw)
    setCompleted(getCompletedSkills(selPathId))
    setCheckins(getDailyCheckins())
    setPinnedNodes(getPinnedNodes())
    setPhase('workspace')
  }

  const handleChangeRoadmap = () => {
    if (!window.confirm('Thay đổi roadmap sẽ xóa workspace. Tiến độ kỹ năng vẫn được giữ. Tiếp tục?')) return
    clearWorkspace()
    setWorkspace(null)
    setSelPathId(null)
    setEditPlanOpen(false)
    setPhase('select')
  }

  const handleSaveCheckin = () => {
    upsertDailyCheckin(today, { minutes: ciMinutes, note: ciNote, status: ciStatus })
    setCheckins({ ...getDailyCheckins() })
  }

  const handleDeleteCheckin = dateKey => {
    if (!window.confirm('Xóa check-in này?')) return
    deleteDailyCheckin(dateKey)
    setCheckins({ ...getDailyCheckins() })
    setCiMinutes(30); setCiNote(''); setCiStatus('on-track')
  }

  const handleToggleNode = nodeId => {
    toggleSkillCompletion(workspace.pathId, nodeId)
    setCompleted(getCompletedSkills(workspace.pathId))
    const updated = checkAndFailMissedWeeks(workspace)
    saveWorkspace(updated)
    setWorkspace(updated)
  }

  const handleOpenEditPlan = () => {
    const periods = weeklyPlanToPeriods(workspace.weeklyPlan, activePath?.nodes)
    setEditPlanPeriods(periods)
    setEditPlanOpen(true)
  }

  const handleSaveEditedPlan = () => {
    const weeklyPlan = buildWeeklyPlanFromPeriods(
      editPlanPeriods, workspace.startDate, workspace.checkinFrequency
    )
    const updated = checkAndFailMissedWeeks({ ...workspace, weeklyPlan })
    saveWorkspace(updated)
    setWorkspace(updated)
    setEditPlanOpen(false)
    setEditPlanPeriods([])
  }

  // Late-node banner → back to configure with current plan loaded
  const handleAdjustPlan = () => {
    const periods = weeklyPlanToPeriods(workspace.weeklyPlan, activePath?.nodes)
    setSelPathId(workspace.pathId)
    setPlanPeriods(periods)
    setStartDate(workspace.startDate)
    setFreq(workspace.checkinFrequency)
    setPhase('configure')
  }

  // ── Derived workspace values ───────────────────────────
  const activePath = useMemo(
    () => paths.find(p => p.id === workspace?.pathId),
    [paths, workspace]
  )

  const currentWeek = useMemo(() => {
    if (!workspace) return null
    return workspace.weeklyPlan.find(w => w.status === 'active')
      || workspace.weeklyPlan.find(w => w.status === 'upcoming')
      || null
  }, [workspace])

  const lateNodes = useMemo(() => {
    if (!workspace) return []
    const out = []
    workspace.weeklyPlan.forEach(w => {
      if (w.endDate < today) {
        w.nodeIds.forEach(id => {
          if (!completedSkills.includes(id)) out.push(id)
        })
      }
    })
    return out
  }, [workspace, completedSkills, today])

  const allPlanNodeIds = useMemo(
    () => workspace?.weeklyPlan?.flatMap(w => w.nodeIds) ?? [],
    [workspace]
  )

  const overallProgress = useMemo(() => {
    const total = allPlanNodeIds.length || 1
    return Math.round((completedSkills.length / total) * 100)
  }, [completedSkills, allPlanNodeIds])

  const pinned = useMemo(() => {
    if (!workspace || !activePath) return []
    return (activePath.nodes || [])
      .filter(n => isNodePinned(activePath.id, n.id))
      .map(n => ({ ...n, pathId: activePath.id, pathIcon: activePath.icon, pathColor: activePath.color }))
  }, [workspace, activePath, pinnedNodes])

  // ── Configure: summary helpers ─────────────────────────
  const cfgNonEmpty = planPeriods.filter(p => p.nodes.length > 0).length
  const cfgTotalNodes = planPeriods.reduce((s, p) => s + p.nodes.length, 0)
  const cfgCompletionDate = cfgNonEmpty > 0
    ? addDaysLocal(startDate, (cfgNonEmpty - 1) * (FREQ_DAYS[freq] || 1))
    : null

  // ── Render ─────────────────────────────────────────────
  if (phase === 'loading') return <div className="journey-loading">Đang tải...</div>

  // ────── SELECT ────────────────────────────────────────
  if (phase === 'select') return (
    <div className="journey">
      <section className="jrn-hero">
        <h2 className="journey-title">Chọn Lộ Trình Chính</h2>
        <p className="journey-subtitle">Chọn một lộ trình rồi tự xây kế hoạch học tập bằng drag-and-drop.</p>
      </section>
      <div className="select-grid">
        {paths.map(p => (
          <button key={p.id} className="select-card" onClick={() => handleSelectPath(p.id)}
            style={{ '--pc': p.color }} id={`select-path-${p.id}`}>
            <span className="sc-icon">{p.icon}</span>
            <div className="sc-body">
              <span className="sc-name">{p.name}</span>
              <span className="sc-desc">{p.description}</span>
            </div>
            <div className="sc-foot">
              <span className="sc-cat">{p.category === 'role' ? '👤 Vai trò' : '🎯 Kỹ năng'}</span>
              <span className="sc-weeks">{p.nodes?.length || 0} nodes</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )

  // ────── CONFIGURE ─────────────────────────────────────
  if (phase === 'configure') {
    const selPath = paths.find(p => p.id === selPathId)
    const isEditingExisting = !!workspace

    return (
      <div className="journey">
        <section className="jrn-hero">
          <button className="btn btn-ghost back-link"
            onClick={() => setPhase(isEditingExisting ? 'workspace' : 'select')}>
            ← Quay lại
          </button>
          <h2 className="journey-title">Xây dựng Kế Hoạch Học Tập</h2>
          <p className="journey-subtitle">Kéo các node vào từng kỳ · Sắp xếp thứ tự theo ý muốn</p>
        </section>

        {isEditingExisting && (
          <div className="cfg-edit-note" style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, padding: '8px 14px', margin: '0 0 16px', fontSize: '0.85rem',
          }}>
            📝 Đang chỉnh sửa kế hoạch hiện tại — {lateNodes.length} node chưa hoàn thành
          </div>
        )}

        <div className="cfg-settings-bar">
          <div className="cfg-inline-group">
            <label className="form-label">Ngày bắt đầu</label>
            <input type="date" className="checkin-input cfg-date-input"
              value={startDate} min={today}
              onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className="cfg-inline-group">
            <label className="form-label">Tần suất check-in</label>
            <div className="freq-row">
              {Object.entries(FREQ_LABELS).map(([key, label]) => (
                <button key={key} className={`freq-btn ${freq === key ? 'freq-active' : ''}`}
                  onClick={() => setFreq(key)}>{label}</button>
              ))}
            </div>
          </div>
          <div className="cfg-summary-inline">
            <span>
              {cfgTotalNodes} node · {cfgNonEmpty} kỳ · Hoàn thành:{' '}
              <strong>{cfgCompletionDate ? fmtDate(cfgCompletionDate) : '—'}</strong>
            </span>
          </div>
          <button
            className="btn btn-primary cfg-start-btn"
            onClick={handleStartJourney}
            id="start-journey-btn"
            disabled={cfgTotalNodes === 0}
          >
            {isEditingExisting ? '💾 Cập nhật kế hoạch' : '🚀 Bắt đầu'}
          </button>
        </div>

        <PlanEditor
          pathNodes={(selPath?.nodes || []).slice().sort((a, b) => a.level - b.level)}
          planPeriods={planPeriods}
          setPlanPeriods={setPlanPeriods}
          startDate={startDate}
          freq={freq}
          pathColor={selPath?.color}
        />
      </div>
    )
  }

  // ────── WORKSPACE ─────────────────────────────────────
  return (
    <div className="journey">

      {/* Hero */}
      <section className="journey-hero">
        <div className="journey-hero-left">
          <div className="ws-brand">
            <span className="ws-brand-icon"
              style={{ background: activePath?.color + '1a', borderColor: activePath?.color + '55' }}>
              {activePath?.icon}
            </span>
            <div>
              <h2 className="journey-title">{activePath?.name}</h2>
              <div className="ws-meta">
                <span className="freq-badge">{FREQ_LABELS[workspace?.checkinFrequency]}</span>
                <span className="meta-sep">·</span>
                <span className="ws-meta-text">Ngày thứ {daysSince(workspace?.startDate, today) + 1}</span>
                <span className="meta-sep">·</span>
                <span className="ws-meta-text">Bắt đầu {fmtDate(workspace?.startDate)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-kpis">
          <div className="journey-kpi">
            <div className="kpi-label">Tiến độ</div>
            <div className="kpi-value" style={{ color: activePath?.color }}>{overallProgress}%</div>
          </div>
          <div className="journey-kpi">
            <div className="kpi-label">Hoàn thành</div>
            <div className="kpi-value">
              {completedSkills.length}
              <span className="kpi-total">/{allPlanNodeIds.length}</span>
            </div>
          </div>
          <div className="journey-kpi">
            <div className="kpi-label">Check-ins</div>
            <div className="kpi-value">{Object.keys(checkins).length}</div>
          </div>
        </div>
      </section>

      <div className="ws-pbar-wrap">
        <div className="ws-pbar-fill"
          style={{ width: `${overallProgress}%`, background: activePath?.color }} />
      </div>

      {/* Late-node banner */}
      {lateNodes.length > 0 && (
        <button className="missed-banner" onClick={handleAdjustPlan} id="adjust-plan-btn">
          ⚠️ <strong>{lateNodes.length} node</strong> chưa hoàn thành từ kỳ trước
          <span className="missed-banner-cta">→ Điều chỉnh kế hoạch</span>
        </button>
      )}

      {/* Edit plan overlay */}
      {editPlanOpen && (
        <div className="edit-plan-overlay">
          <div className="edit-plan-panel">
            <div className="rp-header">
              <h3>✏️ Chỉnh sửa kế hoạch</h3>
              <button className="btn btn-ghost rp-close" onClick={() => setEditPlanOpen(false)}>✕</button>
            </div>
            <PlanEditor
              pathNodes={(activePath?.nodes || []).slice().sort((a, b) => a.level - b.level)}
              planPeriods={editPlanPeriods}
              setPlanPeriods={setEditPlanPeriods}
              startDate={workspace?.startDate}
              freq={workspace?.checkinFrequency}
              pathColor={activePath?.color}
            />
            <div className="rp-actions" style={{ marginTop: 16 }}>
              <button className="btn btn-primary" onClick={handleSaveEditedPlan}>💾 Lưu thay đổi</button>
              <button className="btn btn-ghost" onClick={() => setEditPlanOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}

      {/* Main grid */}
      <div className="journey-grid">

        {/* This period */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>
              📅 Kỳ này
              {currentWeek && (
                <span className="card-sub"> · {currentWeek.week}/{workspace.weeklyPlan.length}</span>
              )}
            </h3>
            <div className="week-header-actions">
              {currentWeek && (
                <span className="journey-muted">
                  {fmtDate(currentWeek.startDate)} – {fmtDate(currentWeek.endDate)}
                </span>
              )}
              <button className="btn-icon-sm" onClick={handleOpenEditPlan}
                title="Chỉnh sửa kế hoạch" id="edit-plan-btn">✏️</button>
            </div>
          </div>

          {currentWeek ? (
            <div className="week-nodes">
              {currentWeek.nodeIds.map(nid => {
                const node = activePath?.nodes?.find(n => n.id === nid)
                const label = node?.label || currentWeek.nodeLabels?.[nid] || nid
                const done = completedSkills.includes(nid)
                return (
                  <div key={nid} className={`wn-item ${done ? 'wn-done' : ''}`}>
                    <button
                      className={`wn-toggle ${done ? 'wn-toggle-done' : ''}`}
                      onClick={() => handleToggleNode(nid)}
                      id={`toggle-node-${nid}`}
                      title={done ? 'Bỏ hoàn thành' : 'Đánh dấu hoàn thành'}
                    >
                      {done ? '✓' : '○'}
                    </button>
                    <span className="wn-label">{label}</span>
                    {node && (
                      <button className="wn-go"
                        onClick={() => onOpenPath(workspace.pathId)}
                        title="Mở roadmap">↗</button>
                    )}
                  </div>
                )
              })}
              <div className="week-pbar-wrap">
                <div className="week-pbar-fill" style={{
                  width: `${currentWeek.nodeIds.filter(id => completedSkills.includes(id)).length
                    / currentWeek.nodeIds.length * 100}%`,
                  background: activePath?.color,
                }} />
              </div>
              <span className="week-pbar-text">
                {currentWeek.nodeIds.filter(id => completedSkills.includes(id)).length}
                /{currentWeek.nodeIds.length} hoàn thành
              </span>
            </div>
          ) : (
            <div className="journey-empty">
              <div className="journey-empty-title">Tất cả các kỳ đã xong 🏆</div>
            </div>
          )}
        </section>

        {/* Check-in */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>✏️ Check-in</h3>
            <span className="freq-badge">{FREQ_LABELS[workspace?.checkinFrequency]}</span>
          </div>

          {selectedCheckinDate && selectedCheckinDate !== today && (
            <div className="ci-view-banner">
              📅 Đang xem: <strong>{fmtDateLong(selectedCheckinDate)}</strong>
              <button
                className="btn btn-ghost"
                style={{ fontSize: '0.75rem', padding: '3px 8px' }}
                onClick={() => setSelectedCheckinDate(null)}
              >
                ← Về hôm nay
              </button>
            </div>
          )}

          {(!selectedCheckinDate || selectedCheckinDate === today) &&
            prevCheckin?.status && prevCheckin.status !== 'on-track' && (
              <div className={`ci-prev-status ${CHECKIN_STATUS[prevCheckin.status]?.cls}`}>
                Lần trước: {CHECKIN_STATUS[prevCheckin.status]?.emoji}{' '}
                {CHECKIN_STATUS[prevCheckin.status]?.label}
              </div>
            )}

          {viewCheckin?.locked ? (
            <div className="ci-locked-card">
              <div className="ci-locked-header">
                <div className={`ci-status-badge ${CHECKIN_STATUS[viewCheckin.status]?.cls}`}>
                  {CHECKIN_STATUS[viewCheckin.status]?.emoji} {CHECKIN_STATUS[viewCheckin.status]?.label}
                </div>
                <span className="ci-locked-date">{viewDate}</span>
              </div>
              <div className="ci-locked-body">
                <div className="ci-locked-minutes">⏱ {viewCheckin.minutes} phút</div>
                {viewCheckin.note !== undefined && viewCheckin.note !== '' && (
                  <div className="ci-locked-note">{viewCheckin.note}</div>
                )}
              </div>
              {viewDate === today && (
                <button className="ci-delete-btn" onClick={() => handleDeleteCheckin(today)}>
                  🗑 Xóa check-in này
                </button>
              )}
            </div>
          ) : viewDate === today && checkinAvailability.canCheckin ? (
            <div className="checkin-form">
              <div className="ci-status-picker">
                {Object.entries(CHECKIN_STATUS).map(([key, { label, emoji, cls }]) => (
                  <button key={key} id={`ci-status-${key}`}
                    className={`ci-status-btn ${cls}-outline ${ciStatus === key ? 'ci-status-active ' + cls : ''}`}
                    onClick={() => setCiStatus(key)}>
                    {emoji} {label}
                  </button>
                ))}
              </div>
              <label className="checkin-label" htmlFor="j-minutes">Số phút học</label>
              <input id="j-minutes" type="number" min="0" step="5" value={ciMinutes}
                onChange={e => setCiMinutes(Number(e.target.value))} className="checkin-input" />
              <label className="checkin-label" htmlFor="j-note">Ghi chú</label>
              <textarea id="j-note" rows="3" value={ciNote}
                onChange={e => setCiNote(e.target.value)} className="checkin-textarea"
                placeholder="Bạn đã học gì? Kế hoạch tiếp theo?" />
              <button type="button" className="btn btn-primary ci-save-btn"
                onClick={handleSaveCheckin} id="save-checkin-btn">💾 Lưu check-in</button>
            </div>
          ) : viewDate === today ? (
            <div className="ci-wait-banner">
              <div className="ci-wait-icon">🔒</div>
              <div>
                <div className="ci-wait-title">Check-in tiếp theo</div>
                <div className="ci-wait-date">{fmtDateLong(checkinAvailability.nextDate)}</div>
                <div className="ci-wait-sub">Lần cuối: {fmtDate(checkinAvailability.lastDate)}</div>
              </div>
            </div>
          ) : (
            <div className="ci-wait-banner">
              <div className="ci-wait-icon">📭</div>
              <div>
                <div className="ci-wait-title">Không có check-in</div>
                <div className="ci-wait-sub">Chưa có dữ liệu check-in cho ngày này.</div>
              </div>
            </div>
          )}
        </section>

        {/* Timeline */}
        <section className="journey-card journey-card-wide">
          <div className="journey-card-header">
            <h3>🗓️ Toàn bộ kế hoạch</h3>
            <span className="journey-muted">
              {workspace?.weeklyPlan?.length} kỳ ·
              Kết thúc {fmtDate(workspace?.weeklyPlan?.[workspace.weeklyPlan.length - 1]?.endDate)}
            </span>
          </div>
          <div className="timeline-scroll">
            {workspace?.weeklyPlan?.map(week => {
              const meta = WEEK_META[week.status] || WEEK_META.upcoming
              const labels = week.nodeIds.map(id =>
                activePath?.nodes?.find(n => n.id === id)?.label || week.nodeLabels?.[id] || id
              )
              const label = labels.join(', ') || week.label
              const isCur = week.status === 'active'
              const checkinForWeek = checkins[week.startDate]
              const ciMeta = checkinForWeek ? CHECKIN_STATUS[checkinForWeek.status] : null
              const displayEmoji = ciMeta ? ciMeta.emoji : meta.emoji
              return (
                <div
                  key={week.week}
                  className={`tl-week ${meta.cls} ${isCur ? 'tl-current' : ''}`}
                  onClick={() =>
                    setSelectedCheckinDate(prev =>
                      prev === week.startDate ? null : week.startDate
                    )
                  }
                >
                  <div className="tl-emoji">{displayEmoji}</div>
                  <div className="tl-wk">#{week.week}</div>
                  <div className="tl-node-label">{label}</div>
                  <div className="tl-dates">{fmtDate(week.startDate)}</div>
                  {week.status === 'failed' && <div className="tl-missed">Trễ</div>}
                  {ciMeta && (
                    <div className={`tl-checkin-dot ${ciMeta.cls}`}>
                      {ciMeta.label.split(' ')[0]}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Pinned Nodes */}
        {pinned.length > 0 && (
          <section className="journey-card journey-card-wide">
            <div className="journey-card-header">
              <h3>📌 Node đã ghim</h3>
              <span className="journey-muted">Nhấp để mở roadmap</span>
            </div>
            <div className="pinned-list">
              {pinned.map(p => (
                <div key={`${p.pathId}:${p.id}`} className="pinned-item">
                  <button type="button" className="pinned-main" onClick={() => onOpenPath(p.pathId)}>
                    <span className="pinned-icon">{p.pathIcon}</span>
                    <span className="pinned-text">
                      <span className="pinned-node">{p.label}</span>
                      <span className="pinned-meta">Giai đoạn {p.level + 1}</span>
                    </span>
                  </button>
                  <button type="button" className="pin-toggle"
                    onClick={() => { togglePinnedNode(p.pathId, p.id); setPinnedNodes(getPinnedNodes()) }}
                    style={{ borderColor: p.pathColor }}>✦</button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="ws-footer">
        <button className="btn btn-danger" onClick={handleChangeRoadmap} id="change-roadmap-btn">
          🔄 Thay đổi lộ trình
        </button>
      </div>
    </div>
  )
}