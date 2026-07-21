// The idea web: the genealogy of the 28 great ideas as a chalk diagram.
// SVG (28 nodes, ~40 edges — no canvas needed at this scale), hand-curated
// positions from ideas.js `web`, chalk wobble via an SVG displacement filter.
// Selecting an idea lights its ancestry in yellow chalk and its descent in
// blue; everything unrelated dims. Constellation mode's sibling.
import { useMemo } from 'react'
import { IDEAS, ideaById, ideaChildren, ideaEdges } from './ideas.js'

const W = 1000
const H = 680
const pos = i => [i.web[0] * 9.4 + 15, i.web[1] * 10 + 40]

function closure(startId, step) {
  const out = new Set([startId])
  const queue = [startId]
  while (queue.length) {
    for (const next of step(queue.pop())) {
      if (!out.has(next)) {
        out.add(next)
        queue.push(next)
      }
    }
  }
  return out
}

// Hand-drawn edge: a quadratic curve bowed slightly off the straight line.
function edgePath([x1, y1], [x2, y2]) {
  const cx = (x1 + x2) / 2 + (y2 - y1) * 0.1
  const cy = (y1 + y2) / 2 - (x2 - x1) * 0.1
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`
}

export default function IdeaWeb({ selectedId, onSelect }) {
  const { anc, desc } = useMemo(() => {
    if (!selectedId) return { anc: new Set(), desc: new Set() }
    return {
      anc: closure(selectedId, id => ideaById[id]?.parents ?? []),
      desc: closure(selectedId, id => ideaChildren[id] ?? []),
    }
  }, [selectedId])

  const sel = selectedId ? ideaById[selectedId] : null

  return (
    <div className="ideaweb-wrap">
      <svg
        className="ideaweb"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="The genealogy of mathematical ideas"
      >
        <defs>
          <filter id="webrough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.035" numOctaves="2" seed="11" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
          </filter>
        </defs>

        <g fill="none" strokeLinecap="round" filter="url(#webrough)">
          {ideaEdges.map(([a, b]) => {
            const ancestral = sel && anc.has(b)
            const descendant = sel && desc.has(a)
            const stroke = ancestral
              ? 'rgba(232,212,139,.85)'
              : descendant
                ? 'rgba(169,199,217,.8)'
                : sel
                  ? 'rgba(234,231,220,.10)'
                  : 'rgba(234,231,220,.28)'
            return (
              <path
                key={`${a}>${b}`}
                d={edgePath(pos(ideaById[a]), pos(ideaById[b]))}
                stroke={stroke}
                strokeWidth={ancestral || descendant ? 1.8 : 1.1}
              />
            )
          })}
        </g>

        {IDEAS.map(i => {
          const [x, y] = pos(i)
          const related = !sel || anc.has(i.id) || desc.has(i.id)
          const isSel = i.id === selectedId
          return (
            <g
              key={i.id}
              className={`node${isSel ? ' sel' : ''}${related ? '' : ' dim'}`}
              onClick={() => onSelect(i.id)}
            >
              {isSel && (
                <circle
                  cx={x}
                  cy={y}
                  r="13"
                  fill="none"
                  stroke="#e8d48b"
                  strokeWidth="1.6"
                  strokeDasharray="4 4"
                  filter="url(#webrough)"
                />
              )}
              <circle cx={x} cy={y} r={isSel ? 6.5 : 4.5} filter="url(#webrough)" />
              <text
                x={x}
                y={y + 20}
                textAnchor={x > W - 90 ? 'end' : x < 90 ? 'start' : 'middle'}
              >
                {i.name}
              </text>
            </g>
          )
        })}
      </svg>
      <div className="webhint">
        {sel
          ? 'yellow chalk — where it came from · blue — where it leads · esc to clear'
          : 'the genealogy of ideas · click one to open its entry'}
      </div>
    </div>
  )
}
