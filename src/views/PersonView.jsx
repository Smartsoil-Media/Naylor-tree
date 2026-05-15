import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { branchStyle, documents, people, stories as allStories } from '../data/familyData'
import { useViewer } from '../lib/viewerContext'

export default function PersonView() {
  const { id } = useParams()
  const { ancestors, viewer } = useViewer()
  const person = people[id]
  const [lightboxIdx, setLightboxIdx] = useState(null)

  if (!person) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <p className="text-sepia-700">No-one by that id. <Link to="/people">Back to People</Link>.</p>
      </div>
    )
  }

  const style = branchStyle[person.branch] || branchStyle.naylor
  const isAncestor = ancestors.has(person.id)
  const dates = [person.born, person.died].filter(Boolean).join(' – ')
  const parents = (person.parents || []).map((pid) => people[pid]).filter(Boolean)
  const spouses = (person.spouse || []).map((pid) => people[pid]).filter(Boolean)
  const children = (person.children || []).map((pid) => people[pid]).filter(Boolean)
  const siblings = []
  for (const par of parents) {
    for (const sId of par.children || []) {
      if (sId !== person.id && !siblings.find((x) => x.id === sId)) {
        const s = people[sId]
        if (s) siblings.push(s)
      }
    }
  }
  const relatedStories = (person.stories || []).map((sid) => allStories[sid]).filter(Boolean)
  const relatedDocs = (person.sources || [])
    .map((dId) => documents.find((d) => d.id === dId))
    .filter(Boolean)

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/people" className="text-sm">← All people</Link>

        <header
          className="mt-3 pb-5 border-b border-sepia-200"
          style={{ boxShadow: `inset 0 -3px 0 ${style.color}40` }}
        >
          <p className="text-xs uppercase tracking-widest mt-2" style={{ color: style.color }}>
            {style.label} branch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-sepia-900 leading-tight mt-1">
            {person.name}
          </h1>
          {dates && <p className="font-serif text-lg italic text-sepia-600 mt-1">{dates}</p>}
          {person.descriptor && (
            <p className="text-sepia-700 mt-2 text-lg">{person.descriptor}</p>
          )}
          {isAncestor && person.id !== 'you' && viewer && (
            <p className="inline-block mt-3 text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-ochre-300/30 text-ochre-600 border border-ochre-300">
              Direct ancestor of {viewer.name}
            </p>
          )}
        </header>

        <dl className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {person.occupation && (
            <Fact label="Occupation">{person.occupation}</Fact>
          )}
          {person.location && (
            <Fact label="Where">{person.location}</Fact>
          )}
          {person.nicknames?.length > 0 && (
            <Fact label="Known as">{person.nicknames.map((n) => `"${n}"`).join(', ')}</Fact>
          )}
          {person.nameVariants?.length > 0 && (
            <Fact label="Also spelled">{person.nameVariants.join(', ')}</Fact>
          )}
        </dl>

        {person.bio && (
          <section className="mt-6">
            <h2 className="font-serif text-2xl text-sepia-900">Biography</h2>
            <div className="mt-2 font-serif text-[18px] leading-relaxed text-sepia-800 whitespace-pre-line">
              {person.bio}
            </div>
          </section>
        )}

        {person.media?.length > 0 && (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-sepia-900">Photos &amp; video</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {person.media.map((m, i) => (
                <MediaTile
                  key={i}
                  item={m}
                  alt={person.name}
                  onExpand={m.type === 'image' ? () => setLightboxIdx(i) : null}
                />
              ))}
            </div>
          </section>
        )}

        {(parents.length + spouses.length + children.length + siblings.length) > 0 && (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-sepia-900">Relationships</h2>
            <div className="mt-3 space-y-2">
              {parents.length > 0 && <RelRow label="Parents" people={parents} />}
              {siblings.length > 0 && <RelRow label="Siblings" people={siblings} />}
              {spouses.length > 0 && <RelRow label="Spouse" people={spouses} />}
              {children.length > 0 && <RelRow label="Children" people={children} />}
            </div>
          </section>
        )}

        {relatedStories.length > 0 && (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-sepia-900">Stories</h2>
            <div className="mt-3 space-y-4">
              {relatedStories.map((s) => (
                <div key={s.id} className="bg-cream-100 rounded-lg p-4 border border-sepia-200">
                  <h3 className="font-serif text-xl text-sepia-900">{s.title}</h3>
                  <p className="mt-2 font-serif text-[17px] leading-relaxed text-sepia-800 whitespace-pre-line">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedDocs.length > 0 && (
          <section className="mt-8">
            <h2 className="font-serif text-2xl text-sepia-900">Sources</h2>
            <ul className="mt-3 space-y-1 list-disc list-inside text-sepia-700">
              {relatedDocs.map((d) => (
                <li key={d.id}>
                  <Link to="/documents" className="font-serif">{d.title}</Link>{' '}
                  <span className="text-sepia-500 text-sm">— {d.date}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <Lightbox
        items={person.media || []}
        index={lightboxIdx}
        personName={person.name}
        onClose={() => setLightboxIdx(null)}
      />
    </>
  )
}

function MediaTile({ item, alt, onExpand }) {
  const filename = item.src.split('/').pop()
  const isVideo = item.type === 'video'
  return (
    <figure className="album-photo group relative">
      <div className="bg-sepia-900 overflow-hidden rounded-sm relative">
        {isVideo ? (
          <video
            src={item.src}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block"
          />
        ) : (
          <button
            type="button"
            onClick={onExpand}
            className="block w-full p-0 bg-transparent border-0 cursor-zoom-in"
            aria-label="View larger"
          >
            <img
              src={item.src}
              alt={item.caption || alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        )}
        <a
          href={item.src}
          download={filename}
          aria-label={isVideo ? 'Download video' : 'Download photo'}
          title="Download"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2 right-2 w-9 h-9 rounded-full bg-cream-50/90 hover:bg-cream-50 text-sepia-900 hover:text-sepia-900 no-underline flex items-center justify-center shadow-card backdrop-blur-sm transition-opacity opacity-80 hover:opacity-100"
        >
          <DownloadIcon />
        </a>
      </div>
      {item.caption && (
        <figcaption className="mt-2 px-1 text-sm italic text-sepia-600 font-serif leading-snug">
          {item.caption}
        </figcaption>
      )}
    </figure>
  )
}

function Lightbox({ items, index, personName, onClose }) {
  const item = index !== null ? items[index] : null
  const open = !!item

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, handleKey])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-sepia-900/92 flex items-stretch sm:items-center justify-center p-2 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl flex flex-col max-h-[95vh]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
              <img
                src={item.src}
                alt={item.caption || personName}
                className="max-h-full max-w-full object-contain select-none rounded-sm shadow-album"
              />
            </div>

            <div className="mt-3 flex items-end justify-between gap-3 px-1 shrink-0">
              {item.caption ? (
                <p className="text-cream-100 font-serif italic text-sm leading-snug max-w-[60ch]">
                  {item.caption}
                </p>
              ) : (
                <span />
              )}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={item.src}
                  download={item.src.split('/').pop()}
                  className="px-3 py-1.5 rounded-md bg-cream-50 hover:bg-cream-100 text-sepia-900 hover:text-sepia-900 text-sm font-medium no-underline inline-flex items-center gap-1.5 shadow-card"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DownloadIcon /> Download
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="px-3 py-1.5 bg-sepia-100 text-sepia-800 hover:bg-sepia-200 rounded-md text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function Fact({ label, children }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-sepia-500">{label}</dt>
      <dd className="text-sepia-800 mt-0.5">{children}</dd>
    </div>
  )
}

function RelRow({ label, people: list }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className="text-xs uppercase tracking-widest text-sepia-500 w-24 shrink-0">{label}</span>
      <span className="flex flex-wrap gap-x-3 gap-y-1">
        {list.map((p) => (
          <Link
            key={p.id}
            to={`/people/${p.id}`}
            className="text-sepia-800 hover:text-coral-500 underline decoration-sepia-300 underline-offset-2"
          >
            {p.name}
          </Link>
        ))}
      </span>
    </div>
  )
}
