import { Link } from 'react-router-dom'
import { documents } from '../data/familyData'

// <Cite docId="memoir-bart-hughes" page={3} /> renders a small inline
// numbered citation like [2] that links to /documents?doc=...&page=N.
// The number is the document's 1-based position in the documents array.
export default function Cite({ docId, page }) {
  const idx = documents.findIndex((d) => d.id === docId)
  if (idx === -1) return null
  const doc = documents[idx]
  const search = new URLSearchParams({ doc: docId })
  if (page) search.set('page', String(page))
  return (
    <Link
      to={`/documents?${search.toString()}`}
      title={`Source ${idx + 1}: ${doc.title}`}
      aria-label={`Source ${idx + 1}: ${doc.title}`}
      className="cite-link inline-block align-super text-[0.7em] leading-none no-underline text-ochre-600 hover:text-ochre-700 hover:underline ml-0.5 font-sans"
    >
      [{idx + 1}]
    </Link>
  )
}
