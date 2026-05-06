import { useMemo, useState, useEffect } from 'react'
import {
  getCareerPath,
  getCompletedSkills,
  toggleSkillCompletion,
  getPathProgress,
  resetPathProgress,
  isNodePinned,
  togglePinnedNode
} from '../services/storage'
import SkillItem from '../components/SkillItem'
import RoadmapGraph from '../components/RoadmapGraph'
import NodePanel from '../components/NodePanel'
import './PathDetail.css'

export default function PathDetail({ pathId, onBack }) {
  const [path, setPath] = useState(null)
  const [completedSkills, setCompletedSkills] = useState([])
  const [progress, setProgress] = useState(0)
  const [activeNode, setActiveNode] = useState(null)   // node being viewed in panel

  useEffect(() => {
    setPath(getCareerPath(pathId))
    setCompletedSkills(getCompletedSkills(pathId))
    setProgress(getPathProgress(pathId))
  }, [pathId])

  const nodes = path?.nodes || []

  const refresh = () => {
    setCompletedSkills(getCompletedSkills(pathId))
    setProgress(getPathProgress(pathId))
  }

  const handleToggleSkill = (skillId) => {
    toggleSkillCompletion(pathId, skillId)
    refresh()
  }

  const handlePinNode = (nodeId) => {
    togglePinnedNode(pathId, nodeId)
  }

  const handleReset = () => {
    if (window.confirm('Reset all progress for this path?')) {
      resetPathProgress(pathId)
      setCompletedSkills([])
      setProgress(0)
    }
  }

  if (!path) return <div className="path-detail loading">Loading...</div>

  return (
    <div className="path-detail">
      {/* Header */}
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>← Back to Dashboard</button>
        <div className="path-title">
          <span className="path-icon">{path.icon}</span>
          <div>
            <h1>{path.name}</h1>
            <p>{path.description}</p>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="progress-card">
        <div className="progress-info">
          <h3>Your Progress</h3>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: path.color }} />
          </div>
          <div className="progress-text">
            <span className="progress-percentage">{progress}%</span>
            <span className="progress-count">{completedSkills.length} of {nodes.length} nodes</span>
          </div>
          {progress === 100 && (
            <div className="completion-badge">🎉 Congratulations! You've completed this path!</div>
          )}
        </div>
        <button className="reset-btn" onClick={handleReset}>Reset Progress</button>
      </div>

      {/* Visual Roadmap Graph */}
      <div className="roadmap-section">
        <div className="roadmap-header">
          <h2>Roadmap</h2>
          <p>Click a node to view resources and mark it done.</p>
        </div>
        <RoadmapGraph
          nodes={nodes}
          sections={path.sections || []}
          completedSkills={completedSkills}
          pathColor={path.color}
          onNodeClick={(node) => setActiveNode(node)}
          onPinNode={handlePinNode}
          isPinned={(nodeId) => isNodePinned(pathId, nodeId)}
        />
      </div>

      {/* Checklist */}
      <div className="skills-section">
        <h2>Checklist</h2>
        <div className="skills-list">
          {nodes
            .slice()
            .sort((a, b) => (a.level - b.level) || a.label.localeCompare(b.label))
            .map((node, i) => (
              <SkillItem
                key={node.id}
                skill={{ id: node.id, name: node.label, level: `Stage ${node.level + 1}` }}
                isCompleted={completedSkills.includes(node.id)}
                onToggle={() => handleToggleSkill(node.id)}
                index={i}
              />
            ))}
        </div>
      </div>

      {/* Tips */}
      <div className="tips-section">
        <h2>Learning Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">📚</span>
            <h4>Study Consistently</h4>
            <p>Dedicate 30-60 minutes daily to learning and practicing new skills.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🛠️</span>
            <h4>Build Projects</h4>
            <p>Apply what you learn by building real projects and contributing to open source.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">👥</span>
            <h4>Join Communities</h4>
            <p>Connect with other learners and professionals in online communities.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🔄</span>
            <h4>Review & Practice</h4>
            <p>Regularly review what you've learned and practice challenging concepts.</p>
          </div>
        </div>
      </div>

      {/* Node Resource Panel (slide-out) */}
      {activeNode && (
        <NodePanel
          node={activeNode}
          pathColor={path.color}
          isDone={completedSkills.includes(activeNode.id)}
          onToggleDone={() => handleToggleSkill(activeNode.id)}
          onClose={() => setActiveNode(null)}
        />
      )}
    </div>
  )
}
