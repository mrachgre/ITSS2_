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
    if (!window.confirm('Xóa check-in hôm nay?')) return
    deleteDailyCheckin(today)
    setCheckins(getDailyCheckins())
    setMinutes(30)
    setNote('')
  }

  const handleResetAll = () => {
    if (!window.confirm('Đặt lại tiến độ cho TẤT CẢ lộ trình?')) return
    resetAllProgress()
    setProgress(getUserProgress())
  }

  return (
    <div className="journey">
      <section className="journey-hero">
        <div className="journey-hero-left">
          <h2 className="journey-title">Hành Trình Của Bạn</h2>
          <p className="journey-subtitle">Ghi lại nỗ lực hôm nay, ghim những gì quan trọng, và bắt đầu bất kỳ lộ trình nào.</p>
        </div>
        <div className="journey-kpis">
          <div className="journey-kpi"><div className="kpi-label">Tổng quan</div><div className="kpi-value">{overall}%</div></div>
          <div className="journey-kpi"><div className="kpi-label">Hoàn thành</div><div className="kpi-value">{totalCompleted}</div></div>
          <div className="journey-kpi"><div className="kpi-label">Tổng node</div><div className="kpi-value">{totalNodes}</div></div>
        </div>
      </section>

      <div className="journey-grid">
        {/* Daily Check-in */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>Check-in hàng ngày</h3>
            <span className="journey-muted">{today}</span>
          </div>
          <div className="checkin-form">
            <label className="checkin-label" htmlFor="minutes">Số phút hôm nay</label>
            <input id="minutes" type="number" min="0" step="5" value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))} className="checkin-input" />
            <label className="checkin-label" htmlFor="note">Ghi chú (tùy chọn)</label>
            <textarea id="note" rows="4" value={note}
              onChange={(e) => setNote(e.target.value)} className="checkin-textarea"
              placeholder="Bạn đã học gì? Bạn sẽ làm gì tiếp theo?" />
            <div className="checkin-actions">
              <button type="button" className="btn btn-primary" onClick={handleSaveCheckin}>Lưu check-in</button>
              <button type="button" className="btn btn-ghost" onClick={handleDeleteCheckin}>Xóa</button>
            </div>
          </div>
        </section>

        {/* Pinned Nodes */}
        <section className="journey-card">
          <div className="journey-card-header">
            <h3>Node đã ghim</h3>
            <span className="journey-muted">Ghim/bỏ ghim từ lộ trình</span>
          </div>
          {pinned.length === 0 ? (
            <div className="journey-empty">
              <div className="journey-empty-title">Chưa ghim gì</div>
              <div className="journey-empty-text">Mở một lộ trình và ghim các node bạn muốn tập trung.</div>
            </div>
          ) : (
            <div className="pinned-list">
              {pinned.map((p) => (
                <div key={`${p.pathId}:${p.nodeId}`} className="pinned-item">
                  <button type="button" className="pinned-main" onClick={() => onOpenPath(p.pathId)}>
                    <span className="pinned-icon">{p.pathIcon}</span>
                    <span className="pinned-text">
                      <span className="pinned-node">{p.nodeLabel}</span>
                      <span className="pinned-meta">trong {p.pathName} • Giai đoạn {p.level + 1}</span>
                    </span>
                  </button>
                  <button type="button" className="pin-toggle"
                    onClick={() => { togglePinnedNode(p.pathId, p.nodeId); setPinnedNodes(getPinnedNodes()) }}
                    title="Bỏ ghim" style={{ borderColor: p.pathColor }}>✦</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Quick Launch */}
        <section className="journey-card journey-card-wide">
          <div className="journey-card-header">
            <h3>Truy cập nhanh</h3>
            <button type="button" className="btn btn-danger" onClick={handleResetAll}>Đặt lại tất cả tiến độ</button>
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
                  <span className="quick-open">Mở →</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
