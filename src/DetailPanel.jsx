// The entry, inline below the view (owner precedent: no pop-out drawer).
// Two modes: a person entry (portrait, bio, key ideas, works, legacy,
// influence edges, lifeline) and an idea entry (spark → move → world with
// people and genealogy chips).
import { useRef, useState } from 'react'
import { byId, eraById } from './data.js'
import { ideaById, ideaChildren } from './ideas.js'
import { EDGES } from './edges.js'
import { WORK_LINKS } from './works.js'
import { fmtRange } from './format.js'
import { fmtYear } from './geo.js'
import { addClipping } from './codex.js'
import Lifeline from './Lifeline.jsx'

const UNLINKABLE = /^(No |Wrote |Nothing |~)/

function EdgeList({ label, entries, onJump }) {
  if (!entries.length) return null
  return (
    <>
      <h4>{label}</h4>
      {entries.map(({ id, text }) => (
        <p className="edge" key={id}>
          <button className="edgechip" onClick={() => onJump(id)}>
            {byId[id].name}
          </button>{' '}
          {text}
        </p>
      ))}
    </>
  )
}

function useClips() {
  const [clipped, setClipped] = useState(() => new Set())
  const clip = (key, entry) => {
    addClipping(entry)
    setClipped(s => new Set(s).add(key))
  }
  return [clipped, clip]
}

function PersonEntry({ p, onClose, onJump, onConverse }) {
  const [clipped, clip] = useClips()
  const failedPortraits = useRef(new Set())
  const [, bump] = useState(0)
  const era = eraById[p.era]
  const workLookup = w =>
    WORK_LINKS[p.id]?.[w] ??
    `https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(
      `${w.replace(/\s*\(.*\)$/, '')} ${p.name}`,
    )}`
  const influencedBy = p.influences.map(id => ({ id, text: EDGES[`${id}>${p.id}`] }))
  const wentOn = p.influenced.map(id => ({ id, text: EDGES[`${p.id}>${id}`] }))
  return (
    <section className="detail" aria-label={`Entry for ${p.name}`}>
      <button className="close" onClick={onClose} aria-label="Close entry">
        ×
      </button>
      <div className="detail-side">
        {failedPortraits.current.has(p.id) ? (
          <div className="portrait-ph">chalk portrait — M3</div>
        ) : (
          <img
            className="portrait-img"
            src={p.portrait}
            alt={`Chalk portrait of ${p.name}`}
            onError={() => {
              failedPortraits.current.add(p.id)
              bump(n => n + 1)
            }}
          />
        )}
        <h3>{p.name}</h3>
        <div className="dates">
          {fmtRange(p)} · born at {p.place.name}
        </div>
        <div className="chips">
          <span className="c">{era.name}</span>
          {p.school !== '—' && <span className="c">{p.school}</span>}
        </div>
        <p className="oneline">
          “{p.line}”{' '}
          <button
            className="clipbtn"
            title="Clip to your commonplace book"
            onClick={() => clip(`${p.id}:line`, { kind: 'line', thinkerId: p.id, text: p.line })}
          >
            {clipped.has(`${p.id}:line`) ? '❧ clipped' : '❧'}
          </button>
        </p>
        <button className="converse" onClick={() => onConverse(p.id)}>
          Converse with {p.name} ↓
        </button>
        <h4>FURTHER READING</h4>
        <div className="reading">
          {p.links.map(l => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="detail-main">
        <p className="lead">{p.blurb}</p>
        <h4>WHO THEY WERE</h4>
        <p className="body">{p.bio}</p>
        <h4>KEY IDEAS</h4>
        {p.ideas.map(i => (
          <p className="idea" key={i.title}>
            <b>{i.title}.</b> {i.text}{' '}
            <button
              className="clipbtn"
              title="Clip to your commonplace book"
              onClick={() =>
                clip(`${p.id}:${i.title}`, {
                  kind: 'idea',
                  thinkerId: p.id,
                  title: i.title,
                  text: `${i.title}. ${i.text}`,
                })
              }
            >
              {clipped.has(`${p.id}:${i.title}`) ? '❧ clipped' : '❧'}
            </button>
          </p>
        ))}
        <h4>MAJOR WORKS</h4>
        <ul className="works">
          {p.works.map(w => (
            <li key={w}>
              {UNLINKABLE.test(w) ? (
                w
              ) : (
                <a href={workLookup(w)} target="_blank" rel="noopener noreferrer">
                  {w}
                </a>
              )}
            </li>
          ))}
        </ul>
        <h4>LEGACY</h4>
        <p className="body">{p.legacy}</p>
        <EdgeList label="INFLUENCED BY" entries={influencedBy} onJump={onJump} />
        <EdgeList label="WENT ON TO INFLUENCE" entries={wentOn} onJump={onJump} />
        <h4>IN TIME</h4>
        <Lifeline philosopher={p} onJump={onJump} />
      </div>
    </section>
  )
}

function IdeaEntry({ idea, onClose, onJump }) {
  const [clipped, clip] = useClips()
  const children = ideaChildren[idea.id]
  const sec = (key, cap, text) => (
    <div className={`sec ${key}`}>
      <span className="cap">{cap}</span>
      {text}{' '}
      <button
        className="clipbtn"
        title="Clip to your commonplace book"
        onClick={() =>
          clip(`${idea.id}:${key}`, {
            kind: 'idea-essay',
            thinkerId: idea.id,
            title: `${idea.name} — ${cap.toLowerCase()}`,
            text,
          })
        }
      >
        {clipped.has(`${idea.id}:${key}`) ? '❧ clipped' : '❧'}
      </button>
    </div>
  )
  return (
    <section className="detail idea-entry" aria-label={`Entry for the idea: ${idea.name}`}>
      <button className="close" onClick={onClose} aria-label="Close entry">
        ×
      </button>
      <div className="detail-side">
        <h3>{idea.name}</h3>
        <div className="dates">
          an idea · emerges c. {fmtYear(idea.year)}
          {idea.place ? ` · ${idea.place}` : ''}
        </div>
        <p className="oneline">
          “{idea.line}”{' '}
          <button
            className="clipbtn"
            title="Clip to your commonplace book"
            onClick={() =>
              clip(`${idea.id}:line`, { kind: 'line', thinkerId: idea.id, text: idea.line })
            }
          >
            {clipped.has(`${idea.id}:line`) ? '❧ clipped' : '❧'}
          </button>
        </p>
        {idea.people.length > 0 && (
          <>
            <h4>ITS PEOPLE</h4>
            <div className="genea">
              {idea.people.map(id => (
                <button className="edgechip" key={id} onClick={() => onJump(id)}>
                  {byId[id].name}
                </button>
              ))}
            </div>
          </>
        )}
        {idea.parents.length > 0 && (
          <>
            <h4>DESCENDS FROM</h4>
            <div className="genea">
              {idea.parents.map(id => (
                <button className="edgechip parent" key={id} onClick={() => onJump(id)}>
                  {ideaById[id].name}
                </button>
              ))}
            </div>
          </>
        )}
        {children.length > 0 && (
          <>
            <h4>LEADS TO</h4>
            <div className="genea">
              {children.map(id => (
                <button className="edgechip" key={id} onClick={() => onJump(id)}>
                  {ideaById[id].name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="detail-main">
        {sec('spark', 'SPARK', idea.spark)}
        {sec('move', 'MOVE', idea.move)}
        {sec('world', 'WORLD', idea.world)}
      </div>
    </section>
  )
}

export default function DetailPanel({ entry, onClose, onJump, onConverse }) {
  if (!entry) {
    return (
      <div className="detail-hint">
        Select a mathematician on the globe — or an idea on the web — to open their entry here.
      </div>
    )
  }
  if (entry.kind === 'idea') {
    return <IdeaEntry idea={ideaById[entry.id]} onClose={onClose} onJump={onJump} />
  }
  return (
    <PersonEntry p={byId[entry.id]} onClose={onClose} onJump={onJump} onConverse={onConverse} />
  )
}
