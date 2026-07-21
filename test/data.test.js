import { describe, it, expect } from 'vitest'
import { ERAS, MATHEMATICIANS, byId, eraById } from '../src/data.js'
import { DETAILS } from '../src/details.js'
import { EDGES } from '../src/edges.js'
import { WORK_LINKS } from '../src/works.js'
import { YEAR_MAX } from '../src/geo.js'

describe('curated work links', () => {
  it('every curated key matches an actual work string exactly', () => {
    for (const [pid, table] of Object.entries(WORK_LINKS)) {
      const p = byId[pid]
      expect(p, pid).toBeDefined()
      for (const key of Object.keys(table)) {
        expect(p.works, `${pid}: "${key}"`).toContain(key)
      }
    }
  })

  it('curated links are wikipedia articles, not searches', () => {
    for (const table of Object.values(WORK_LINKS)) {
      for (const url of Object.values(table)) {
        expect(url).toMatch(/^https:\/\/en\.wikipedia\.org\/wiki\//)
      }
    }
  })
})

describe('influence edges and reading links', () => {
  it('every influence pair has an edge annotation', () => {
    for (const p of MATHEMATICIANS) {
      for (const inf of p.influences) {
        expect(EDGES[`${inf}>${p.id}`]?.length, `${inf}>${p.id}`).toBeGreaterThan(20)
      }
    }
  })

  it('no orphan edge annotations', () => {
    const valid = new Set(
      MATHEMATICIANS.flatMap(p => p.influences.map(inf => `${inf}>${p.id}`)),
    )
    for (const key of Object.keys(EDGES)) {
      expect(valid.has(key), key).toBe(true)
    }
  })

  it('every figure has well-formed further-reading links', () => {
    for (const p of MATHEMATICIANS) {
      expect(p.links.length, p.id).toBeGreaterThanOrEqual(1)
      for (const l of p.links) {
        expect(l.label).toBeTruthy()
        expect(l.url, p.id).toMatch(/^https:\/\//)
      }
    }
  })
})

describe('detail content', () => {
  it('DETAILS keys exactly match figure ids', () => {
    expect(new Set(Object.keys(DETAILS))).toEqual(new Set(MATHEMATICIANS.map(p => p.id)))
  })

  it('every figure has full detail content', () => {
    for (const p of MATHEMATICIANS) {
      expect(p.bio?.length, `${p.id} bio`).toBeGreaterThan(80)
      expect(p.ideas?.length, `${p.id} ideas`).toBeGreaterThanOrEqual(2)
      for (const i of p.ideas) {
        expect(i.title, p.id).toBeTruthy()
        expect(i.text?.length, `${p.id} idea text`).toBeGreaterThan(40)
      }
      expect(p.works?.length, `${p.id} works`).toBeGreaterThanOrEqual(1)
      expect(p.legacy?.length, `${p.id} legacy`).toBeGreaterThan(40)
    }
  })

  it('influenced is the exact inverse of influences', () => {
    for (const p of MATHEMATICIANS) {
      for (const inf of p.influences) {
        expect(byId[inf].influenced, `${inf} should list ${p.id}`).toContain(p.id)
      }
      for (const heir of p.influenced) {
        expect(byId[heir].influences, `${heir} should cite ${p.id}`).toContain(p.id)
      }
    }
  })
})

describe('figure data schema', () => {
  it('has unique ids', () => {
    const ids = MATHEMATICIANS.map(p => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('every entry has the required fields', () => {
    for (const p of MATHEMATICIANS) {
      expect(p.id).toBeTruthy()
      expect(p.name).toBeTruthy()
      expect(typeof p.born).toBe('number')
      expect(p.died === null || typeof p.died === 'number', `${p.id} died`).toBe(true)
      expect(p.school).toBeTruthy()
      expect(p.blurb.length).toBeGreaterThan(40)
      expect(p.line).toBeTruthy()
      expect(Array.isArray(p.influences)).toBe(true)
      expect(['egypt', 'greek', 'china', 'india', 'islam', 'west']).toContain(p.tradition)
      expect(p.portrait).toBe(`portraits/${p.id}.jpg`)
    }
  })

  // M3 gate: the chalk portrait set (incl. portraits/mathesis.jpg for the
  // guide medallion) and per-era emblems don't exist yet. Un-skip when the
  // asset pass lands — the assertions are ready below.
  it.skip('every portrait and thumbnail file exists on disk (M3)', async () => {
    const { existsSync } = await import('node:fs')
    const { join } = await import('node:path')
    for (const p of MATHEMATICIANS) {
      expect(existsSync(join(process.cwd(), 'public', p.portrait)), p.id).toBe(true)
      expect(existsSync(join(process.cwd(), 'public', p.thumb)), `${p.id} thumb`).toBe(true)
    }
    expect(existsSync(join(process.cwd(), 'public', 'portraits/mathesis.jpg'))).toBe(true)
  })

  it.skip('every era has a scrubber emblem on disk (M3)', async () => {
    const { existsSync } = await import('node:fs')
    const { join } = await import('node:path')
    for (const e of ERAS) {
      expect(existsSync(join(process.cwd(), 'public', `emblems/${e.id}.jpg`)), e.id).toBe(true)
    }
  })

  it('birth precedes death for closed lives', () => {
    for (const p of MATHEMATICIANS) {
      if (p.died != null) expect(p.born).toBeLessThan(p.died)
    }
  })

  it('living figures are explicitly marked with died: null', () => {
    const living = MATHEMATICIANS.filter(p => p.died === null).map(p => p.id)
    expect(living).toEqual(['wiles'])
  })

  it('every era reference resolves', () => {
    for (const p of MATHEMATICIANS) expect(eraById[p.era]).toBeDefined()
  })

  it('every influence reference resolves to a known figure', () => {
    for (const p of MATHEMATICIANS) {
      for (const inf of p.influences) {
        expect(byId[inf], `${p.id} → ${inf}`).toBeDefined()
        expect(inf).not.toBe(p.id)
      }
    }
  })

  it('no influence arrives from beyond the grave', () => {
    // Influencer must be born within (or before) the influencee's lifetime.
    // Strict birth-order is deliberately NOT required: Gauss (b. 1777)
    // shaped Germain (b. 1776) — contemporaries influence each other.
    for (const p of MATHEMATICIANS) {
      for (const inf of p.influences) {
        expect(byId[inf].born, `${p.id} influenced by ${inf}`).toBeLessThan(p.died ?? YEAR_MAX)
      }
    }
  })

  it('eras are ordered by start and well-formed', () => {
    for (let i = 1; i < ERAS.length; i++) {
      expect(ERAS[i].start).toBeGreaterThan(ERAS[i - 1].start)
      expect(ERAS[i].end).toBeGreaterThan(ERAS[i].start)
    }
  })

  it('every era has at least one figure', () => {
    for (const e of ERAS) {
      expect(MATHEMATICIANS.some(p => p.era === e.id), e.id).toBe(true)
    }
  })
})
