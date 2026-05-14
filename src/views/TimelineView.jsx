import { Link } from 'react-router-dom'
import { timeline, people } from '../data/familyData'

export default function TimelineView() {
  // Group strictly by year, keeping order.
  const sorted = [...timeline].sort((a, b) => a.year - b.year)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">Timeline</h1>
      <p className="text-sepia-600 mt-1 max-w-2xl">
        Family events on the left, world events on the right. Click any family event to open the
        person.
      </p>

      <div className="mt-8 relative">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-sepia-300"
          aria-hidden
        />
        <ol className="space-y-6">
          {sorted.map((e, i) => (
            <Row key={`${e.year}-${i}`} event={e} />
          ))}
        </ol>
      </div>
    </div>
  )
}

function Row({ event }) {
  const isFamily = event.type === 'family'
  const person = event.personId ? people[event.personId] : null

  return (
    <li className="relative grid grid-cols-2 gap-4 items-start">
      <div className="absolute left-1/2 -translate-x-1/2 top-3 flex items-center">
        <span
          className={`w-3 h-3 rounded-full border-2 ${
            isFamily ? 'bg-coral-500 border-cream-50' : 'bg-sepia-400 border-cream-50'
          }`}
        />
      </div>

      {isFamily ? (
        <div className="pr-6 text-right">
          <p className="font-serif text-sm text-sepia-500">{event.year}</p>
          {person ? (
            <Link
              to={`/people/${person.id}`}
              className="block font-serif text-lg text-sepia-900 leading-tight hover:text-coral-500 no-underline"
            >
              {event.label}
            </Link>
          ) : (
            <p className="font-serif text-lg text-sepia-900 leading-tight">{event.label}</p>
          )}
        </div>
      ) : (
        <div />
      )}

      {!isFamily ? (
        <div className="pl-6 col-start-2">
          <p className="font-serif text-sm text-sepia-500">{event.year}</p>
          <p className="font-serif text-base italic text-sepia-700 leading-tight">{event.label}</p>
        </div>
      ) : (
        <div className="col-start-2" />
      )}
    </li>
  )
}
