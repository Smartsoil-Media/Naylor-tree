import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { documents } from '../data/familyData'

export default function DocumentsView() {
  const [openId, setOpenId] = useState(null)
  const open = documents.find((d) => d.id === openId)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">Documents</h1>
      <p className="text-sepia-600 mt-1 max-w-2xl">
        Letters, registers, memoirs and photographs. Replace the placeholder images in{' '}
        <code className="bg-cream-200 px-1 rounded">/public/images/</code> as family scans come in.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((d) => (
          <button
            key={d.id}
            onClick={() => setOpenId(d.id)}
            className="text-left group"
          >
            <div className="album-photo group-hover:shadow-album group-hover:-translate-y-0.5 transition-all">
              <div className="aspect-[3/4] bg-cream-200 flex items-center justify-center text-sepia-500">
                <DocPlaceholder doc={d} />
              </div>
            </div>
            <h3 className="mt-3 font-serif text-lg text-sepia-900 leading-tight">{d.title}</h3>
            <p className="text-xs text-sepia-500 mt-0.5">{d.date}</p>
            <p className="text-sm text-sepia-700 mt-1 line-clamp-2">{d.caption}</p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-sepia-900/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              className="bg-cream-50 rounded-lg max-w-2xl w-full overflow-hidden shadow-album"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-cream-100 p-6 flex items-center justify-center min-h-[300px]">
                <DocPlaceholder doc={open} large />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-2xl text-sepia-900">{open.title}</h2>
                <p className="text-sm text-sepia-500 mt-0.5">{open.date}</p>
                <p className="mt-3 font-serif text-[17px] leading-relaxed text-sepia-800">
                  {open.caption}
                </p>
                {open.multi && (
                  <p className="mt-3 text-sm text-sepia-600 italic">
                    Multi-page document — add scans to /public/images/.
                  </p>
                )}
                <button
                  onClick={() => setOpenId(null)}
                  className="mt-5 px-4 py-2 bg-sepia-100 rounded-md text-sepia-800 hover:bg-sepia-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DocPlaceholder({ doc, large }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center px-4 py-6"
      style={{
        background:
          'repeating-linear-gradient(45deg, #f0e6d2 0, #f0e6d2 6px, #ece0c6 6px, #ece0c6 12px)',
      }}
    >
      <svg
        width={large ? 56 : 36}
        height={large ? 56 : 36}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a98551"
        strokeWidth="1.5"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
        <line x1="8" y1="9" x2="10" y2="9" />
      </svg>
      <p
        className={`mt-2 ${large ? 'text-base' : 'text-xs'} text-sepia-700 font-serif italic max-w-[80%]`}
      >
        {doc.title}
      </p>
      <p className={`${large ? 'text-sm' : 'text-[10px]'} text-sepia-500 mt-1`}>{doc.date}</p>
    </div>
  )
}
