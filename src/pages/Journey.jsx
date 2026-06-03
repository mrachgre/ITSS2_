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

// ── TASK 5 — Demo date offset helpers ────────────────────────────
const DEMO_OFFSET_KEY = 'carrierpath_demo_offset'

function getDemoOffset() {
  return parseInt(localStorage.getItem(DEMO_OFFSET_KEY) || '0', 10) || 0
}
function setDemoOffset(n) {
  localStorage.setItem(DEMO_OFFSET_KEY, String(n))
}
function getTodayWithOffset() {
  const offset = getDemoOffset()
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// ── Static helpers ────────────────────────────────────────────────
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
const FREQ_DAYS   = { daily: 1, every2days: 2, weekly: 7 }

const WEEK_META = {
  done:     { emoji: '✅', cls: 'wk-done' },
  active:   { emoji: '🔄', cls: 'wk-active' },
  failed:   { emoji: '❌', cls: 'wk-failed' },
  upcoming: { emoji: '🔒', cls: 'wk-upcoming' },
}

// TASK 4B — updated Vietnamese labels
const CHECKIN_STATUS = {
  ahead:     { label: 'Sớm hơn kế hoạch',  emoji: '🚀', cls: 'ci-ahead' },
  'on-track': { label: 'Đúng hạn',           emoji: '✅', cls: 'ci-ontrack' },
  behind:    { label: 'Muộn hơn kế hoạch', emoji: '🐢', cls: 'ci-behind' },
}

// ── Plan builder helpers ──────────────────────────────────────────
function buildWeeklyPlan(planNodes, startDate, freq) {
  const interval = FREQ_DAYS[freq] || 1
  return planNodes.map((node, i) => {
    const periodStart = addDaysLocal(startDate, i * interval)
    const periodEnd   = addDaysLocal(periodStart, interval - 1)
    return {
      week: i + 1,
      nodeIds: [node.id],
      missedNodeIds: [],
      status: 'upcoming',
      startDate: periodStart,
      endDate: periodEnd,
      label: node.label,
    }
  })
}

function weeklyPlanToFlat(weeklyPlan, pathNodes) {
  return weeklyPlan.flatMap(w =>
    w.nodeIds.map(id => {
      const rn = pathNodes?.find(n => n.id === id)
      return { id, label: rn?.label || w.label || id }
    })
  )
}

function attachDates(planNodes, startDate, freq) {
  const interval = FREQ_DAYS[freq] || 1
  return planNodes.map((n, i) => ({
    ...n, checkInDate: addDaysLocal(startDate, i * interval)
  }))
}

// TASK 4C — dominant check-in status
function computeLearningRhythm(checkins) {
  const all = Object.values(checkins)
  if (!all.length) return { emoji: '➖', text: 'Chưa có dữ liệu', cls: '' }
  const counts = { ahead: 0, 'on-track': 0, behind: 0 }
  all.forEach(c => { if (counts[c.status] !== undefined) counts[c.status]++ })
  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
  if (dominant === 'ahead')     return { emoji: '🚀', text: 'Đang vượt tiến độ', cls: 'ci-ahead' }
  if (dominant === 'on-track')  return { emoji: '✅', text: 'Đang đúng hạn',    cls: 'ci-ontrack' }
  return { emoji: '⚠️', text: 'Đang chậm tiến độ', cls: 'ci-behind' }
}

// ─────────────────────────────────────────────────────────────────
//  DnD sub-components  (TASK 2 — clean card appearance)
// ─────────────────────────────────────────────────────────────────

function LibraryCard({ node, pathColor, alreadyInPlan }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `lib-${node.id}`,
    data: { source: 'library', node },
    disabled: alreadyInPlan,
  })
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}
      className={`pe-lib-card ${isDragging ? 'pe-lib-dragging' : ''} ${alreadyInPlan ? 'pe-lib-used' : ''}`}
      style={{ '--pc': pathColor }}>
      <span className="pe-lib-label">{node.label}</span>
      {alreadyInPlan && <span className="pe-lib-check">✓</span>}
    </div>
  )
}

function PlanDropZone({ children, isOver }) {
  const { setNodeRef } = useDroppable({ id: 'plan-droppable' })
  return (
    <div ref={setNodeRef} className={`pe-drop-zone ${isOver ? 'pe-drop-active' : ''}`}>
      {children}
    </div>
  )
}

function SortablePlanNode({ node, index, pathColor, onDelete }) {
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
      <span className="pe-node-date">{fmtDate(node.checkInDate)}</span>
      {/* TASK 2 — hover-reveal delete */}
      <button
        className="pe-node-delete-hover"
        onClick={e => { e.stopPropagation(); onDelete(node.id) }}
        title="Xóa node"
        onPointerDown={e => e.stopPropagation()}   // prevent drag activation
      >✕</button>
    </div>
  )
}

// ── Plan Editor (DnD canvas) ──────────────────────────────────────
function PlanEditor({ pathNodes, planNodes, setPlanNodes, startDate, freq, pathColor }) {
  const [activeId, setActiveId]     = useState(null)
  const [activeData, setActiveData] = useState(null)
  const [isOverZone, setIsOverZone] = useState(false)
  const [customLabel, setCustomLabel] = useState('')

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))

  const planWithDates = useMemo(
    () => attachDates(planNodes, startDate, freq),
    [planNodes, startDate, freq]
  )
  const completionDate = planWithDates.length > 0 ? planWithDates[planWithDates.length - 1].checkInDate : null
  const planIds = planWithDates.map(n => n.id)

  const handleDragStart = ({ active }) => {
    setActiveId(active.id)
    setActiveData(active.data.current)
  }

  const handleDragOver = ({ over }) => {
    setIsOverZone(!!(over?.id === 'plan-droppable' || planIds.includes(over?.id)))
  }

  // TASK 1 — Fixed reorder crash: robust bounds check via arrayMove
  const handleDragEnd = ({ active, over }) => {
    setActiveId(null)
    setActiveData(null)
    setIsOverZone(false)
    if (!over) return

    const fromLibrary = String(active.id).startsWith('lib-')

    if (fromLibrary) {
      const node = active.data.current?.node
      if (!node) return
      if (planNodes.some(n => n.id === node.id)) return
      const newNode = { id: node.id, label: node.label }

      setPlanNodes(prev => {
        if (over.id === 'plan-droppable') return [...prev, newNode]
        const idx = prev.findIndex(n => n.id === over.id)
        if (idx < 0) return [...prev, newNode]     // safe fallback
        const next = [...prev]
        next.splice(idx + 1, 0, newNode)
        return next
      })
    } else {
      // TASK 1 — bounds-checked reorder
      const overId = over.id
      if (active.id === overId || overId === 'plan-droppable') return

      setPlanNodes(prev => {
        const oldIdx = prev.findIndex(n => n.id === active.id)
        const newIdx = prev.findIndex(n => n.id === overId)
        // Both must be valid indices in bounds
        if (oldIdx < 0 || newIdx < 0 || oldIdx >= prev.length || newIdx >= prev.length) return prev
        return arrayMove(prev, oldIdx, newIdx)
      })
    }
  }

  const handleDelete = nodeId => setPlanNodes(prev => prev.filter(n => n.id !== nodeId))

  const handleAddCustom = () => {
    const label = customLabel.trim()
    if (!label) return
    setPlanNodes(prev => [...prev, { id: `custom-${Date.now()}`, label }])
    setCustomLabel('')
  }

  const handleLoadAll = () => {
    const missing = pathNodes
      .filter(n => !planNodes.some(p => p.id === n.id))
      .map(n => ({ id: n.id, label: n.label }))
    setPlanNodes(prev => [...prev, ...missing])
  }

  const handleClearAll = () => {
    if (planNodes.length === 0) return
    if (window.confirm('Xóa toàn bộ kế hoạch hiện tại?')) setPlanNodes([])
  }

  const activeLibNode = activeData?.source === 'library' ? activeData.node : null

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}
      onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>

      <div className="plan-editor">
        {/* Library */}
        <div className="pe-library">
          <div className="pe-library-header">
            <h4>📚 Thư viện Node</h4>
            <button className="btn pe-load-all" onClick={handleLoadAll}
              disabled={pathNodes.every(n => planNodes.some(p => p.id === n.id))}>
              Thêm tất cả ↓
            </button>
          </div>

          <div className="pe-library-list">
            {pathNodes.map(node => (
              <LibraryCard key={node.id} node={node} pathColor={pathColor}
                alreadyInPlan={planNodes.some(p => p.id === node.id)} />
            ))}
          </div>

          <div className="pe-lib-divider">✦ Chủ đề tùy chỉnh</div>
          <div className="pe-custom-row">
            <input className="pe-custom-input" placeholder="Thêm chủ đề mới..."
              value={customLabel} onChange={e => setCustomLabel(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddCustom()} />
            <button className="btn btn-primary pe-custom-btn" onClick={handleAddCustom}>+</button>
          </div>
        </div>

        {/* Plan */}
        <div className="pe-plan">
          <div className="pe-plan-header">
            <div>
              <h4>📋 Kế hoạch học tập</h4>
              <span className="pe-plan-count">{planWithDates.length} node</span>
            </div>
            <div className="pe-plan-header-right">
              {completionDate && <span className="pe-completion">🏁 {fmtDate(completionDate)}</span>}
              {planNodes.length > 0 && (
                <button className="pe-clear-btn" onClick={handleClearAll}>🗑 Xóa tất cả</button>
              )}
            </div>
          </div>

          <SortableContext items={planIds} strategy={verticalListSortingStrategy}>
            <PlanDropZone isOver={isOverZone && planNodes.length === 0}>
              {planWithDates.length === 0 ? (
                <div className={`pe-empty-state ${isOverZone ? 'pe-empty-over' : ''}`}>
                  <div className="pe-empty-icon">📥</div>
                  <div className="pe-empty-text">
                    Kéo các chủ đề từ thư viện vào đây<br />để xây dựng lộ trình học tập của bạn.
                  </div>
                </div>
              ) : (
                <div className="pe-nodes-list">
                  {planWithDates.map((node, i) => (
                    <SortablePlanNode key={node.id} node={node} index={i}
                      pathColor={pathColor} onDelete={handleDelete} />
                  ))}
                </div>
              )}
            </PlanDropZone>
          </SortableContext>
        </div>
      </div>

      <DragOverlay>
        {activeLibNode && (
          <div className="pe-drag-ghost lib-ghost">{activeLibNode.label}</div>
        )}
        {activeId && !activeLibNode && (
          <div className="pe-drag-ghost plan-ghost">
            {planWithDates.find(n => n.id === activeId)?.label}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

// ── Main Component ────────────────────────────────────────────────
export default function Journey({ onOpenPath }) {
  const [phase, setPhase]         = useState('loading')
  const [paths, setPaths]         = useState([])
  const [workspace, setWorkspace] = useState(null)

  // Configure state
  const [selPathId, setSelPathId] = useState(null)
  const [startDate, setStartDate] = useState(() => getTodayWithOffset())
  const [freq, setFreq]           = useState('daily')
  const [planNodes, setPlanNodes] = useState([])

  // Workspace state
  const [checkins, setCheckins]         = useState({})
  const [completedSkills, setCompleted] = useState([])
  const [pinnedNodes, setPinnedNodes]   = useState([])

  // Check-in form
  const [ciMinutes, setCiMinutes] = useState(30)
  const [ciNote, setCiNote]       = useState('')
  const [ciStatus, setCiStatus]   = useState('on-track')

  // Edit plan panel — TASK 3: always accessible
  const [editPlanOpen, setEditPlanOpen]   = useState(false)
  const [editPlanNodes, setEditPlanNodes] = useState([])

  // Reassign panel
  const [reassignOpen, setReassignOpen]       = useState(false)
  const [reassignTargets, setReassignTargets] = useState({})

  // TASK 5 — Demo offset
  const [demoOffset, setDemoOffsetState] = useState(getDemoOffset())
  const today = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + demoOffset)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  }, [demoOffset])

  const advanceDay = () => {
    const next = demoOffset + 1
    setDemoOffset(next)
    setDemoOffsetState(next)
    // Re-evaluate workspace after advancing
    if (workspace) {
      const updated = checkAndFailMissedWeeks(workspace, next)
      saveWorkspace(updated)
      setWorkspace(updated)
    }
  }
  const resetDay = () => {
    setDemoOffset(0)
    setDemoOffsetState(0)
    if (workspace) {
      const updated = checkAndFailMissedWeeks(workspace, 0)
      saveWorkspace(updated)
      setWorkspace(updated)
    }
  }

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
      const hasMissed = updated.weeklyPlan.some(
        w => w.status === 'failed' && (w.missedNodeIds || []).length > 0
      )
      if (hasMissed) setReassignOpen(true)
      setPhase('workspace')
    } else {
      setPhase('select')
    }
  }, [])

  // Initialize plan when entering configure
  useEffect(() => {
    if (phase === 'configure' && selPathId) {
      const selPath = paths.find(p => p.id === selPathId)
      const ordered = (selPath?.nodes || []).slice().sort((a, b) => a.level - b.level || a.id.localeCompare(b.id))
      setPlanNodes(ordered.map(n => ({ id: n.id, label: n.label })))
    }
  }, [phase, selPathId, paths])

  // ── Check-in availability (uses virtual today) ──────────
  const checkinAvailability = useMemo(() => {
    if (!workspace) return { canCheckin: false, nextDate: null, lastDate: null }
    const allDates = Object.keys(checkins).sort()
    const lastDate = allDates[allDates.length - 1] || null
    if (!lastDate) return { canCheckin: true, nextDate: today, lastDate: null }
    const nextDate = addDaysLocal(lastDate, FREQ_DAYS[workspace.checkinFrequency] || 1)
    return { canCheckin: today >= nextDate, nextDate, lastDate }
  }, [checkins, workspace, today])

  const todayCheckin = checkins[today]
  const prevCheckin  = useMemo(() => {
    const dates = Object.keys(checkins).sort().filter(d => d < today)
    return dates.length ? checkins[dates[dates.length - 1]] : null
  }, [checkins, today])

  // TASK 4C
  const rhythm = useMemo(() => computeLearningRhythm(checkins), [checkins])

  // ── Actions ────────────────────────────────────────────

  const handleSelectPath = pathId => {
    setSelPathId(pathId)
    setStartDate(today)
    setFreq('daily')
    setPhase('configure')
  }

  const handleStartJourney = () => {
    if (planNodes.length === 0) {
      window.alert('Thêm ít nhất một node vào kế hoạch trước khi bắt đầu.')
      return
    }
    const weeklyPlan = buildWeeklyPlan(planNodes, startDate, freq)
    const raw = { pathId: selPathId, startDate, checkinFrequency: freq, weeklyPlan }
    const ws  = checkAndFailMissedWeeks(raw)
    saveWorkspace(ws)
    setWorkspace(ws)
    setCompleted(getCompletedSkills(selPathId))
    setCheckins(getDailyCheckins())
    setPinnedNodes(getPinnedNodes())
    setReassignOpen(false)
    setReassignTargets({})
    setPhase('workspace')
  }

  const handleChangeRoadmap = () => {
    if (!window.confirm('Thay đổi roadmap sẽ xóa workspace. Tiến độ kỹ năng vẫn được giữ. Tiếp tục?')) return
    clearWorkspace()
    setWorkspace(null)
    setSelPathId(null)
    setEditPlanOpen(false)
    setReassignOpen(false)
    setPhase('select')
  }

  // TASK 4A — fix: read fresh checkins, explicit key assignment
  const handleSaveCheckin = () => {
    upsertDailyCheckin(today, { minutes: ciMinutes, note: ciNote, status: ciStatus })
    setCheckins({ ...getDailyCheckins() })  // spread forces re-render
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

  // TASK 3 — always accessible edit plan
  const handleOpenEditPlan = () => {
    const flat = weeklyPlanToFlat(workspace.weeklyPlan, activePath?.nodes)
    setEditPlanNodes(flat)
    setEditPlanOpen(true)
  }

  const handleSaveEditedPlan = () => {
    const weeklyPlan = buildWeeklyPlan(editPlanNodes, workspace.startDate, workspace.checkinFrequency)
    const updated = checkAndFailMissedWeeks({ ...workspace, weeklyPlan })
    saveWorkspace(updated)
    setWorkspace(updated)
    setEditPlanOpen(false)
    setEditPlanNodes([])
  }

  const handleApplyReassign = () => {
    let ws = workspace
    const failedWeeks = ws.weeklyPlan.filter(
      w => w.status === 'failed' && (w.missedNodeIds || []).length > 0
    )
    const reassignedNodes = []
    failedWeeks.forEach(fw => {
      ;(fw.missedNodeIds || []).forEach(nodeId => {
        const t = reassignTargets[nodeId]
        if (t) reassignedNodes.push({ nodeId, targetSlot: Number(t) })
      })
    })

    const flatNodes = weeklyPlanToFlat(ws.weeklyPlan, activePath?.nodes)
    reassignedNodes.forEach(({ nodeId, targetSlot }) => {
      const existingIdx = flatNodes.findIndex(n => n.id === nodeId)
      if (existingIdx !== -1) flatNodes.splice(existingIdx, 1)
      const insertAt = Math.min(Math.max(0, targetSlot - 1), flatNodes.length)
      flatNodes.splice(insertAt, 0, {
        id: nodeId,
        label: activePath?.nodes?.find(n => n.id === nodeId)?.label || nodeId
      })
    })

    const newWeeklyPlan = buildWeeklyPlan(flatNodes, ws.startDate, ws.checkinFrequency)
    const updated = checkAndFailMissedWeeks({ ...ws, weeklyPlan: newWeeklyPlan })
    saveWorkspace(updated)
    setWorkspace(updated)
    setReassignOpen(false)
    setReassignTargets({})
  }

  // ── Derived ────────────────────────────────────────────
  const activePath     = useMemo(() => paths.find(p => p.id === workspace?.pathId), [paths, workspace])
  const currentWeek    = useMemo(() => {
    if (!workspace) return null
    return workspace.weeklyPlan.find(w => w.status === 'active')
        || workspace.weeklyPlan.find(w => w.status === 'upcoming') || null
  }, [workspace])
  const failedWeeks    = useMemo(() =>
    (workspace?.weeklyPlan || []).filter(w => w.status === 'failed' && (w.missedNodeIds || []).length > 0),
    [workspace])
  const overallProgress = useMemo(() => {
    const wsTotal = workspace?.weeklyPlan?.length || 1
    return wsTotal ? Math.round((completedSkills.length / wsTotal) * 100) : 0
  }, [completedSkills, workspace])
  const pinned         = useMemo(() => {
    if (!workspace || !activePath) return []
    return (activePath.nodes || [])
      .filter(n => isNodePinned(activePath.id, n.id))
      .map(n => ({ ...n, pathId: activePath.id, pathIcon: activePath.icon, pathColor: activePath.color }))
  }, [workspace, activePath, pinnedNodes])
  const totalMissed    = useMemo(() => failedWeeks.reduce((s, w) => s + (w.missedNodeIds?.length || 0), 0), [failedWeeks])
  const allReassigned  = useMemo(() =>
    failedWeeks.flatMap(fw => fw.missedNodeIds || []).every(id => reassignTargets[id]),
    [failedWeeks, reassignTargets])
  const futureSlots    = useMemo(() =>
    (workspace?.weeklyPlan || []).filter(w => w.status === 'active' || w.status === 'upcoming'),
    [workspace])

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
    return (
      <div className="journey">
        <section className="jrn-hero">
          <button className="btn btn-ghost back-link" onClick={() => setPhase('select')}>← Quay lại</button>
          <h2 className="journey-title">Xây dựng Kế Hoạch Học Tập</h2>
          <p className="journey-subtitle">
            Kéo các node từ thư viện · Sắp xếp thứ tự · Thêm chủ đề tùy thích
          </p>
        </section>

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
            <span>{planNodes.length} node · Hoàn thành: <strong>{planNodes.length > 0
              ? fmtDate(addDaysLocal(startDate, (planNodes.length - 1) * (FREQ_DAYS[freq] || 1)))
              : '—'}</strong></span>
          </div>
          <button className="btn btn-primary cfg-start-btn"
            onClick={handleStartJourney} id="start-journey-btn"
            disabled={planNodes.length === 0}>
            🚀 Bắt đầu
          </button>
        </div>

        <PlanEditor
          pathNodes={(selPath?.nodes || []).slice().sort((a, b) => a.level - b.level)}
          planNodes={planNodes}
          setPlanNodes={setPlanNodes}
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
            <div className="kpi-value">{completedSkills.length}<span className="kpi-total">/{workspace?.weeklyPlan?.length || 0}</span></div>
          </div>
          <div className="journey-kpi">
            <div className="kpi-label">Check-ins</div>
            <div className="kpi-value">{Object.keys(checkins).length}</div>
          </div>
          {/* TASK 4C — Nhịp học KPI */}
          <div className={`journey-kpi kpi-rhythm ${rhythm.cls}`}>
            <div className="kpi-label">Nhịp học</div>
            <div className="kpi-value kpi-rhythm-val">{rhythm.emoji}</div>
            <div className="kpi-rhythm-text">{rhythm.text}</div>
          </div>
        </div>
      </section>

      <div className="ws-pbar-wrap">
        <div className="ws-pbar-fill" style={{ width: `${overallProgress}%`, background: activePath?.color }} />
      </div>

      {/* Demo date bar — TASK 5 */}
      {demoOffset !== 0 && (
        <div className="demo-date-bar">
          🧪 Demo: ngày ảo <strong>{today}</strong> (+{demoOffset} ngày)
        </div>
      )}

      {/* Missed deadline banner */}
      {totalMissed > 0 && !reassignOpen && (
        <button className="missed-banner" onClick={() => setReassignOpen(true)}>
          ⚠️ <strong>{totalMissed} node</strong> chưa hoàn thành từ kỳ trước
          <span className="missed-banner-cta">→ Sắp xếp lại</span>
        </button>
      )}

      {/* Reassign panel */}
      {reassignOpen && totalMissed > 0 && (
        <div className="reassign-panel">
          <div className="rp-header">
            <h3>⚠️ Sắp xếp lại node trễ</h3>
            <button className="btn btn-ghost rp-close" onClick={() => setReassignOpen(false)}>✕</button>
          </div>
          <p className="rp-desc">Chọn vị trí (slot) mới cho mỗi node bị trễ.</p>
          <div className="rp-list">
            {failedWeeks.flatMap(fw => (fw.missedNodeIds || []).map(nodeId => {
              const node = activePath?.nodes?.find(n => n.id === nodeId)
              return (
                <div key={`${fw.week}:${nodeId}`} className="rp-item">
                  <div className="rp-node-info">
                    <span className="rp-node-name">{node?.label || nodeId}</span>
                    <span className="rp-node-from">Kỳ {fw.week}</span>
                  </div>
                  <select className="rp-select"
                    value={reassignTargets[nodeId] || ''}
                    onChange={e => setReassignTargets(prev => ({ ...prev, [nodeId]: e.target.value }))}>
                    <option value="">Chọn vị trí...</option>
                    {futureSlots.map(w => {
                      const nid = w.nodeIds[0]
                      const nl  = activePath?.nodes?.find(n => n.id === nid)?.label || nid
                      return (
                        <option key={w.week} value={w.week}>
                          Vị trí {w.week} ({fmtDate(w.startDate)}) · {nl}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )
            }))}
          </div>
          <div className="rp-actions">
            <button className="btn btn-primary" disabled={!allReassigned} onClick={handleApplyReassign}>✅ Áp dụng</button>
            <button className="btn btn-ghost" onClick={() => setReassignOpen(false)}>Để sau</button>
          </div>
        </div>
      )}

      {/* TASK 3 — Edit plan overlay (always accessible) */}
      {editPlanOpen && (
        <div className="edit-plan-overlay">
          <div className="edit-plan-panel">
            <div className="rp-header">
              <h3>✏️ Chỉnh sửa kế hoạch</h3>
              <button className="btn btn-ghost rp-close" onClick={() => setEditPlanOpen(false)}>✕</button>
            </div>
            <PlanEditor
              pathNodes={(activePath?.nodes || []).slice().sort((a, b) => a.level - b.level)}
              planNodes={editPlanNodes}
              setPlanNodes={setEditPlanNodes}
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
            <h3>📅 Kỳ này
              {currentWeek && <span className="card-sub"> · {currentWeek.week}/{workspace.weeklyPlan.length}</span>}
            </h3>
            <div className="week-header-actions">
              {currentWeek && (
                <span className="journey-muted">{fmtDate(currentWeek.startDate)} – {fmtDate(currentWeek.endDate)}</span>
              )}
              {/* TASK 3 — always visible edit button */}
              <button className="btn-icon-sm" onClick={handleOpenEditPlan}
                title="Chỉnh sửa kế hoạch" id="edit-plan-btn">✏️</button>
            </div>
          </div>

          {currentWeek ? (
            <div className="week-nodes">
              {currentWeek.nodeIds.map(nid => {
                const node  = activePath?.nodes?.find(n => n.id === nid)
                const label = node?.label || currentWeek.label || nid
                const done  = completedSkills.includes(nid)
                return (
                  <div key={nid} className={`wn-item ${done ? 'wn-done' : ''}`}>
                    <button className={`wn-toggle ${done ? 'wn-toggle-done' : ''}`}
                      onClick={() => handleToggleNode(nid)} id={`toggle-node-${nid}`}
                      title={done ? 'Bỏ hoàn thành' : 'Đánh dấu hoàn thành'}>
                      {done ? '✓' : '○'}
                    </button>
                    <span className="wn-label">{label}</span>
                    {node && (
                      <button className="wn-go" onClick={() => onOpenPath(workspace.pathId)} title="Mở roadmap">↗</button>
                    )}
                  </div>
                )
              })}
              <div className="week-pbar-wrap">
                <div className="week-pbar-fill" style={{
                  width: `${currentWeek.nodeIds.filter(id => completedSkills.includes(id)).length / currentWeek.nodeIds.length * 100}%`,
                  background: activePath?.color
                }} />
              </div>
              <span className="week-pbar-text">
                {currentWeek.nodeIds.filter(id => completedSkills.includes(id)).length}/{currentWeek.nodeIds.length} hoàn thành
              </span>
            </div>
          ) : (
            <div className="journey-empty">
              <div className="journey-empty-title">Tất cả các kỳ đã xong 🏆</div>
            </div>
          )}
        </section>

        {/* Check-in — TASK 4 */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>✏️ Check-in</h3>
            <span className="freq-badge">{FREQ_LABELS[workspace?.checkinFrequency]}</span>
          </div>

          {/* Previous status reminder */}
          {prevCheckin?.status && prevCheckin.status !== 'on-track' && (
            <div className={`ci-prev-status ${CHECKIN_STATUS[prevCheckin.status]?.cls}`}>
              Lần trước: {CHECKIN_STATUS[prevCheckin.status]?.emoji} {CHECKIN_STATUS[prevCheckin.status]?.label}
            </div>
          )}

          {/* TASK 4A — locked card re-renders with spread state */}
          {todayCheckin?.locked ? (
            <div className="ci-locked-card">
              <div className="ci-locked-header">
                <div className={`ci-status-badge ${CHECKIN_STATUS[todayCheckin.status]?.cls}`}>
                  {CHECKIN_STATUS[todayCheckin.status]?.emoji} {CHECKIN_STATUS[todayCheckin.status]?.label}
                </div>
                <span className="ci-locked-date">{today}</span>
              </div>
              <div className="ci-locked-body">
                <div className="ci-locked-minutes">⏱ {todayCheckin.minutes} phút</div>
                {/* TASK 4A — always render note even if empty string */}
                {todayCheckin.note !== undefined && todayCheckin.note !== '' && (
                  <div className="ci-locked-note">{todayCheckin.note}</div>
                )}
              </div>
              <button className="ci-delete-btn" onClick={() => handleDeleteCheckin(today)}>
                🗑 Xóa check-in này
              </button>
            </div>
          ) : checkinAvailability.canCheckin ? (
            <div className="checkin-form">
              {/* TASK 4B — updated labels */}
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
          ) : (
            <div className="ci-wait-banner">
              <div className="ci-wait-icon">🔒</div>
              <div>
                <div className="ci-wait-title">Check-in tiếp theo</div>
                <div className="ci-wait-date">{fmtDateLong(checkinAvailability.nextDate)}</div>
                <div className="ci-wait-sub">Lần cuối: {fmtDate(checkinAvailability.lastDate)}</div>
              </div>
            </div>
          )}

          {/* TASK 5 — Demo advance-day buttons */}
          <div className="demo-controls">
            <span className="demo-label">🧪 Demo</span>
            <button className="btn btn-ghost demo-btn" onClick={advanceDay}>⏭ Ngày tiếp theo</button>
            {demoOffset !== 0 && (
              <button className="btn btn-ghost demo-btn" onClick={resetDay}>↺ Reset</button>
            )}
          </div>
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
              const meta   = WEEK_META[week.status] || WEEK_META.upcoming
              const nodeId = week.nodeIds[0]
              const node   = activePath?.nodes?.find(n => n.id === nodeId)
              const label  = node?.label || week.label || nodeId
              const isCur  = week.status === 'active'
              return (
                <div key={week.week} className={`tl-week ${meta.cls} ${isCur ? 'tl-current' : ''}`}>
                  <div className="tl-emoji">{meta.emoji}</div>
                  <div className="tl-wk">#{week.week}</div>
                  <div className="tl-node-label">{label}</div>
                  <div className="tl-dates">{fmtDate(week.startDate)}</div>
                  {week.status === 'failed' && <div className="tl-missed">Trễ</div>}
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