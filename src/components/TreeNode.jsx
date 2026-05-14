import { branchStyle } from '../data/familyData'

// Custom node renderer for react-d3-tree.
// `nodeDatum` is the tree node object we built; `toggleNode` collapses children.
// `onSelect` receives the person's id.
export default function TreeNode({ nodeDatum, toggleNode, onSelect, viewerHighlighted }) {
  const d = nodeDatum._data || {}
  const branch = branchStyle[d.branch] || branchStyle.naylor
  const highlighted = d.highlighted || viewerHighlighted
  const width = 200
  const height = 64
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
        stroke={branch.color}
        strokeWidth={highlighted ? 3.5 : 1.5}
        strokeDasharray={d.uncertain ? '5,3' : '0'}
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
        y={-height / 2 + 22}
        textAnchor="middle"
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 16,
          fontWeight: 600,
          fill: '#241b10',
        }}
      >
        {truncate(nodeDatum.name, 26)}
      </text>
      {dates && (
        <text
          x={0}
          y={-height / 2 + 38}
          textAnchor="middle"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, fill: '#6e5333' }}
        >
          {dates}
        </text>
      )}
      {descriptor && (
        <text
          x={0}
          y={-height / 2 + 53}
          textAnchor="middle"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            fill: '#8a6a3f',
            fontStyle: 'italic',
          }}
        >
          {truncate(descriptor, 36)}
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
          <circle r={9} fill={branch.color} />
          <text
            textAnchor="middle"
            y={4}
            style={{ fontSize: 12, fill: '#fff', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}
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
