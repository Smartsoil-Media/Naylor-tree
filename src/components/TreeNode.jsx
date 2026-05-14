import { branchStyle } from '../data/familyData'

// Custom node renderer for react-d3-tree.
// SVG text renders much more cleanly in sans-serif than in a thin serif
// at small sizes — so we use Inter throughout the node.
export default function TreeNode({ nodeDatum, toggleNode, onSelect }) {
  const d = nodeDatum._data || {}
  const branch = branchStyle[d.branch] || branchStyle.naylor
  const highlighted = d.highlighted
  const width = 240
  const height = 86
  const hasChildren = (nodeDatum.children?.length || 0) + (nodeDatum._children?.length || 0) > 0
  const isCollapsed = !!nodeDatum._children && !nodeDatum.children
  const dates = nodeDatum.attributes?.dates || ''
  const descriptor = nodeDatum.attributes?.descriptor || ''

  return (
    <g
      onClick={(e) => {
        e.stopPropagation()
        onSelect && onSelect(d.id)
      }}
      style={{ cursor: 'pointer' }}
    >
      <rect
        x={-width / 2}
        y={-height / 2}
        width={width}
        height={height}
        rx={10}
        fill="#fbf7f0"
        stroke={highlighted ? '#dc9f50' : branch.color}
        strokeWidth={highlighted ? 4 : 1.5}
        strokeDasharray={d.uncertain ? '6,4' : '0'}
      />
      <rect
        x={-width / 2}
        y={-height / 2}
        width={6}
        height={height}
        rx={0}
        fill={branch.color}
      />
      <text
        x={0}
        y={-height / 2 + 24}
        textAnchor="middle"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 14,
          fontWeight: 600,
          fill: '#241b10',
          letterSpacing: '-0.01em',
        }}
      >
        {truncate(nodeDatum.name, 28)}
      </text>
      {dates && (
        <text
          x={0}
          y={-height / 2 + 44}
          textAnchor="middle"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 11,
            fontWeight: 500,
            fill: '#6e5333',
          }}
        >
          {truncate(dates, 36)}
        </text>
      )}
      {descriptor && (
        <text
          x={0}
          y={-height / 2 + 62}
          textAnchor="middle"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 10.5,
            fill: '#8a6a3f',
          }}
        >
          {truncate(descriptor, 40)}
        </text>
      )}

      {hasChildren && (
        <g
          transform={`translate(${width / 2 - 14}, ${height / 2 - 14})`}
          onClick={(e) => {
            e.stopPropagation()
            toggleNode()
          }}
        >
          <circle r={10} fill={branch.color} />
          <text
            textAnchor="middle"
            y={4}
            style={{ fontSize: 13, fill: '#fff', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
          >
            {isCollapsed ? '+' : '−'}
          </text>
        </g>
      )}
    </g>
  )
}

function truncate(s, n) {
  if (!s) return ''
  return s.length > n ? s.slice(0, n - 1) + '…' : s
}
