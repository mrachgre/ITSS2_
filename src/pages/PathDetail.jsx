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
    if (window.confirm('Đặt lại toàn bộ tiến độ cho lộ trình này?')) {
      resetPathProgress(pathId)
      setCompletedSkills([])
      setProgress(0)
    }
  }

  if (!path) return <div className="path-detail loading">Đang tải...</div>

  return (
    <div className="path-detail">
      {/* Header */}
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>← Quay về Trang Chủ</button>
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
          <h3>Tiến Độ Của Bạn</h3>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: path.color }} />
          </div>
          <div className="progress-text">
            <span className="progress-percentage">{progress}%</span>
            <span className="progress-count">{completedSkills.length} / {nodes.length} node</span>
          </div>
          {progress === 100 && (
            <div className="completion-badge">🎉 Chúc mừng! Bạn đã hoàn thành lộ trình này!</div>
          )}
        </div>
        <button className="reset-btn" onClick={handleReset}>Đặt Lại Tiến Độ</button>
      </div>

      {/* Visual Roadmap Graph */}
      <div className="roadmap-section">
        <div className="roadmap-header">
          <h2>Lộ Trình</h2>
          <p>Nhấp vào một node để xem tài liệu và đánh dấu hoàn thành.</p>
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
        <h2>Danh Sách Kiểm Tra</h2>
        <div className="skills-list">
          {nodes
            .slice()
            .sort((a, b) => (a.level - b.level) || a.label.localeCompare(b.label))
            .map((node, i) => (
              <SkillItem
                key={node.id}
                skill={{ id: node.id, name: node.label, level: `Giai đoạn ${node.level + 1}` }}
                isCompleted={completedSkills.includes(node.id)}
                onToggle={() => handleToggleSkill(node.id)}
                index={i}
              />
            ))}
        </div>
      </div>

      {/* Tips */}
      <div className="tips-section">
        <h2>Mẹo Học Tập</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">📚</span>
            <h4>Học Đều Đặn</h4>
            <p>Dành 30-60 phút mỗi ngày để học và thực hành các kỹ năng mới.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🛠️</span>
            <h4>Xây Dựng Dự Án</h4>
            <p>Áp dụng kiến thức bằng cách xây dựng dự án thực tế và đóng góp mã nguồn mở.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">👥</span>
            <h4>Tham Gia Cộng Đồng</h4>
            <p>Kết nối với những người học khác và các chuyên gia trong cộng đồng trực tuyến.</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🔄</span>
            <h4>Ôn Tập & Thực Hành</h4>
            <p>Thường xuyên ôn lại kiến thức đã học và luyện tập các khái niệm khó.</p>
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
