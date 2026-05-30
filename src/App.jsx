import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import PathDetail from './pages/PathDetail'
import Journey from './pages/Journey'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedPathId, setSelectedPathId] = useState(null)
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [selectedProjectCategory, setSelectedProjectCategory] = useState('Frontend')

  const handleViewPath = (pathId) => {
    setSelectedPathId(pathId)
    setCurrentView('detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
    setSelectedPathId(null)
    setSelectedProjectId(null)
  }

  const handleViewProjects = (category) => {
    setSelectedProjectCategory(category || 'Frontend')
    setCurrentView('projects')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleViewProject = (projectId) => {
    setSelectedProjectId(projectId)
    setCurrentView('project-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToProjects = () => {
    setCurrentView('projects')
    setSelectedProjectId(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand" onClick={handleBackToDashboard}>
            <span className="brand-icon">🚀</span>
            <h1>CARRIERPATH</h1>
          </div>
          <nav className="header-nav">
            <button
              className={`nav-btn ${currentView === 'dashboard' || currentView === 'detail' ? 'active' : ''}`}
              onClick={handleBackToDashboard}
            >
              Lộ trình
            </button>
            <button
              className={`nav-btn ${currentView === 'projects' || currentView === 'project-detail' ? 'active' : ''}`}
              onClick={handleViewProjects}
            >
              Dự án
            </button>
            <button
              className={`nav-btn ${currentView === 'journey' ? 'active' : ''}`}
              onClick={() => setCurrentView('journey')}
            >
              Hành trình
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'dashboard' && (
          <Dashboard onViewPath={handleViewPath} onViewProjects={handleViewProjects} />
        )}
        {currentView === 'detail' && (
          <PathDetail pathId={selectedPathId} onBack={handleBackToDashboard} />
        )}
        {currentView === 'journey' && (
          <Journey onOpenPath={handleViewPath} />
        )}
        {currentView === 'projects' && (
          <ProjectsPage
            onViewProject={handleViewProject}
            onBack={handleBackToDashboard}
            initialCategory={selectedProjectCategory}
          />
        )}
        {currentView === 'project-detail' && (
          <ProjectDetail projectId={selectedProjectId} onBack={handleBackToProjects} />
        )}
      </main>

      <footer className="app-footer">
        <p>CarrierPath © 2026 — Theo Dõi Hành Trình Học Tập Của Bạn</p>
      </footer>
    </div>
  )
}
