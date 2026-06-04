import { useMemo } from 'react'
import './RoadmapGraph.css'

/**
 * Visual roadmap graph — vertical flow with connecting lines,
 * checkpoints, section labels, and tips.
 */
export default function RoadmapGraph({
  nodes = [],
  sections = [],
  completedSkills = [],
  pathColor = '#95e1d3',
  onNodeClick,
  onPinNode,
  isPinned
}) {
  // Task A — deduplicate nodes by id
  const uniqueNodes = useMemo(() => {
    const seen = new Set()
    return nodes.filter(n => {
      if (seen.has(n.id)) return false
      seen.add(n.id)
      return true
    })
  }, [nodes])

  const levelGroups = useMemo(() => {
    const map = new Map()
    for (const n of uniqueNodes) {
      const lvl = Number.isFinite(n.level) ? n.level : 0
      if (!map.has(lvl)) map.set(lvl, [])
      map.get(lvl).push(n)
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
  }, [uniqueNodes])

  const sectionAfterLevel = useMemo(() => {
    const m = new Map()
    for (const s of sections) m.set(s.afterLevel, s)
    return m
  }, [sections])

  return (
    // Task B — pass --pc CSS variable from pathColor
    <div className="rg-container" style={{ '--pc': pathColor }}>
      <div className="rg-spine" />
      {levelGroups.map(([level, items], gi) => {
        const sectionDivider = sectionAfterLevel.get(level) || null
        return (
          <div key={level}>
            <div className="rg-level">
              {items.map((node) => {
                const done = completedSkills.includes(node.id)
                const isCP = node.type === 'checkpoint'
                const pinned = isPinned ? isPinned(node.id) : false
                return (
                  <div key={node.id} className="rg-node-wrap">
                    <button
                      type="button"
                      className={`rg-node ${done ? 'rg-done' : ''} ${isCP ? 'rg-checkpoint' : 'rg-skill'}`}
                      onClick={() => onNodeClick?.(node)}
                      title="Nhấp để xem tài liệu"
                    >
                      <span className="rg-dot" />
                      <span className="rg-label">{node.label}</span>
                    </button>
                    {onPinNode && (
                      <button
                        type="button"
                        className={`rg-pin ${pinned ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); onPinNode(node.id) }}
                        title={pinned ? 'Bỏ ghim' : 'Ghim vào Hành trình'}
                      >
                        ✦
                      </button>
                    )}
                    {node.tip && <div className="rg-tip">{node.tip}</div>}
                  </div>
                )
              })}
            </div>
            {gi < levelGroups.length - 1 && !sectionDivider && (
              <div className="rg-connector" />
            )}
            {sectionDivider && (
              <div className="rg-section-divider">
                <div className="rg-section-line" />
                <div className="rg-section-text">
                  <span className="rg-section-label">{sectionDivider.label}</span>
                  {sectionDivider.sublabel && (
                    <span className="rg-section-sublabel">{sectionDivider.sublabel}</span>
                  )}
                </div>
                <div className="rg-section-line" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
