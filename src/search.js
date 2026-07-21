// Ranked search: word-prefix name matches first, then name substrings, then
// school / birthplace / era / works / idea titles. Diacritic-folded so
// "erdos" finds Erdős and "poincare" finds Poincaré. Figures and the idea
// ledger search separately (the agent grounds on figures); searchAll merges
// both for the search box.
import { eraById } from './data.js'

export const fold = s =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replaceAll('ø', 'o')
    .replaceAll('æ', 'ae')
    .replaceAll('ß', 'ss')
    .replaceAll('ő', 'o')

function match(p, q) {
  const name = fold(p.name)
  const alias = fold(p.alias)
  if (
    name.split(/\s+/).some(w => w.startsWith(q)) ||
    alias.split(/[\s-]+/).some(w => w.startsWith(q))
  )
    return { rank: 0, label: null }
  if (name.includes(q) || alias.includes(q)) return { rank: 1, label: null }
  if (fold(p.school).includes(q)) return { rank: 2, label: `school · ${p.school}` }
  if (fold(p.place.name).includes(q)) return { rank: 3, label: `born at ${p.place.name}` }
  const era = eraById[p.era]
  if (fold(era.name).includes(q)) return { rank: 4, label: era.name }
  const work = p.works.find(w => fold(w).includes(q))
  if (work) return { rank: 5, label: `work · ${work.replace(/\s*\(.*\)$/, '')}` }
  const idea = p.ideas.find(i => fold(i.title).includes(q))
  if (idea) return { rank: 6, label: `idea · ${idea.title}` }
  return null
}

export function searchFigures(query, figures) {
  const q = fold(query.trim())
  if (!q) return []
  const out = []
  for (const p of figures) {
    const m = match(p, q)
    if (m) out.push({ id: p.id, name: p.name, rank: m.rank, label: m.label })
  }
  out.sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))
  return out.slice(0, 8)
}

export function searchIdeas(query, ideas) {
  const q = fold(query.trim())
  if (!q) return []
  const out = []
  for (const i of ideas) {
    const name = fold(i.name)
    let m = null
    if (name.split(/\s+/).some(w => w.startsWith(q))) m = { rank: 0, label: 'an idea' }
    else if (name.includes(q)) m = { rank: 1, label: 'an idea' }
    else if (fold(i.line).includes(q)) m = { rank: 4, label: `“${i.line}”` }
    if (m) out.push({ id: i.id, name: i.name, kind: 'idea', rank: m.rank, label: m.label })
  }
  out.sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))
  return out.slice(0, 6)
}

// Figures and ideas merged for the search box; each result carries `kind`.
export function searchAll(query, figures, ideas) {
  const f = searchFigures(query, figures).map(r => ({ ...r, kind: 'person' }))
  const i = searchIdeas(query, ideas)
  return [...f, ...i]
    .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))
    .slice(0, 8)
}
