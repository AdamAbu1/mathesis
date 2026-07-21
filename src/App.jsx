import { useEffect, useMemo, useRef, useState } from 'react'
import Globe from './Globe.jsx'
import IdeaWeb from './IdeaWeb.jsx'
import DetailPanel from './DetailPanel.jsx'
import SearchBox from './SearchBox.jsx'
import AgentPanel from './AgentPanel.jsx'
import ItineraryBar from './ItineraryBar.jsx'
import DailyLine from './DailyLine.jsx'
import CommonplaceBook from './CommonplaceBook.jsx'
import { itineraryById } from './itineraries.js'
import { byId } from './data.js'
import { ideaById } from './ideas.js'

export default function App() {
  // One selection across both views: {kind: 'person' | 'idea', id}.
  const [sel, setSel] = useState(null)
  const [view, setView] = useState('globe')
  const [personaId, setPersonaId] = useState(null)
  const [trip, setTrip] = useState(null) // {routeId, index}
  const agentRef = useRef(null)

  const selectPerson = id => {
    setSel({ kind: 'person', id })
    setView('globe')
  }
  const selectIdea = id => {
    setSel({ kind: 'idea', id })
    setView('web')
  }
  // Chips anywhere (agent, codex, search) resolve by id across both atlases.
  const smartSelect = id => {
    if (byId[id]) selectPerson(id)
    else if (ideaById[id]) selectIdea(id)
  }

  const startTrip = routeId => {
    setTrip({ routeId, index: 0 })
    selectPerson(itineraryById[routeId].stops[0].id)
  }
  const stepTrip = delta =>
    setTrip(t => {
      if (!t) return t
      const route = itineraryById[t.routeId]
      const index = Math.max(0, Math.min(route.stops.length - 1, t.index + delta))
      selectPerson(route.stops[index].id)
      return { ...t, index }
    })
  const endTrip = () => setTrip(null)

  // Wandering to a figure who happens to be on the route syncs the bar.
  const selPersonId = sel?.kind === 'person' ? sel.id : null
  useEffect(() => {
    if (!trip || !selPersonId) return
    const i = itineraryById[trip.routeId].stops.findIndex(s => s.id === selPersonId)
    if (i >= 0 && i !== trip.index) setTrip(t => ({ ...t, index: i }))
  }, [selPersonId]) // eslint-disable-line react-hooks/exhaustive-deps

  const itinerary = useMemo(
    () =>
      trip
        ? { ids: itineraryById[trip.routeId].stops.map(s => s.id), upTo: trip.index }
        : null,
    [trip],
  )

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && e.target.tagName !== 'INPUT') setSel(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const startConverse = id => {
    setPersonaId(id)
    agentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header>
        <h1>MATHESIS</h1>
        <div className="sub">a history of mathematical ideas · from the scribes of the Nile to the present</div>
        <SearchBox onSelect={smartSelect} />
      </header>
      <DailyLine onSelect={selectPerson} />
      <div className="viewtoggle">
        <button className={view === 'globe' ? 'on' : ''} onClick={() => setView('globe')}>
          THE WORLD
        </button>
        <span className="sep">·</span>
        <button className={view === 'web' ? 'on' : ''} onClick={() => setView('web')}>
          THE WEB OF IDEAS
        </button>
      </div>
      {view === 'globe' ? (
        <>
          <Globe selectedId={selPersonId} onSelect={selectPerson} itinerary={itinerary} />
          <ItineraryBar trip={trip} onStart={startTrip} onStep={stepTrip} onEnd={endTrip} />
        </>
      ) : (
        <IdeaWeb selectedId={sel?.kind === 'idea' ? sel.id : null} onSelect={selectIdea} />
      )}
      <DetailPanel
        entry={sel}
        onClose={() => setSel(null)}
        onJump={smartSelect}
        onConverse={startConverse}
      />
      <div ref={agentRef}>
        <AgentPanel
          personaId={personaId}
          onExitPersona={() => setPersonaId(null)}
          selectedId={selPersonId}
          onSelect={smartSelect}
        />
      </div>
      <CommonplaceBook onSelect={smartSelect} />
    </>
  )
}
