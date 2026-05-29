import React from 'react'
import './ResourceLinks.css'

export default function ResourceLinks({ resources }) {
  if (!resources || resources.length === 0) {
    return null
  }

  return (
    <div className="resource-links">
      <div className="resource-header">
        <span className="resource-title">📚 Tài liệu học tập</span>
      </div>
      <div className="resource-list">
        {resources.map((resource, idx) => (
          <a
            key={idx}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item"
          >
            <span className="resource-icon">{resource.icon}</span>
            <span className="resource-name">{resource.title}</span>
            <span className="external-icon">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
