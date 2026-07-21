import { useEffect, useRef, useState } from 'react'
import { MATHEMATICIANS, byId } from './data.js'
import { IDEAS } from './ideas.js'
import { searchAll } from './search.js'
import { fmtRange } from './format.js'

export default function SearchBox({ onSelect }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)
  const results = q ? searchAll(q, MATHEMATICIANS, IDEAS) : []

  // "/" focuses search from anywhere outside a text field.
  useEffect(() => {
    const onKey = e => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function pick(id) {
    onSelect(id)
    setQ('')
    setOpen(false)
    inputRef.current?.blur()
  }
  function onKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIdx(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[idx]) {
      pick(results[idx].id)
    } else if (e.key === 'Escape') {
      setQ('')
      setOpen(false)
      inputRef.current?.blur()
    }
  }

  return (
    <div className="searchbox">
      <input
        ref={inputRef}
        type="text"
        placeholder="search figures & ideas · /"
        aria-label="Search mathematicians and ideas"
        value={q}
        onChange={e => {
          setQ(e.target.value)
          setOpen(true)
          setIdx(0)
        }}
        onFocus={() => q && setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={onKeyDown}
      />
      {open && results.length > 0 && (
        <ul className="search-results">
          {results.map((r, i) => (
            <li
              key={r.id}
              className={i === idx ? 'sel' : ''}
              onMouseDown={e => {
                e.preventDefault()
                pick(r.id)
              }}
              onMouseEnter={() => setIdx(i)}
            >
              <span className="rname">{r.name}</span>
              <span className="rmeta">
                {r.kind === 'idea' ? (r.label ?? 'an idea') : fmtRange(byId[r.id])}
                {r.kind !== 'idea' && r.label ? ` · ${r.label}` : ''}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
