import { getNodeResources, RESOURCE_TYPE_ICONS } from '../services/resources'
import './NodePanel.css'

/**
 * Slide-out panel showing node details and learning resources.
 * Appears when a node is clicked in the roadmap graph.
 */
export default function NodePanel({ node, pathColor, isDone, onToggleDone, onClose }) {
  if (!node) return null

  const resources = getNodeResources(node.id)
  const isCheckpoint = node.type === 'checkpoint'

  return (
    <>
      <div className="np-overlay" onClick={onClose} />
      <aside className="np-panel">
        {/* Header */}
        <div className="np-header">
          <button className="np-close" onClick={onClose} aria-label="Đóng bảng">✕</button>
          <div className={`np-badge ${isCheckpoint ? 'np-badge-cp' : ''}`}
               style={isCheckpoint ? {} : { background: pathColor }}>
            {isCheckpoint ? '🏁' : '📘'}
          </div>
          <h2 className="np-title">{node.label}</h2>
          <span className="np-type-tag">{isCheckpoint ? 'Checkpoint' : 'Kỹ năng'} • Giai đoạn {node.level + 1}</span>
        </div>

        {/* Done toggle */}
        <button
          type="button"
          className={`np-done-btn ${isDone ? 'np-is-done' : ''}`}
          onClick={onToggleDone}
        >
          <span className="np-done-icon">{isDone ? '✓' : '○'}</span>
          {isDone ? 'Đã hoàn thành — nhấp để hoàn tác' : 'Đánh dấu Hoàn thành'}
        </button>

        {/* Tip if present */}
        {node.tip && (
          <div className="np-tip">
            <span className="np-tip-icon">💡</span>
            <p>{node.tip}</p>
          </div>
        )}

        {/* Resources */}
        <div className="np-resources">
          <h3 className="np-resources-title">
            Tài Liệu Học Tập
            <span className="np-resources-count">{resources.length}</span>
          </h3>

          {resources.length === 0 ? (
            <div className="np-empty">Chưa có tài liệu được tuyển chọn cho node này.</div>
          ) : (
            <ul className="np-resource-list">
              {resources.map((r, i) => (
                <li key={i} className="np-resource-item">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="np-resource-link">
                    <span className="np-resource-icon">{RESOURCE_TYPE_ICONS[r.type] || '🔗'}</span>
                    <span className="np-resource-info">
                      <span className="np-resource-name">{r.title}</span>
                      <span className="np-resource-type">{r.type}</span>
                    </span>
                    <span className="np-resource-arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="np-footer">
          <p>Nhấp vào tài liệu để mở trong tab mới.</p>
        </div>
      </aside>
    </>
  )
}
