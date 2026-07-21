import { describe, it, expect } from 'vitest'
import { IDEAS, ideaById, ideaChildren, ideaEdges, ideasAcyclic } from '../src/ideas.js'
import { byId } from '../src/data.js'

describe('idea schema', () => {
  it('has unique ids and names', () => {
    expect(new Set(IDEAS.map(i => i.id)).size).toBe(IDEAS.length)
    expect(new Set(IDEAS.map(i => i.name)).size).toBe(IDEAS.length)
  })

  it('every idea has the required fields', () => {
    for (const i of IDEAS) {
      expect(i.id).toMatch(/^[a-z]+$/)
      expect(i.name).toBeTruthy()
      expect(typeof i.year).toBe('number')
      expect(i.line).toBeTruthy()
      expect(i.spark?.length, `${i.id} spark`).toBeGreaterThan(60)
      expect(i.move?.length, `${i.id} move`).toBeGreaterThan(60)
    }
  })

  it('world — the load-bearing field — is substantial for every idea', () => {
    // SCOPE.md: if an idea entry can't say what it does to your view of
    // reality, it doesn't ship.
    for (const i of IDEAS) {
      expect(i.world?.length, `${i.id} world`).toBeGreaterThan(120)
    }
  })

  it('idea ids never collide with figure ids', () => {
    for (const i of IDEAS) expect(byId[i.id], i.id).toBeUndefined()
  })
})

describe('idea genealogy', () => {
  it('every parent resolves and is not self', () => {
    for (const i of IDEAS) {
      for (const p of i.parents) {
        expect(ideaById[p], `${i.id} ← ${p}`).toBeDefined()
        expect(p).not.toBe(i.id)
      }
    }
  })

  it('the graph is acyclic', () => {
    expect(ideasAcyclic()).toBe(true)
  })

  it('children are the exact inverse of parents', () => {
    for (const i of IDEAS) {
      for (const p of i.parents) {
        expect(ideaChildren[p], `${p} should list ${i.id}`).toContain(i.id)
      }
      for (const c of ideaChildren[i.id]) {
        expect(ideaById[c].parents).toContain(i.id)
      }
    }
  })

  it('edges enumerate every parent link once', () => {
    const expected = IDEAS.reduce((n, i) => n + i.parents.length, 0)
    expect(ideaEdges).toHaveLength(expected)
    expect(expected).toBeGreaterThan(25)
  })

  it('no idea is an island unless it is a root', () => {
    // Every idea either has parents or has children — nothing floats alone.
    for (const i of IDEAS) {
      expect(
        i.parents.length + ideaChildren[i.id].length,
        `${i.id} is disconnected`,
      ).toBeGreaterThan(0)
    }
  })
})

describe('idea people links', () => {
  it('every people reference resolves to a roster figure', () => {
    for (const i of IDEAS) {
      for (const pid of i.people) {
        expect(byId[pid], `${i.id} → ${pid}`).toBeDefined()
      }
    }
  })

  it('almost every idea names its people (the vanishing point is art-born)', () => {
    for (const i of IDEAS) {
      if (i.id === 'vanishing') continue
      expect(i.people.length, i.id).toBeGreaterThan(0)
    }
  })
})

describe('idea web layout', () => {
  it('every idea has an in-range, unique web position', () => {
    const seen = new Set()
    for (const i of IDEAS) {
      const [x, y] = i.web
      expect(x, i.id).toBeGreaterThanOrEqual(0)
      expect(x, i.id).toBeLessThanOrEqual(100)
      expect(y, i.id).toBeGreaterThanOrEqual(0)
      expect(y, i.id).toBeLessThanOrEqual(60)
      const key = `${x},${y}`
      expect(seen.has(key), `${i.id} overlaps another node`).toBe(false)
      seen.add(key)
    }
  })

  it('web positions are readably spaced', () => {
    // Guard against label pile-ups: no two nodes closer than ~4 units.
    const pts = IDEAS.map(i => ({ id: i.id, x: i.web[0], y: i.web[1] }))
    for (let a = 0; a < pts.length; a++) {
      for (let b = a + 1; b < pts.length; b++) {
        const d = Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y)
        expect(d, `${pts[a].id} vs ${pts[b].id}`).toBeGreaterThan(4)
      }
    }
  })
})
