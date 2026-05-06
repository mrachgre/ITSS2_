import './PathCard.css'

export default function PathCard({ path, progress, onView }) {
  return (
    <button className="path-card" onClick={onView} id={`card-${path.id}`}>
      <div className="card-left">
        <span className="card-icon">{path.icon}</span>
        <span className="card-name">{path.name}</span>
      </div>
      {progress > 0 && (
        <div className="card-progress" style={{ color: path.color }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <circle
              cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray={`${(progress / 100) * 37.7} 37.7`}
              strokeLinecap="round"
              transform="rotate(-90 8 8)"
            />
          </svg>
          <span className="card-progress-text">{progress}%</span>
        </div>
      )}
      <span className="card-arrow">→</span>
    </button>
  )
}
