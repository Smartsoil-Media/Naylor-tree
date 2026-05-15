import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allPeople, branchStyle } from '../data/familyData'
import { useViewer } from '../lib/viewerContext'

const BRANCHES = [
  { id: 'all', label: 'All' },
  { id: 'naylor', label: 'Naylor' },
  { id: 'hughes', label: 'Hughes' },
  { id: 'newman', label: 'Newman' },
  { id: 'mackay', label: 'Mackay' },
  { id: 'buxton', label: 'Buxton' },
  { id: 'bauer', label: 'Bauer' },
  { id: 'bandcroft', label: 'Bandcroft' },
]

export default function PeopleView() {
  const { ancestors } = useViewer()
  const [search, setSearch] = useState('')
  const [branch, setBranch] = useState('all')
  const [onlyAncestors, setOnlyAncestors] = useState(false)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return allPeople()
      .filter((p) => branch === 'all' || p.branch === branch)
      .filter((p) => !onlyAncestors || ancestors.has(p.id))
      .filter((p) => {
        if (!q) return true
        const hay = [
          p.name,
          p.descriptor,
          p.location,
          p.occupation,
          (p.nicknames || []).join(' '),
          (p.nameVariants || []).join(' '),
          p.bio,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        return hay.includes(q)
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [search, branch, onlyAncestors, ancestors])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">People</h1>
      <p className="text-sepia-600 mt-1">{filtered.length} people in the archive.</p>

      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
        <input
          type="search"
          placeholder="Search names, places, occupations…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md bg-cream-100 border border-sepia-200 focus:outline-none focus:ring-2 focus:ring-coral-400"
        />
        <div className="flex bg-sepia-100 rounded-md p-0.5 text-sm overflow-x-auto">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => setBranch(b.id)}
              className={`px-3 py-1.5 rounded whitespace-nowrap ${
                branch === b.id ? 'bg-cream-50 text-sepia-900 shadow-sm' : 'text-sepia-600'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
        <label className="text-sm text-sepia-700 inline-flex items-center gap-2 whitespace-nowrap">
          <input
            type="checkbox"
            checked={onlyAncestors}
            onChange={(e) => setOnlyAncestors(e.target.checked)}
          />
          Direct ancestors only
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <PersonCard key={p.id} person={p} isAncestor={ancestors.has(p.id)} />
        ))}
      </div>
    </div>
  )
}

function PersonCard({ person, isAncestor }) {
  const style = branchStyle[person.branch] || branchStyle.naylor
  const dates = [person.born, person.died].filter(Boolean).join(' – ')

  return (
    <Link
      to={`/people/${person.id}`}
      className="group relative bg-cream-50 border border-sepia-200 rounded-lg shadow-card p-4 no-underline text-sepia-800 hover:text-sepia-800 hover:shadow-album transition-shadow"
      style={isAncestor ? { borderColor: '#dc9f50', borderWidth: 2 } : {}}
    >
      <span
        className="absolute top-0 left-0 bottom-0 w-1 rounded-l-lg"
        style={{ background: style.color }}
      />
      <div className="pl-2">
        <p className="text-xs uppercase tracking-widest" style={{ color: style.color }}>
          {style.label}
        </p>
        <h3 className="font-serif text-xl text-sepia-900 leading-tight mt-0.5 group-hover:text-coral-500 transition-colors">
          {person.name}
        </h3>
        {dates && <p className="text-sm text-sepia-600 mt-0.5">{dates}</p>}
        {person.descriptor && (
          <p className="text-sm italic text-sepia-700 mt-1 line-clamp-2">{person.descriptor}</p>
        )}
        {person.location && (
          <p className="text-xs text-sepia-500 mt-2">{person.location}</p>
        )}
        {isAncestor && person.id !== 'you' && (
          <span className="inline-block mt-2 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-ochre-300/30 text-ochre-600 border border-ochre-300">
            Direct ancestor
          </span>
        )}
      </div>
    </Link>
  )
}
