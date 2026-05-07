import { useState, useEffect } from 'react'
import { getProject } from '../services/storage'
import './ProjectDetail.css'

const DIFF_COLORS = {
  Beginner: '#00bcd4',
  Intermediate: '#ffd93d',
  Advanced: '#ff5252'
}

const DIFF_LABELS = {
  Beginner: 'Cơ bản',
  Intermediate: 'Trung bình',
  Advanced: 'Nâng cao'
}

export default function ProjectDetail({ projectId, onBack }) {
  const [project, setProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [solutionUrl, setSolutionUrl] = useState('')

  useEffect(() => {
    setProject(getProject(projectId))
  }, [projectId])

  if (!project) return <div className="project-detail loading">Đang tải...</div>

  const diffColor = DIFF_COLORS[project.difficulty]

  return (
    <div className="project-detail">
      {/* Back */}
      <button className="pd-back-btn" onClick={onBack}>← Quay về Dự án</button>

      {/* Badges row */}
      <div className="pd-badges-row">
        <div className="pd-tags">
          {project.tags.map(tag => (
            <span key={tag} className="pd-tag">{tag}</span>
          ))}
        </div>
        <span className="pd-difficulty" style={{ color: diffColor, borderColor: diffColor }}>
          {DIFF_LABELS[project.difficulty]}
        </span>
      </div>

      {/* Title */}
      <h1 className="pd-title">{project.title}</h1>
      <p className="pd-subtitle">{project.description}</p>

      {/* Long description blockquote */}
      <blockquote className="pd-blockquote">
        <p>{project.longDescription}</p>
      </blockquote>

      {/* Intro */}
      <p className="pd-intro">
        Trong dự án này, bạn cần xây dựng một giải pháp đáp ứng các yêu cầu sau
        và vượt qua danh sách kiểm tra nộp bài bên dưới.
      </p>

      {/* Key Requirements */}
      <section className="pd-section">
        <h2 className="pd-section-title">Yêu Cầu Chính</h2>
        <ul className="pd-list">
          {project.requirements.map((req, i) => {
            const colonIdx = req.indexOf(':')
            if (colonIdx > -1) {
              return (
                <li key={i}>
                  <strong>{req.slice(0, colonIdx)}:</strong>{req.slice(colonIdx + 1)}
                </li>
              )
            }
            return <li key={i}>{req}</li>
          })}
        </ul>
      </section>

      {/* Submission Checklist */}
      <section className="pd-section">
        <h2 className="pd-section-title">Danh Sách Kiểm Tra Nộp Bài</h2>
        <ul className="pd-list pd-checklist">
          {project.checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Submit Button */}
      <button className="pd-submit-btn" onClick={() => setShowModal(true)} id="submit-solution-btn">
        Nộp Giải Pháp
      </button>

      {/* Modal */}
      {showModal && (
        <div className="pd-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="pd-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pd-modal-close" onClick={() => setShowModal(false)}>×</button>

            <div className="pd-modal-header">
              <span className="pd-modal-icon">🐙</span>
              <h3>Nộp URL Giải Pháp</h3>
            </div>
            <p className="pd-modal-subtitle">
              Gửi URL repository GitHub chứa giải pháp của bạn.
            </p>

            {/* Requirements */}
            <div className="pd-modal-requirements">
              {[
                'URL phải trỏ đến một repository GitHub công khai',
                'Repository phải chứa file README',
                'File README phải chứa URL của dự án'
              ].map((req, i) => (
                <div key={i} className="pd-modal-req-row">
                  <span className="pd-modal-req-indicator" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            {/* Input */}
            <input
              type="url"
              className="pd-modal-input"
              placeholder="https://github.com/you/solution-repo"
              value={solutionUrl}
              onChange={(e) => setSolutionUrl(e.target.value)}
              id="solution-url-input"
            />

            {/* Verify button */}
            <button
              className="pd-modal-verify-btn"
              onClick={() => { setShowModal(false); setSolutionUrl('') }}
              id="verify-submit-btn"
            >
              Xác Minh và Nộp
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
