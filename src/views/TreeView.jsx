import { useEffect, useMemo, useRef, useState } from 'react'
import Tree from 'react-d3-tree'
import TreeNode from '../components/TreeNode'
import PersonPanel from '../components/PersonPanel'
import { branchStyle, buildTree } from '../data/familyData'
import { useViewer } from '../lib/viewerContext'
import { Link } from 'react-router-dom'

const ROOTS = [
  { id: 'bartholomew-naylor-elder', label: 'Naylor line (from c.1801)' },
  { id: 'edward-hughes', label: 'Hughes line (from 1881)' },
]

export default function TreeView() {
  const { ancestors, hasChosen } = useViewer()
  const [rootId, setRootId] = useState(ROOTS[0].id)
  const [selectedId, setSelectedId] = useState(null)
  const [orientation, setOrientation] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'vertical' : 'vertical'
  )
  const wrapRef = useRef(null)
  const [translate, setTranslate] = useState({ x: 0, y: 80 })

  const tree = useMemo(() => buildTree(rootId, ancestors), [rootId, ancestors])

  useEffect(() => {
    function update() {
      if (!wrapRef.current) return
      const { width } = wrapRef.current.getBoundingClientRect()
      setTranslate({ x: width / 2, y: 80 })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="relative">
      {!hasChosen && <FirstVisitBanner />}

      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">
              The family tree
            </h1>
            <p className="text-sepia-600 mt-1 max-w-2xl text-sm sm:text-base">
              From the Naylors of Bray (1801) down to the present day. Click any name to read more.
              Dotted boxes mark uncertain parent-child links — mostly pre-1849.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-sepia-100 rounded-md p-0.5">
              {ROOTS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRootId(r.id)}
                  className={`px-3 py-1.5 text-sm rounded ${
                    rootId === r.id ? 'bg-cream-50 text-sepia-900 shadow-sm' : 'text-sepia-600'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setOrientation((o) => (o === 'vertical' ? 'horizontal' : 'vertical'))}
              className="px-3 py-1.5 text-sm rounded-md bg-sepia-100 text-sepia-700 hover:bg-sepia-200"
              title="Toggle orientation"
            >
              {orientation === 'vertical' ? '↓ Vertical' : '→ Horizontal'}
            </button>
          </div>
        </div>

        <Legend />
      </div>

      <div
        ref={wrapRef}
        className="w-full h-[72vh] min-h-[480px] mt-2 border-y border-sepia-200 bg-cream-100/40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(169, 133, 81, 0.10) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <Tree
          data={tree}
          orientation={orientation}
          translate={translate}
          pathFunc="step"
          collapsible={true}
          zoomable={true}
          zoom={0.85}
          separation={{ siblings: 1.1, nonSiblings: 1.3 }}
          nodeSize={{ x: 230, y: 130 }}
          pathClassFunc={(linkData) => {
            const childData = linkData.target.data._data
            return childData?.uncertain ? 'tree-link-uncertain' : 'tree-link'
          }}
          renderCustomNodeElement={(props) => (
            <TreeNode {...props} onSelect={setSelectedId} />
          )}
        />
        <style>{`
          .tree-link { fill: none; stroke: #a98551; stroke-width: 1.5; }
          .tree-link-uncertain { fill: none; stroke: #a98551; stroke-width: 1.5; stroke-dasharray: 5,4; opacity: 0.6; }
        `}</style>
      </div>

      <PersonPanel personId={selectedId} onClose={() => setSelectedId(null)} />
    </div>
  )
}

function Legend() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
      {Object.entries(branchStyle).map(([key, s]) => (
        <span key={key} className="inline-flex items-center gap-1.5">
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ background: s.color }}
          />
          <span className="text-sepia-700">{s.label}</span>
        </span>
      ))}
      <span className="inline-flex items-center gap-1.5 ml-2">
        <span className="inline-block w-6 h-0 border-t-2 border-dashed border-sepia-500" />
        <span className="text-sepia-700">uncertain link</span>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm border-[3px]"
          style={{ borderColor: '#dc9f50', background: '#fbf7f0' }}
        />
        <span className="text-sepia-700">your direct line</span>
      </span>
    </div>
  )
}

function FirstVisitBanner() {
  return (
    <div className="bg-ochre-300/30 border-b border-ochre-300">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3 text-sm">
        <span className="text-sepia-800">
          Welcome — tell me who you are and I'll highlight your direct line.
        </span>
        <Link
          to="/who-are-you"
          className="px-3 py-1 rounded-md bg-coral-500 text-white text-sm no-underline hover:bg-coral-600 hover:text-white"
        >
          Who are you?
        </Link>
      </div>
    </div>
  )
}
