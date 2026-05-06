import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import PathDetail from './pages/PathDetail'
import Journey from './pages/Journey'
import './App.css'

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedPathId, setSelectedPathId] = useState(null)

  const handleViewPath = (pathId) => {
    setSelectedPathId(pathId)
    setCurrentView('detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToDashboard = () => {
    setCurrentView('dashboard')
    setSelectedPathId(null)
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
              className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={handleBackToDashboard}
            >
              Roadmaps
            </button>
            <button
              className={`nav-btn ${currentView === 'journey' ? 'active' : ''}`}
              onClick={() => setCurrentView('journey')}
            >
              Journey
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {currentView === 'dashboard' && (
          <Dashboard onViewPath={handleViewPath} />
        )}
        {currentView === 'detail' && (
          <PathDetail pathId={selectedPathId} onBack={handleBackToDashboard} />
        )}
        {currentView === 'journey' && (
          <Journey onOpenPath={handleViewPath} />
        )}
      </main>

      <footer className="app-footer">
        <p>CarrierPath © 2026 — Track Your Learning Journey</p>
      </footer>
    </div>
  )
}
