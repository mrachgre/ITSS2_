import './PathCard.css'

export default function PathCard({ path, progress, onView }) {
  return (
    <button
      className="path-card"
      onClick={onView}
      id={`card-${path.id}`}
      style={{ '--pc': path.color }}
    >
      <div className="pc-accent" />
      <div className="pc-body">
        <div className="pc-top">
          <span className="pc-icon">{path.icon}</span>
          <span className="pc-name">{path.name}</span>
        </div>
        {path.description && (
          <p className="pc-desc">{path.description}</p>
        )}
        {progress > 0 ? (
          <div className="pc-foot">
            <div className="pc-bar-wrap">
              <div className="pc-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="pc-pct">{progress}%</span>
          </div>
        ) : (
          <div className="pc-cta">Bắt đầu →</div>
        )}
      </div>
    </button>
  )
}
