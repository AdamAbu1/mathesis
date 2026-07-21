import { describe, it, expect } from 'vitest'
import { MATHEMATICIANS, byId } from '../src/data.js'
import { IDEAS } from '../src/ideas.js'
import {
  buildRoster,
  buildIdeaLedger,
  serializeThinker,
  serializeIdea,
  buildGuideSystem,
  buildPersonaSystem,
  buildSymposiumSystem,
  symposiumMessages,
  citedIds,
  contextIds,
  buildUserTurn,
  parseMarkers,
  chipName,
} from '../src/agent.js'

describe('roster & serialization', () => {
  it('roster lists every figure exactly once, keyed by id', () => {
    const lines = buildRoster().split('\n')
    expect(lines).toHaveLength(MATHEMATICIANS.length)
    for (const p of MATHEMATICIANS) {
      expect(lines.filter(l => l.startsWith(`${p.id} — `))).toHaveLength(1)
    }
  })

  it('idea ledger lists every idea with its line', () => {
    const lines = buildIdeaLedger().split('\n')
    expect(lines).toHaveLength(IDEAS.length)
    expect(lines.some(l => l.startsWith('incompleteness — '))).toBe(true)
  })

  it('serializes a full record with ideas, works, legacy, and influence markers', () => {
    const s = serializeThinker(byId.euler)
    expect(s).toContain('Euler [[euler]]')
    expect(s).toContain('Key ideas:')
    expect(s).toContain('Major works:')
    expect(s).toContain('Legacy:')
    expect(s).toContain('[[newton]]') // drew from
    expect(s).toContain('[[laplace]]') // went on to shape
  })

  it('serializes an idea with spark, move, world, and people markers', () => {
    const zero = IDEAS.find(i => i.id === 'zero')
    const s = serializeIdea(zero)
    expect(s).toContain('[[zero]]')
    expect(s).toContain('Spark:')
    expect(s).toContain('The move:')
    expect(s).toContain('How it changes the world:')
    expect(s).toContain('[[brahmagupta]]')
  })
})

describe('system prompts', () => {
  it('guide prompt carries the laws, marker protocol, roster, and ledger', () => {
    const sys = buildGuideSystem()
    expect(sys).toContain('Lady Mathesis')
    expect(sys).toContain('never quiz or test')
    expect(sys).toContain('never assign exercises')
    expect(sys).toContain('[[id]]')
    expect(sys).toContain('euclid — Euclid')
    expect(sys).toContain('incompleteness — ')
  })

  it('persona prompt speaks as the figure and embeds their record', () => {
    const sys = buildPersonaSystem('galileo')
    expect(sys).toContain(`You are ${byId.galileo.name} (`)
    expect(sys).toContain('first person')
    expect(sys).toContain('never quiz or test')
    expect(sys).toContain('Do not write [[galileo]] for yourself')
  })
})

describe('symposium', () => {
  it('system prompt seats both figures and keeps the persona rules', () => {
    const sys = buildSymposiumSystem('newton', 'leibniz')
    expect(sys).toContain(`You are ${byId.newton.name}`)
    expect(sys).toContain('symposium')
    expect(sys).toContain(byId.leibniz.name)
    expect(sys).toContain('never quiz or test')
    expect(sys).toContain('first person')
  })

  it('replays own turns as assistant and attributes everyone else', () => {
    const events = [
      { who: 'user', text: 'Who invented the calculus?' },
      { who: 'newton', text: 'The method of fluxions was mine in 1666.', blocks: [{ type: 'text', text: 'The method of fluxions was mine in 1666.' }] },
      { who: 'leibniz', text: 'And the calculus the world uses is written in my characters.' },
      { who: 'user', text: 'Can you both be right?' },
    ]
    const msgs = symposiumMessages(events, 'newton', ['newton', 'leibniz'])
    expect(msgs[0]).toEqual({ role: 'user', content: 'The questioner says: Who invented the calculus?' })
    expect(msgs[1].role).toBe('assistant')
    expect(msgs[1].content).toEqual(events[1].blocks)
    expect(msgs[2]).toEqual({
      role: 'user',
      content: `${byId.leibniz.name} says: And the calculus the world uses is written in my characters.`,
    })
    expect(msgs[3].content).toContain('The questioner says: Can you both be right?')
    const cue = msgs[msgs.length - 1]
    expect(cue.role).toBe('user')
    expect(cue.content).toContain('<records>')
    expect(cue.content).toContain('your turn')
  })

  it('falls back to text when a turn has no stored blocks', () => {
    const msgs = symposiumMessages([{ who: 'leibniz', text: 'Calculemus.' }], 'leibniz', [])
    expect(msgs[0]).toEqual({ role: 'assistant', content: 'Calculemus.' })
  })
})

describe('citedIds', () => {
  it('extracts canon ids in order, deduped, ignoring unknowns', () => {
    expect(citedIds('so [[gauss]] read [[euler]], and [[gauss]] but not [[zeus]]')).toEqual([
      'gauss',
      'euler',
    ])
  })
  it('extracts idea ids alongside figures', () => {
    expect(citedIds('where [[zero]] meets [[brahmagupta]]')).toEqual(['zero', 'brahmagupta'])
  })
  it('tolerates empty input', () => {
    expect(citedIds('')).toEqual([])
    expect(citedIds(null)).toEqual([])
  })
})

describe('contextIds', () => {
  it('finds figures named mid-sentence', () => {
    const ids = contextIds('Did Riemann ever read Gauss?')
    expect(ids).toContain('riemann')
    expect(ids).toContain('gauss')
  })

  it('puts persona and selection first, and keeps last-reply subjects', () => {
    const ids = contextIds('what about his geometry?', {
      personaId: 'euclid',
      selectedId: 'galileo',
      lastReply: 'That was [[gauss]] at his sharpest.',
    })
    expect(ids.slice(0, 3)).toEqual(['euclid', 'galileo', 'gauss'])
  })

  it('surfaces idea records for idea-shaped questions', () => {
    const ids = contextIds('what is incompleteness really about?')
    expect(ids).toContain('incompleteness')
  })

  it('caps the record set at 9', () => {
    const ids = contextIds('euclid gauss euler newton leibniz riemann cantor hilbert godel turing', {})
    expect(ids.length).toBeLessThanOrEqual(9)
  })
})

describe('buildUserTurn', () => {
  it('wraps records ahead of the question, or passes the bare question', () => {
    const wrapped = buildUserTurn('Who was Gauss?', ['gauss'])
    expect(wrapped).toMatch(/^<records>\n### Gauss/)
    expect(wrapped).toMatch(/Who was Gauss\?$/)
    expect(buildUserTurn('hello', [])).toBe('hello')
  })

  it('serializes idea ids as idea records', () => {
    const wrapped = buildUserTurn('Tell me about zero.', ['zero'])
    expect(wrapped).toContain('The idea: Place-value & zero')
  })
})

describe('parseMarkers', () => {
  it('plain text passes through as one segment', () => {
    expect(parseMarkers('no figures here')).toEqual([{ type: 'text', text: 'no figures here' }])
  })

  it('renders canon markers as chips between text', () => {
    expect(parseMarkers('[[newton]] answered [[zeno]].')).toEqual([
      { type: 'chip', id: 'newton' },
      { type: 'text', text: ' answered ' },
      { type: 'chip', id: 'zeno' },
      { type: 'text', text: '.' },
    ])
  })

  it('renders idea markers as chips too', () => {
    expect(parseMarkers('[[incompleteness]] ends it.')).toEqual([
      { type: 'chip', id: 'incompleteness' },
      { type: 'text', text: ' ends it.' },
    ])
  })

  it('leaves unknown ids as literal text', () => {
    expect(parseMarkers('by [[zeus]]!')).toEqual([
      { type: 'text', text: 'by ' },
      { type: 'text', text: '[[zeus]]' },
      { type: 'text', text: '!' },
    ])
  })

  it('hides a half-streamed trailing marker only while streaming', () => {
    expect(parseMarkers('as [[eucl', { streaming: true })).toEqual([{ type: 'text', text: 'as ' }])
    expect(parseMarkers('as [', { streaming: true })).toEqual([{ type: 'text', text: 'as ' }])
    expect(parseMarkers('as [[eucl')).toEqual([{ type: 'text', text: 'as [[eucl' }])
  })

  it('completed markers still render while streaming continues', () => {
    expect(parseMarkers('[[euler]] then [[gau', { streaming: true })).toEqual([
      { type: 'chip', id: 'euler' },
      { type: 'text', text: ' then ' },
    ])
  })
})

describe('chipName', () => {
  it('resolves across both atlases', () => {
    expect(chipName('euler')).toBe('Euler')
    expect(chipName('zero')).toBe('Place-value & zero')
    expect(chipName('nope')).toBe('nope')
  })
})
