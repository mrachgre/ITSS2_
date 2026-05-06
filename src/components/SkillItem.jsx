import './SkillItem.css'

export default function SkillItem({ skill, isCompleted, onToggle, index }) {
  return (
    <div className={`skill-item ${isCompleted ? 'completed' : ''}`} style={{ animationDelay: `${index * 50}ms` }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="skill-checkbox"
      />
      <div className="skill-content">
        <div className="skill-header">
          <h4 className="skill-name">{skill.name}</h4>
          <span className="skill-level">{skill.level}</span>
        </div>
      </div>
      <span className="skill-icon">
        {isCompleted ? '✓' : '○'}
      </span>
    </div>
  )
}
