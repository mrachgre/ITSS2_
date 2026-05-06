import { useEffect, useMemo, useState } from 'react'
import {
  deleteDailyCheckin,
  getAllCareerPaths,
  getDailyCheckins,
  getPinnedNodes,
  getUserProgress,
  isNodePinned,
  resetAllProgress,
  togglePinnedNode,
  upsertDailyCheckin
} from '../services/storage'
import './Journey.css'

function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function Journey({ onOpenPath }) {
  const [paths, setPaths] = useState([])
  const [progress, setProgress] = useState([])
  const [checkins, setCheckins] = useState({})
  const [pinnedNodes, setPinnedNodes] = useState([])
  const [minutes, setMinutes] = useState(30)
  const [note, setNote] = useState('')

  useEffect(() => {
    setPaths(getAllCareerPaths())
    setProgress(getUserProgress())
    setCheckins(getDailyCheckins())
    setPinnedNodes(getPinnedNodes())
  }, [])

  const today = todayKey()

  useEffect(() => {
    const existing = checkins[today]
    if (existing) {
      setMinutes(existing.minutes ?? 30)
      setNote(existing.note ?? '')
    }
  }, [checkins, today])

  const totalCompleted = useMemo(() => progress.reduce((s, p) => s + p.completed, 0), [progress])
  const totalNodes = useMemo(() => progress.reduce((s, p) => s + p.total, 0), [progress])
  const overall = totalNodes > 0 ? Math.round((totalCompleted / totalNodes) * 100) : 0

  const pinned = useMemo(() => {
    const result = []
    for (const p of paths) {
      for (const n of p.nodes || []) {
        if (isNodePinned(p.id, n.id)) {
          result.push({ pathId: p.id, pathName: p.name, pathIcon: p.icon, pathColor: p.color, nodeId: n.id, nodeLabel: n.label, level: n.level })
        }
      }
    }
    return result.sort((a, b) => a.level - b.level || a.nodeLabel.localeCompare(b.nodeLabel))
  }, [paths, pinnedNodes])

  const handleSaveCheckin = () => {
    upsertDailyCheckin(today, { minutes, note })
    setCheckins(getDailyCheckins())
  }

  const handleDeleteCheckin = () => {
    if (!window.confirm("Delete today's check-in?")) return
    deleteDailyCheckin(today)
    setCheckins(getDailyCheckins())
    setMinutes(30)
    setNote('')
  }

  const handleResetAll = () => {
    if (!window.confirm('Reset progress for ALL roadmaps?')) return
    resetAllProgress()
    setProgress(getUserProgress())
  }

  return (
    <div className="journey">
      <section className="journey-hero">
        <div className="journey-hero-left">
          <h2 className="journey-title">Your Journey</h2>
          <p className="journey-subtitle">Log today's effort, pin what matters, and jump into any roadmap.</p>
        </div>
        <div className="journey-kpis">
          <div className="journey-kpi"><div className="kpi-label">Overall</div><div className="kpi-value">{overall}%</div></div>
          <div className="journey-kpi"><div className="kpi-label">Completed</div><div className="kpi-value">{totalCompleted}</div></div>
          <div className="journey-kpi"><div className="kpi-label">Total nodes</div><div className="kpi-value">{totalNodes}</div></div>
        </div>
      </section>

      <div className="journey-grid">
        {/* Daily Check-in */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>Daily check-in</h3>
            <span className="journey-muted">{today}</span>
          </div>
          <div className="checkin-form">
            <label className="checkin-label" htmlFor="minutes">Minutes today</label>
            <input id="minutes" type="number" min="0" step="5" value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))} className="checkin-input" />
            <label className="checkin-label" htmlFor="note">Note (optional)</label>
            <textarea id="note" rows="4" value={note}
              onChange={(e) => setNote(e.target.value)} className="checkin-textarea"
              placeholder="What did you learn? What will you do next?" />
            <div className="checkin-actions">
              <button type="button" className="btn btn-primary" onClick={handleSaveCheckin}>Save check-in</button>
              <button type="button" className="btn btn-ghost" onClick={handleDeleteCheckin}>Delete</button>
            </div>
          </div>
        </section>

        {/* Pinned Nodes */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>Pinned nodes</h3>
            <span className="journey-muted">Pin/unpin from a roadmap</span>
          </div>
          {pinned.length === 0 ? (
            <div className="journey-empty">
              <div className="journey-empty-title">Nothing pinned yet</div>
              <div className="journey-empty-text">Open a roadmap and pin nodes you want to focus on.</div>
            </div>
          ) : (
            <div className="pinned-list">
              {pinned.map((p) => (
                <div key={`${p.pathId}:${p.nodeId}`} className="pinned-item">
                  <button type="button" className="pinned-main" onClick={() => onOpenPath(p.pathId)}>
                    <span className="pinned-icon">{p.pathIcon}</span>
                    <span className="pinned-text">
                      <span className="pinned-node">{p.nodeLabel}</span>
                      <span className="pinned-meta">in {p.pathName} • Stage {p.level + 1}</span>
                    </span>
                  </button>
                  <button type="button" className="pin-toggle"
                    onClick={() => { togglePinnedNode(p.pathId, p.nodeId); setPinnedNodes(getPinnedNodes()) }}
                    title="Unpin" style={{ borderColor: p.pathColor }}>✦</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Launch */}
        <section className="journey-card journey-card-wide">
          <div className="journey-card-header">
            <h3>Quick launch</h3>
            <button type="button" className="btn btn-danger" onClick={handleResetAll}>Reset all progress</button>
          </div>
          <div className="quick-grid">
            {paths.map((p) => (
              <button key={p.id} type="button" className="quick-card" onClick={() => onOpenPath(p.id)}>
                <span className="quick-top">
                  <span className="quick-icon">{p.icon}</span>
                  <span className="quick-name">{p.name}</span>
                </span>
                <span className="quick-desc">{p.description}</span>
                <span className="quick-foot">
                  <span className="quick-pill" style={{ borderColor: p.color }}>
                    {progress.find(x => x.id === p.id)?.progress ?? 0}%
                  </span>
                  <span className="quick-open">Open →</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
