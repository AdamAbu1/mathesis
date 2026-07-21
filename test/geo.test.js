import { describe, it, expect } from 'vitest'
import {
  YEAR_MIN, YEAR_MAX, eraFor, fmtYear, isFrontside, displayCoords, yearForSelection,
} from '../src/geo.js'
import { ERAS, MATHEMATICIANS } from '../src/data.js'

describe('eraFor', () => {
  it('maps years to eras by start threshold', () => {
    expect(eraFor(-1500, ERAS).name).toBe('Origins')
    expect(eraFor(-300, ERAS).name).toBe('The Greek Miracle')
    expect(eraFor(1000, ERAS).name).toBe('The House of Wisdom')
    expect(eraFor(1500, ERAS).name).toBe('Renaissance')
    expect(eraFor(1770, ERAS).name).toBe('The Age of Euler')
    expect(eraFor(1950, ERAS).name).toBe('The Modern Age')
  })
})

describe('fmtYear', () => {
  it('formats BCE and CE', () => {
    expect(fmtYear(-650)).toBe('650 BCE')
    expect(fmtYear(1781)).toBe('1781')
    expect(fmtYear(1780.7)).toBe('1781')
  })
})

describe('isFrontside', () => {
  it('shows the projection center and hides the antipode', () => {
    expect(isFrontside([20, 40], [-20, -40])).toBe(true)
    expect(isFrontside([-160, -40], [-20, -40])).toBe(false)
  })
})

describe('displayCoords', () => {
  const coords = displayCoords(MATHEMATICIANS)

  it('gives every figure unique display coordinates', () => {
    const keys = Object.values(coords).map(([lon, lat]) => `${lon.toFixed(3)},${lat.toFixed(3)}`)
    expect(new Set(keys).size).toBe(MATHEMATICIANS.length)
  })

  it('stays within ~1.2 degrees of the true birthplace', () => {
    for (const p of MATHEMATICIANS) {
      const [lon, lat] = coords[p.id]
      expect(Math.abs(lon - p.place.lon)).toBeLessThan(1.2)
      expect(Math.abs(lat - p.place.lat)).toBeLessThan(1.2)
    }
  })
})

describe('yearForSelection', () => {
  it('advances time to a not-yet-born target', () => {
    const galileo = MATHEMATICIANS.find(p => p.id === 'galileo')
    expect(yearForSelection(galileo, -650)).toBe(1642)
  })
  it('leaves time alone when the target already exists', () => {
    const galileo = MATHEMATICIANS.find(p => p.id === 'galileo')
    expect(yearForSelection(galileo, 1620)).toBe(1620)
    expect(yearForSelection(galileo, 1900)).toBe(1900)
  })

  it('jumps to the present for living figures', () => {
    const wiles = MATHEMATICIANS.find(p => p.id === 'wiles')
    expect(yearForSelection(wiles, -650)).toBe(YEAR_MAX)
  })
})

describe('place data', () => {
  it('every figure has a named birthplace with valid coordinates', () => {
    for (const p of MATHEMATICIANS) {
      expect(p.place?.name, p.id).toBeTruthy()
      expect(Math.abs(p.place.lat), p.id).toBeLessThanOrEqual(90)
      expect(Math.abs(p.place.lon), p.id).toBeLessThanOrEqual(180)
    }
  })
  it('year range covers every lifetime', () => {
    for (const p of MATHEMATICIANS) {
      expect(p.born).toBeGreaterThanOrEqual(YEAR_MIN)
      if (p.died != null) expect(p.died).toBeLessThanOrEqual(YEAR_MAX)
    }
  })
})

describe('constellation helpers', () => {
  it('influenceEdges lists one edge per influence, all valid ids', async () => {
    const { influenceEdges } = await import('../src/geo.js')
    const { byId } = await import('../src/data.js')
    const edges = influenceEdges(MATHEMATICIANS)
    const expected = MATHEMATICIANS.reduce((n, p) => n + p.influences.length, 0)
    expect(edges).toHaveLength(expected)
    expect(expected).toBeGreaterThan(60)
    for (const [a, b] of edges) {
      expect(byId[a], a).toBeTruthy()
      expect(byId[b], b).toBeTruthy()
    }
  })
  it('starTier maps degree to magnitude', async () => {
    const { starTier } = await import('../src/geo.js')
    expect(starTier(0)).toBe(1)
    expect(starTier(3)).toBe(1)
    expect(starTier(4)).toBe(2)
    expect(starTier(7)).toBe(2)
    expect(starTier(8)).toBe(3)
    expect(starTier(15)).toBe(3)
  })
})
