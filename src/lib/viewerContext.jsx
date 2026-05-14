import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ancestorsOf, people, viewerCandidates } from '../data/familyData'

const ViewerContext = createContext(null)

const STORAGE_KEY = 'naylor-tree:viewer'

export function ViewerProvider({ children }) {
  const [viewerId, setViewerIdState] = useState(() => {
    if (typeof window === 'undefined') return 'you'
    return localStorage.getItem(STORAGE_KEY) || 'you'
  })
  const [hasChosen, setHasChosen] = useState(() => {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem(STORAGE_KEY)
  })

  function setViewerId(id) {
    setViewerIdState(id)
    setHasChosen(true)
    try { localStorage.setItem(STORAGE_KEY, id) } catch { /* ignore */ }
  }

  const ancestors = useMemo(() => {
    const ids = ancestorsOf(viewerId)
    ids.add(viewerId)
    return ids
  }, [viewerId])

  const value = useMemo(
    () => ({
      viewerId,
      setViewerId,
      hasChosen,
      ancestors,
      candidates: viewerCandidates,
      viewer: people[viewerId],
    }),
    [viewerId, hasChosen, ancestors]
  )

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
}

export function useViewer() {
  const v = useContext(ViewerContext)
  if (!v) throw new Error('useViewer must be used inside ViewerProvider')
  return v
}
