import { describe, it, expect } from 'vitest'
import { searchFigures, searchIdeas, searchAll, fold } from '../src/search.js'
import { MATHEMATICIANS } from '../src/data.js'
import { IDEAS } from '../src/ideas.js'

describe('fold', () => {
  it('strips diacritics and special letters', () => {
    expect(fold('Königsberg')).toBe('konigsberg')
    expect(fold('Erdős')).toBe('erdos')
    expect(fold('Poincaré')).toBe('poincare')
    expect(fold('Viète')).toBe('viete')
  })
})

describe('searchFigures', () => {
  const S = q => searchFigures(q, MATHEMATICIANS)

  it('returns nothing for an empty query', () => {
    expect(S('')).toEqual([])
    expect(S('   ')).toEqual([])
  })

  it('word-prefix name matches rank first', () => {
    expect(S('gauss')[0].id).toBe('gauss')
    expect(S('noether')[0].id).toBe('noether')
    expect(S('kova')[0].id).toBe('kovalevskaya')
  })

  it('is diacritic-tolerant across fields', () => {
    const hilbert = S('konigsberg').find(r => r.id === 'hilbert')
    expect(hilbert?.label).toBe('born at Königsberg')
    expect(S('erdos')[0].id).toBe('erdos')
  })

  it('matches schools with a label', () => {
    const ids = S('gottingen').map(r => r.id)
    expect(ids).toContain('gauss')
    expect(ids).toContain('hilbert')
  })

  it('matches works with a label', () => {
    const newton = S('principia').find(r => r.id === 'newton')
    expect(newton?.label).toContain('work')
  })

  it('matches key-idea titles', () => {
    const galileo = S('paradox').find(r => r.id === 'galileo')
    expect(galileo?.label).toContain('idea')
  })

  it('caps results at 8', () => {
    expect(S('a').length).toBeLessThanOrEqual(8)
  })
})

describe('searchIdeas', () => {
  const S = q => searchIdeas(q, IDEAS)

  it('name-prefix matches rank first and carry kind', () => {
    const r = S('zero')[0]
    expect(r.id).toBe('zero')
    expect(r.kind).toBe('idea')
  })

  it('matches signature lines with the line as label', () => {
    const r = S('tortoise').find(x => x.id === 'counting') ?? S('pebble')[0]
    expect(r.id).toBe('counting')
    expect(r.label).toContain('pebble')
  })

  it('returns nothing for an empty query', () => {
    expect(S('')).toEqual([])
  })
})

describe('searchAll', () => {
  it('merges figures and ideas, each tagged with kind', () => {
    const rs = searchAll('proof', MATHEMATICIANS, IDEAS)
    expect(rs.some(r => r.kind === 'idea' && r.id === 'proof')).toBe(true)
    for (const r of rs) expect(['person', 'idea']).toContain(r.kind)
  })

  it('caps merged results at 8', () => {
    expect(searchAll('the', MATHEMATICIANS, IDEAS).length).toBeLessThanOrEqual(8)
  })
})
