import { useState, useMemo } from 'react'
import { getProjectsByCategory } from '../services/storage'
import './ProjectsPage.css'

const CATEGORIES = ['Frontend', 'Backend', 'DevOps']
const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced']

const DIFF_LABELS = {
  Beginner: 'Cơ bản',
  Intermediate: 'Trung bình',
  Advanced: 'Nâng cao'
}

const DIFF_COLORS = {
  Beginner: '#00bcd4',
  Intermediate: '#ffd93d',
  Advanced: '#ff5252'
}

export default function ProjectsPage({ onViewProject, onBack }) {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [activeDifficulties, setActiveDifficulties] = useState([])

  const toggleDifficulty = (d) => {
    setActiveDifficulties(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    )
  }

  const projects = useMemo(() => {
    let list = getProjectsByCategory(activeCategory)
    if (activeDifficulties.length > 0) {
      list = list.filter(p => activeDifficulties.includes(p.difficulty))
    }
    return list
  }, [activeCategory, activeDifficulties])

  return (
    <div className="projects-page">
      {/* Header */}
      <div className="projects-header">
        <button className="projects-back-btn" onClick={onBack}>← Quay về Trang Chủ</button>
        <h2 className="projects-title">Ý Tưởng Dự Án</h2>
        <p className="projects-subtitle">Rèn luyện kỹ năng bằng cách xây dựng các dự án thực tế.</p>
      </div>

      {/* Category tabs */}
      <div className="projects-tabs">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`projects-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            id={`tab-${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Difficulty filter pills */}
      <div className="difficulty-filters">
        {DIFFICULTIES.map(d => (
          <button
            key={d}
            className={`diff-pill ${activeDifficulties.includes(d) ? 'active' : ''}`}
            onClick={() => toggleDifficulty(d)}
            style={{
              '--pill-color': DIFF_COLORS[d],
              borderColor: activeDifficulties.includes(d) ? DIFF_COLORS[d] : 'rgba(255,255,255,0.08)',
              background: activeDifficulties.includes(d) ? `${DIFF_COLORS[d]}18` : 'transparent',
              color: activeDifficulties.includes(d) ? DIFF_COLORS[d] : 'var(--text-secondary)'
            }}
            id={`filter-${d.toLowerCase()}`}
          >
            {DIFF_LABELS[d]}
          </button>
        ))}
      </div>

      {/* Project cards grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <button
            key={project.id}
            className="project-card"
            onClick={() => onViewProject(project.id)}
            style={{ animationDelay: `${i * 0.08}s` }}
            id={`project-${project.id}`}
          >
            <div className="project-card-top">
              <span
                className="project-difficulty-badge"
                style={{
                  color: DIFF_COLORS[project.difficulty],
                  borderColor: DIFF_COLORS[project.difficulty]
                }}
              >
                {DIFF_LABELS[project.difficulty]}
              </span>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-footer">
              <span className="project-started">👥 {project.started.toLocaleString()} đã bắt đầu</span>
            </div>
          </button>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="projects-empty">
          <p>Không có dự án nào phù hợp với bộ lọc đã chọn.</p>
        </div>
      )}
    </div>
  )
}
