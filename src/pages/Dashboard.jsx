import { useState, useEffect } from 'react'
import { getAllCareerPaths, getUserProgress } from '../services/storage'
import PathCard from '../components/PathCard'
import ProgressStats from '../components/ProgressStats'
import './Dashboard.css'

export default function Dashboard({ onViewPath }) {
  const [careerPaths, setCareerPaths] = useState([])
  const [userProgress, setUserProgress] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setCareerPaths(getAllCareerPaths())
    setUserProgress(getUserProgress())
  }, [])

  const rolePaths = careerPaths.filter(p => p.category === 'role')
  const skillPaths = careerPaths.filter(p => p.category === 'skill')

  const filter = (paths) => {
    if (!searchQuery) return paths
    return paths.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="dashboard">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Developer Roadmaps</h2>
          <p className="hero-subtitle">
            Community-driven learning paths to help you pick your career and become proficient.
          </p>
          <div className="hero-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search roadmaps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              id="search-roadmaps"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <ProgressStats userProgress={userProgress} />
      </section>

      {/* Role Based */}
      <section className="paths-section">
        <div className="section-label">
          <span className="section-label-text">Role Based Roadmaps</span>
        </div>
        <div className="paths-grid">
          {filter(rolePaths).map(path => (
            <PathCard
              key={path.id}
              path={path}
              progress={userProgress.find(p => p.id === path.id)?.progress || 0}
              onView={() => onViewPath(path.id)}
            />
          ))}
        </div>
      </section>

      {/* Skill Based */}
      <section className="paths-section">
        <div className="section-label">
          <span className="section-label-text">Skill Based Roadmaps</span>
        </div>
        <div className="paths-grid">
          {filter(skillPaths).map(path => (
            <PathCard
              key={path.id}
              path={path}
              progress={userProgress.find(p => p.id === path.id)?.progress || 0}
              onView={() => onViewPath(path.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
