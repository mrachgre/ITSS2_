import './ProgressStats.css'

export default function ProgressStats({ userProgress }) {
  const totalSkills = userProgress.reduce((s, p) => s + p.total, 0)
  const completedSkills = userProgress.reduce((s, p) => s + p.completed, 0)
  const overallProgress = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0
  const inProgress = userProgress.filter(p => p.progress > 0 && p.progress < 100).length

  const stats = [
    { label: 'Overall Progress', value: `${overallProgress}%`, icon: '📈', color: '#FF6B6B' },
    { label: 'Skills Completed', value: completedSkills,       icon: '✓',  color: '#4ECDC4' },
    { label: 'Paths in Progress', value: inProgress,           icon: '🚀', color: '#95E1D3' },
    { label: 'Total Skills',     value: totalSkills,           icon: '📚', color: '#FFD93D' }
  ]

  return (
    <div className="progress-stats">
      {stats.map((s, i) => (
        <div key={i} className="stat-card" style={{ animationDelay: `${i * 100}ms` }}>
          <div className="stat-icon">{s.icon}</div>
          <div className="stat-content">
            <p className="stat-label">{s.label}</p>
            <p className="stat-value">{s.value}</p>
          </div>
          <div className="stat-bg" style={{ backgroundColor: s.color }} />
        </div>
      ))}
    </div>
  )
}
