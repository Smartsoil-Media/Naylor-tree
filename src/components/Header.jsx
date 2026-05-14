import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
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
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

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
            {viewer?.name ? `Viewing as ${viewer.name.split(' ')[0]}` : 'Who are you?'}
          </Link>
        </nav>

        <button
          className="md:hidden relative z-50 p-2 rounded-md hover:bg-sepia-100 text-sepia-800"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <motion.line
              x1="3" x2="21"
              animate={open ? { y1: 12, y2: 12, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: '12px', originY: '12px' }}
            />
            <motion.line
              x1="3" x2="21" y1="12" y2="12"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.line
              x1="3" x2="21"
              animate={open ? { y1: 12, y2: 12, rotate: -45 } : { y1: 18, y2: 18, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: '12px', originY: '12px' }}
            />
          </svg>
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && <MobileMenu viewer={viewer} onClose={() => setOpen(false)} />}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  )
}

function MobileMenu({ viewer, onClose }) {
  return (
    <motion.div
      className="md:hidden fixed inset-0 z-[60] overflow-hidden"
      initial="closed"
      animate="open"
      exit="closed"
    >
      {/* Backdrop reveal — cream gradient sweeps in from the top */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-sepia-100"
        variants={{
          closed: { clipPath: 'circle(0% at calc(100% - 36px) 36px)' },
          open: { clipPath: 'circle(150% at calc(100% - 36px) 36px)' },
        }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-3 right-4 z-10 p-2 rounded-md text-sepia-800 hover:bg-sepia-100/70"
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0, transition: { delay: 0.3, duration: 0.3 } }}
        exit={{ opacity: 0, rotate: 90, transition: { duration: 0.15 } }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </motion.button>

      {/* Decorative flourish — a faint tree silhouette in the corner */}
      <motion.svg
        className="absolute -bottom-12 -left-12 w-72 h-72 text-sepia-200/60 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          closed: { opacity: 0, scale: 0.8, rotate: -10 },
          open: { opacity: 1, scale: 1, rotate: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <path d="M100 180 L100 90" />
        <path d="M100 130 Q70 110 50 80" />
        <path d="M100 130 Q130 110 150 80" />
        <path d="M100 100 Q80 85 65 60" />
        <path d="M100 100 Q120 85 135 60" />
        <path d="M100 90 Q100 70 95 50" />
        <circle cx="50" cy="80" r="3" />
        <circle cx="150" cy="80" r="3" />
        <circle cx="65" cy="60" r="2.5" />
        <circle cx="135" cy="60" r="2.5" />
        <circle cx="95" cy="50" r="2.5" />
      </motion.svg>

      <motion.nav
        className="relative h-full flex flex-col justify-center px-8 pt-20 pb-12"
        variants={{
          open: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
          closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
        }}
      >
        <motion.div
          className="mb-8"
          variants={menuItemVariants}
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-sepia-500">Browse</div>
          <div className="mt-1 h-px w-12 bg-sepia-300" />
        </motion.div>

        {NAV.map((n) => (
          <motion.div key={n.to} variants={menuItemVariants}>
            <NavLink
              to={n.to}
              end={n.end}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-baseline gap-3 py-2 font-serif text-4xl tracking-tight no-underline transition-colors ${
                  isActive ? 'text-coral-600' : 'text-sepia-900 hover:text-coral-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <motion.span
                    className="inline-block w-2 h-2 rounded-full bg-coral-500"
                    animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span>{n.label}</span>
                </>
              )}
            </NavLink>
          </motion.div>
        ))}

        <motion.div variants={menuItemVariants} className="mt-10">
          <Link
            to="/who-are-you"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-coral-500 text-white text-sm font-medium shadow-card hover:bg-coral-600 hover:text-white no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {viewer?.name ? `Viewing as ${viewer.name.split(' ')[0]}` : 'Who are you?'}
          </Link>
        </motion.div>

        <motion.div
          variants={menuItemVariants}
          className="mt-12 text-[11px] uppercase tracking-[0.22em] text-sepia-500"
        >
          Naylor &middot; Hughes &middot; Newman &middot; Mackay
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}

const menuItemVariants = {
  closed: { opacity: 0, x: -24, transition: { duration: 0.2 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
