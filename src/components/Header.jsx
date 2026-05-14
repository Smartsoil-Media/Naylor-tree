import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { useViewer } from '../lib/viewerContext'

const NAV = [
  { to: '/', label: 'Tree', end: true },
  { to: '/story', label: 'Story' },
  { to: '/people', label: 'People' },
  { to: '/places', label: 'Places' },
  { to: '/documents', label: 'Documents' },
  { to: '/timeline', label: 'Timeline' },
]

export default function Header() {
  const { viewer } = useViewer()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-cream-50/95 backdrop-blur border-b border-sepia-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex flex-col leading-tight text-sepia-900 hover:text-sepia-900 no-underline">
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">A Family History</span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-sepia-500">
            Naylor &middot; Hughes &middot; Newman &middot; Mackay
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors no-underline ${
                  isActive
                    ? 'bg-sepia-100 text-sepia-900'
                    : 'text-sepia-700 hover:bg-sepia-100/60 hover:text-sepia-900'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/who-are-you"
            className="ml-2 px-3 py-1.5 rounded-md text-sm bg-coral-500 text-white hover:bg-coral-600 hover:text-white no-underline"
            title="Personalise which ancestors are highlighted"
          >
            {viewer?.name && viewer.id !== 'you' ? `Viewing as ${viewer.name.split(' ')[0]}` : 'Who are you?'}
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-sepia-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-sepia-200 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm no-underline ${
                    isActive ? 'bg-sepia-100 text-sepia-900' : 'text-sepia-700'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/who-are-you"
              onClick={() => setOpen(false)}
              className="mt-1 px-2 py-2 rounded-md text-sm bg-coral-500 text-white no-underline"
            >
              {viewer?.name && viewer.id !== 'you' ? `Viewing as ${viewer.name.split(' ')[0]}` : 'Who are you?'}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
