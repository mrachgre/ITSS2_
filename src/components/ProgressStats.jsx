import './ProgressStats.css'

export default function ProgressStats({ userProgress }) {
  const totalSkills = userProgress.reduce((s, p) => s + p.total, 0)
  const completedSkills = userProgress.reduce((s, p) => s + p.completed, 0)
  const overallProgress = totalSkills > 0 ? Math.round((completedSkills / totalSkills) * 100) : 0
  const inProgress = userProgress.filter(p => p.progress > 0 && p.progress < 100).length

  const stats = [
    { label: 'Tiến Độ Chung',       value: `${overallProgress}%`, icon: '📈', color: '#FF6B6B' },
    { label: 'Kỹ Năng Hoàn Thành',  value: completedSkills,       icon: '✓',  color: '#4ECDC4' },
    { label: 'Đang Học',            value: inProgress,            icon: '🚀', color: '#95E1D3' },
    { label: 'Tổng Kỹ Năng',       value: totalSkills,           icon: '📚', color: '#FFD93D' }
  ]

  return (
    <div className="progress-strip">
      {stats.map((s, i) => (
        <div key={i} className="pstrip-cell" style={{ '--sc': s.color }}>
          <span className="pstrip-value" style={{ color: s.color }}>{s.value}</span>
          <span className="pstrip-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
