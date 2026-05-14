import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { branchStyle, people, stories as allStories } from '../data/familyData'
import { useViewer } from '../lib/viewerContext'

export default function PersonPanel({ personId, onClose }) {
  return (
    <AnimatePresence>
      {personId && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-sepia-900/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed z-50 bg-cream-50 shadow-album border-l border-sepia-200 overflow-y-auto
                       inset-x-0 bottom-0 top-16 rounded-t-2xl
                       md:inset-y-0 md:right-0 md:left-auto md:top-0 md:w-[480px] md:rounded-none md:border-l"
            initial={{ x: '100%', y: 0, opacity: 0.8 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
          >
            <PersonPanelBody personId={personId} onClose={onClose} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function PersonPanelBody({ personId, onClose }) {
  const person = people[personId]
  const { ancestors } = useViewer()
  if (!person) return null

  const isAncestor = ancestors.has(person.id)
  const style = branchStyle[person.branch] || branchStyle.naylor

  const dates = [person.born, person.died].filter(Boolean).join(' – ')
  const parents = (person.parents || []).map((id) => people[id]).filter(Boolean)
  const spouses = (person.spouse || []).map((id) => people[id]).filter(Boolean)
  const children = (person.children || []).map((id) => people[id]).filter(Boolean)
  const personStories = (person.stories || []).map((id) => allStories[id]).filter(Boolean)

  return (
    <div>
      <div
        className="px-5 pt-5 pb-4 border-b border-sepia-200 sticky top-0 bg-cream-50 z-10"
        style={{ boxShadow: `inset 0 -3px 0 ${style.color}40` }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest" style={{ color: style.color }}>
              {style.label} branch
            </p>
            <h2 className="font-serif text-2xl text-sepia-900 leading-tight mt-0.5">{person.name}</h2>
            {dates && <p className="text-sm text-sepia-600 mt-1">{dates}</p>}
            {person.descriptor && (
              <p className="text-sm italic text-sepia-700 mt-1">{person.descriptor}</p>
            )}
            {isAncestor && person.id !== 'you' && (
              <span className="inline-block mt-2 text-[11px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-ochre-300/30 text-ochre-600 border border-ochre-300">
                Direct ancestor
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-sepia-500 hover:text-sepia-900 p-1"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-5 py-5 space-y-5">
        {person.occupation && (
          <Detail label="Occupation">{person.occupation}</Detail>
        )}
        {person.location && (
          <Detail label="Where">{person.location}</Detail>
        )}
        {person.nicknames?.length > 0 && (
          <Detail label="Known as">{person.nicknames.map((n) => `"${n}"`).join(', ')}</Detail>
        )}
        {person.nameVariants?.length > 0 && (
          <Detail label="Also spelled">{person.nameVariants.join(', ')}</Detail>
        )}

        {person.bio && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-sepia-500 mb-1.5">Biography</h3>
            <div className="font-serif text-[17px] leading-relaxed text-sepia-800 whitespace-pre-line">
              {person.bio}
            </div>
          </section>
        )}

        {(parents.length > 0 || spouses.length > 0 || children.length > 0) && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-sepia-500 mb-1.5">Relationships</h3>
            <div className="space-y-2">
              {parents.length > 0 && <RelRow label="Parents" people={parents} />}
              {spouses.length > 0 && <RelRow label="Spouse" people={spouses} />}
              {children.length > 0 && <RelRow label="Children" people={children} />}
            </div>
          </section>
        )}

        {personStories.length > 0 && (
          <section>
            <h3 className="text-sm uppercase tracking-widest text-sepia-500 mb-1.5">Stories</h3>
            <div className="space-y-3">
              {personStories.map((s) => (
                <details key={s.id} className="bg-cream-100 rounded-lg p-3 border border-sepia-200">
                  <summary className="font-serif text-base text-sepia-900 cursor-pointer">
                    {s.title}
                  </summary>
                  <p className="mt-2 text-sepia-800 whitespace-pre-line font-serif text-[16px] leading-relaxed">
                    {s.body}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        <div className="pt-2">
          <Link
            to={`/people/${person.id}`}
            className="inline-block text-sm font-medium"
          >
            Open full page →
          </Link>
        </div>
      </div>
    </div>
  )
}

function Detail({ label, children }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-sepia-500">{label}</p>
      <p className="text-sepia-800">{children}</p>
    </div>
  )
}

function RelRow({ label, people: list }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className="text-xs uppercase tracking-widest text-sepia-500 w-20 shrink-0">{label}</span>
      <span className="flex flex-wrap gap-x-2 gap-y-1">
        {list.map((p, i) => (
          <Link
            key={p.id}
            to={`/people/${p.id}`}
            className="text-sepia-800 hover:text-coral-500 underline decoration-sepia-300 underline-offset-2"
          >
            {p.name}{i < list.length - 1 ? ',' : ''}
          </Link>
        ))}
      </span>
    </div>
  )
}
