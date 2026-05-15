import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { documents } from '../data/familyData'

export default function DocumentsView() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [openId, setOpenId] = useState(null)
  const [pageIdx, setPageIdx] = useState(0)
  const open = documents.find((d) => d.id === openId)
  const pages = open?.images || []

  // Open the modal automatically if /documents?doc=...[&page=N] is in the URL.
  useEffect(() => {
    const docParam = searchParams.get('doc')
    if (!docParam) return
    const doc = documents.find((d) => d.id === docParam)
    if (!doc) return
    setOpenId(docParam)
    const pageParam = parseInt(searchParams.get('page') || '1', 10)
    const pages = doc.images || []
    if (pages.length > 0) {
      const i = Math.min(Math.max(pageParam - 1, 0), pages.length - 1)
      setPageIdx(i)
    } else {
      setPageIdx(0)
    }
  }, [searchParams])

  const openDoc = (id) => {
    setOpenId(id)
    setPageIdx(0)
  }

  const close = useCallback(() => {
    setOpenId(null)
    if (searchParams.has('doc') || searchParams.has('page')) {
      const next = new URLSearchParams(searchParams)
      next.delete('doc')
      next.delete('page')
      setSearchParams(next, { replace: true })
    }
  }, [searchParams, setSearchParams])

  const next = useCallback(() => {
    if (pages.length > 0) setPageIdx((i) => (i + 1) % pages.length)
  }, [pages.length])

  const prev = useCallback(() => {
    if (pages.length > 0) setPageIdx((i) => (i - 1 + pages.length) % pages.length)
  }, [pages.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, next, prev])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">Documents</h1>
      <p className="text-sepia-600 mt-1 max-w-2xl">
        Letters, registers, memoirs and photographs gathered while putting this site together.
        Click any tile to read it page by page.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((d) => {
          const cover = d.images && d.images[0]
          const pageCount = d.images ? d.images.length : 0
          return (
            <button
              key={d.id}
              onClick={() => openDoc(d.id)}
              className="text-left group"
            >
              <div className="album-photo group-hover:shadow-album group-hover:-translate-y-0.5 transition-all">
                <div className="aspect-[3/4] bg-cream-200 flex items-center justify-center overflow-hidden relative">
                  {cover ? (
                    <img
                      src={cover}
                      alt={d.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <DocPlaceholder doc={d} />
                  )}
                  {pageCount > 1 && (
                    <span className="absolute bottom-2 right-2 bg-sepia-900/70 text-cream-50 text-[11px] tracking-wider px-2 py-0.5 rounded">
                      {pageCount} pages
                    </span>
                  )}
                </div>
              </div>
              <h3 className="mt-3 font-serif text-lg text-sepia-900 leading-tight">{d.title}</h3>
              <p className="text-xs text-sepia-500 mt-0.5">{d.date}</p>
              <p className="text-sm text-sepia-700 mt-1 line-clamp-2">{d.caption}</p>
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-sepia-900/85 flex items-stretch sm:items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="bg-cream-50 rounded-lg max-w-5xl w-full overflow-hidden shadow-album flex flex-col max-h-[95vh]"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-sepia-950 relative flex-1 min-h-0 min-h-[260px] flex items-center justify-center overflow-hidden">
                {pages.length > 0 ? (
                  <img
                    src={pages[pageIdx]}
                    alt={`${open.title} — page ${pageIdx + 1}`}
                    className="max-h-full max-w-full object-contain select-none"
                  />
                ) : (
                  <div className="text-cream-100 font-serif italic px-6 py-12 text-center">
                    No scan yet for this document.
                  </div>
                )}

                {pages.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous page"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-cream-50/85 hover:bg-cream-50 text-sepia-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next page"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-cream-50/85 hover:bg-cream-50 text-sepia-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                    >
                      ›
                    </button>
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-sepia-900/80 text-cream-100 text-xs tracking-wider px-2.5 py-0.5 rounded">
                      {pageIdx + 1} / {pages.length}
                    </span>
                  </>
                )}
              </div>

              <div className="p-5 overflow-y-auto shrink-0 max-h-[45vh] sm:max-h-[40vh]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl text-sepia-900">{open.title}</h2>
                    <p className="text-sm text-sepia-500 mt-0.5">{open.date}</p>
                  </div>
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="shrink-0 px-3 py-1.5 bg-sepia-100 rounded-md text-sepia-800 hover:bg-sepia-200 text-sm"
                  >
                    Close
                  </button>
                </div>
                <p className="mt-3 font-serif text-[17px] leading-relaxed text-sepia-800">
                  {open.caption}
                </p>

                {pages.length > 1 && (
                  <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                    {pages.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setPageIdx(i)}
                        className={`shrink-0 rounded border-2 transition ${
                          i === pageIdx
                            ? 'border-ochre-500'
                            : 'border-transparent hover:border-sepia-300'
                        }`}
                        aria-label={`Go to page ${i + 1}`}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-16 w-12 object-cover rounded-[2px]"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DocPlaceholder({ doc }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center px-4 py-6"
      style={{
        background:
          'repeating-linear-gradient(45deg, #f0e6d2 0, #f0e6d2 6px, #ece0c6 6px, #ece0c6 12px)',
      }}
    >
      <svg
        width={36}
        height={36}
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
      <p className="mt-2 text-xs text-sepia-700 font-serif italic max-w-[80%]">
        {doc.title}
      </p>
      <p className="text-[10px] text-sepia-500 mt-1">{doc.date}</p>
    </div>
  )
}
