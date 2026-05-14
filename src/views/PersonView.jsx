import { Link, useParams } from 'react-router-dom'
import { branchStyle, documents, people, stories as allStories } from '../data/familyData'
import { useViewer } from '../lib/viewerContext'

export default function PersonView() {
  const { id } = useParams()
  const { ancestors, viewer } = useViewer()
  const person = people[id]

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
