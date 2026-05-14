import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Cite from '../components/Cite'
import { quests, questRegions, documents } from '../data/familyData'

const REGION_ACCENT = {
  'Bray · Co. Wicklow': 'text-branch-naylor',
  'London': 'text-branch-newman',
  'France': 'text-coral-600',
  'Dublin': 'text-branch-hughes',
  'Devon': 'text-ochre-600',
}

export default function QuestsView() {
  const grouped = questRegions
    .map((region) => ({
      region,
      items: quests.filter((q) => q.region === region),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.22em] text-sepia-500">An atlas of pilgrimages</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900 mt-2">Family Quests</h1>
        <p className="text-sepia-700 mt-3 leading-relaxed">
          Real places, drawn from the source documents, where the family once stood — houses still
          standing, parish registers still on the shelf, names cut into stone. If you ever find
          yourself near one of them, here's the page to bring.
        </p>
      </header>

      <div className="mt-10 space-y-14">
        {grouped.map((group, gi) => (
          <section key={group.region}>
            <div className="flex items-baseline gap-3 mb-5">
              <h2
                className={`font-serif text-2xl ${REGION_ACCENT[group.region] || 'text-sepia-900'}`}
              >
                {group.region}
              </h2>
              <div className="flex-1 h-px bg-sepia-200" />
              <span className="text-xs text-sepia-500 tracking-wider">
                {group.items.length} {group.items.length === 1 ? 'place' : 'places'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {group.items.map((q, i) => (
                <QuestCard key={q.id} quest={q} index={gi * 10 + i} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-16 pt-6 border-t border-sepia-200 text-sm text-sepia-600 max-w-2xl">
        Each card cites the document it was drawn from. If you do visit one of these places —
        especially a memorial or a grave — a photograph for the archive would be a quiet way of
        closing a loop more than a century old.
      </footer>
    </div>
  )
}

function QuestCard({ quest, index }) {
  const sourceDoc = quest.quoteSource
    ? documents.find((d) => d.id === quest.quoteSource.docId)
    : null
  const sourceHref = sourceDoc
    ? `/documents?doc=${quest.quoteSource.docId}${
        quest.quoteSource.page ? `&page=${quest.quoteSource.page}` : ''
      }`
    : null

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
      className="bg-cream-50 border border-sepia-200 rounded-lg p-5 shadow-card flex flex-col"
    >
      <div className="flex items-start gap-3">
        <Pin />
        <div className="flex-1">
          <h3 className="font-serif text-xl text-sepia-900 leading-snug">{quest.title}</h3>
          <p className="text-xs text-sepia-500 italic mt-1">{quest.location}</p>
        </div>
      </div>

      <p className="mt-3 text-sepia-700 leading-relaxed">{quest.summary}</p>

      {quest.quote && (
        <blockquote className="mt-4 border-l-2 border-coral-400 pl-4 py-1 font-serif italic text-[15px] text-sepia-800 leading-relaxed">
          &ldquo;{quest.quote}&rdquo;
          {quest.quoteSource && (
            <footer className="not-italic font-sans text-[11px] tracking-wider text-sepia-500 mt-2 uppercase">
              {sourceHref ? (
                <Link to={sourceHref} className="no-underline hover:underline text-sepia-500 hover:text-sepia-700">
                  — {quest.quoteSource.label}
                </Link>
              ) : (
                <>— {quest.quoteSource.label}</>
              )}
            </footer>
          )}
        </blockquote>
      )}

      {quest.citations?.length > 0 && (
        <div className="mt-auto pt-4 flex items-center gap-2 flex-wrap text-xs text-sepia-500">
          <span className="uppercase tracking-wider text-[10px]">Sources</span>
          {quest.citations.map((c, i) => (
            <Cite key={`${c.docId}-${c.page || 0}-${i}`} docId={c.docId} page={c.page} />
          ))}
        </div>
      )}
    </motion.article>
  )
}

function Pin() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-1 text-coral-500"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}
