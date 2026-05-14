import { useNavigate } from 'react-router-dom'
import { useViewer } from '../lib/viewerContext'

export default function WhoAreYouView() {
  const { viewerId, setViewerId, hasChosen, candidates } = useViewer()
  const navigate = useNavigate()

  function pick(id) {
    setViewerId(id)
    navigate('/')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">Who are you?</h1>
      <p className="text-sepia-700 mt-2 font-serif text-lg">
        Pick the family member you are (or the closest one in the data). The tree and bios will
        then highlight your direct line of ancestors with a thicker border.
      </p>

      <div className="mt-6 space-y-2">
        {candidates.map((c) => (
          <button
            key={c.id}
            onClick={() => pick(c.id)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
              hasChosen && viewerId === c.id
                ? 'bg-ochre-300/30 border-ochre-400 text-sepia-900'
                : 'bg-cream-100 border-sepia-200 hover:border-ochre-300'
            }`}
          >
            <span className="font-serif text-lg">{c.label}</span>
          </button>
        ))}
      </div>

      {hasChosen && (
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-coral-500 text-white rounded-md hover:bg-coral-600"
          >
            See the tree
          </button>
          <button
            onClick={() => navigate('/people')}
            className="px-4 py-2 bg-sepia-100 text-sepia-800 rounded-md hover:bg-sepia-200"
          >
            Browse people
          </button>
        </div>
      )}
    </div>
  )
}
