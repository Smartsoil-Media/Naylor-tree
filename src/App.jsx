import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TreeView from './views/TreeView'
import PeopleView from './views/PeopleView'
import PersonView from './views/PersonView'
import PlacesView from './views/PlacesView'
import DocumentsView from './views/DocumentsView'
import TimelineView from './views/TimelineView'
import WhoAreYouView from './views/WhoAreYouView'
import { ViewerProvider } from './lib/viewerContext'

export default function App() {
  return (
    <ViewerProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<TreeView />} />
            <Route path="/people" element={<PeopleView />} />
            <Route path="/people/:id" element={<PersonView />} />
            <Route path="/places" element={<PlacesView />} />
            <Route path="/documents" element={<DocumentsView />} />
            <Route path="/timeline" element={<TimelineView />} />
            <Route path="/who-are-you" element={<WhoAreYouView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ViewerProvider>
  )
}
