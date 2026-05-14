import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { places } from '../data/familyData'

// Default Leaflet icons don't load when the path is bundled; build one inline.
const icon = L.divIcon({
  className: '',
  html: `<div style="
    background:#cf6e51;
    width:18px;height:18px;border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    border:2px solid #fbf7f0;
    box-shadow:0 2px 6px rgba(60,40,20,0.4);
  "></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 18],
})

export default function PlacesView() {
  const [active, setActive] = useState(places[0].id)
  const activePlace = places.find((p) => p.id === active) || places[0]

  // Compute a map center that contains the Bray cluster well.
  const center = [52.5, -4.5]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl text-sepia-900">Places</h1>
      <p className="text-sepia-600 mt-1 max-w-2xl">
        Bray was home for over two centuries. From there the family scattered — to London, Devon,
        America, and to the two war cemeteries that mark our 20th-century losses.
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="space-y-2">
          {places.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                active === p.id
                  ? 'bg-cream-50 border-coral-400'
                  : 'bg-cream-100 border-sepia-200 hover:border-sepia-300'
              }`}
            >
              <p className="font-serif text-lg text-sepia-900 leading-tight">{p.name}</p>
              <p className="text-sm text-sepia-600 mt-1">{p.short}</p>
            </button>
          ))}
        </aside>

        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-lg overflow-hidden border border-sepia-200 shadow-card">
            <MapContainer
              center={center}
              zoom={5}
              style={{ height: 420, width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {places.map((p) => (
                <Marker
                  key={p.id}
                  position={[p.lat, p.lng]}
                  icon={icon}
                  eventHandlers={{ click: () => setActive(p.id) }}
                >
                  <Popup>
                    <strong>{p.name}</strong>
                    <br />
                    <span style={{ fontSize: 12 }}>{p.short}</span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <article className="bg-cream-50 rounded-lg p-5 border border-sepia-200">
            <h2 className="font-serif text-2xl text-sepia-900">{activePlace.name}</h2>
            <p className="text-sepia-600 italic mt-1">{activePlace.short}</p>
            <p className="mt-3 font-serif text-[17px] leading-relaxed text-sepia-800 whitespace-pre-line">
              {activePlace.body}
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
