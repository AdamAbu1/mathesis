import { describe, it, expect } from 'vitest'
import {
  speakableText,
  nextSentences,
  flushRemainder,
  voiceProfileFor,
  isFemaleVoice,
  elevenVoiceFor,
  accentPool,
  VOICE_REGISTER,
} from '../src/voice.js'

describe('speakableText', () => {
  it('replaces canon markers with names and collapses whitespace', () => {
    expect(speakableText('[[euclid]] taught [[archimedes]].\n\nBoth mattered.')).toBe(
      'Euclid taught Archimedes. Both mattered.',
    )
  })
  it('leaves unknown markers literal', () => {
    expect(speakableText('by [[zeus]]!')).toBe('by [[zeus]]!')
  })
})

describe('nextSentences (streaming chunker)', () => {
  it('emits nothing for an incomplete sentence', () => {
    const r = nextSentences('The unexamined life is not', 0)
    expect(r.sentences).toEqual([])
    expect(r.offset).toBe(0)
  })

  it('emits a completed sentence once trailing space arrives, tracking offset', () => {
    const text = 'The unexamined life is not worth living. And what of'
    const r = nextSentences(text, 0)
    expect(r.sentences).toEqual(['The unexamined life is not worth living.'])
    expect(text.slice(r.offset)).toBe('And what of')
  })

  it('merges a too-short sentence into the next', () => {
    const text = 'Quite so. But what do you mean by justice, friend? More'
    const r = nextSentences(text, 0)
    expect(r.sentences).toEqual(['Quite so. But what do you mean by justice, friend?'])
  })

  it('resumes from a prior offset without re-emitting', () => {
    const text = 'First complete thought arrives here. Second complete thought arrives here too. '
    const first = nextSentences(text, 0)
    const again = nextSentences(text, first.offset)
    expect(first.sentences.length + again.sentences.length).toBe(2)
    expect(again.sentences).not.toContain(first.sentences[0])
  })

  it('does not split decimal numbers', () => {
    const r = nextSentences('The ratio is 3.5 in every case he examined, no less. Next', 0)
    expect(r.sentences[0]).toContain('3.5')
  })
})

describe('flushRemainder', () => {
  it('returns the unspoken tail at stream end', () => {
    expect(flushRemainder('Said part. Unsaid tail without punctuation', 11)).toBe(
      'Unsaid tail without punctuation',
    )
  })
  it('ignores trivial leftovers', () => {
    expect(flushRemainder('All spoken. ', 12)).toBe('')
  })
})

describe('voice casting', () => {
  it('system profiles are deterministic and within range', () => {
    const a = voiceProfileFor('euclid')
    expect(voiceProfileFor('euclid')).toEqual(a)
    expect(a.pitch).toBeGreaterThanOrEqual(0.85)
    expect(a.pitch).toBeLessThanOrEqual(1.25)
    expect(a.rate).toBeGreaterThanOrEqual(0.9)
    expect(a.rate).toBeLessThanOrEqual(1.04)
  })

  it('distinct thinkers usually get distinct profiles', () => {
    expect(voiceProfileFor('euclid')).not.toEqual(voiceProfileFor('galileo'))
  })

  it('the guide and the canon women cast female voices', () => {
    expect(isFemaleVoice(null)).toBe(true)
    expect(isFemaleVoice('noether')).toBe(true)
    expect(isFemaleVoice('euclid')).toBe(false)
  })

  it('elevenVoiceFor matches gender and is deterministic', () => {
    const voices = [
      { voice_id: 'v1', labels: { gender: 'male' } },
      { voice_id: 'v2', labels: { gender: 'female' } },
      { voice_id: 'v3', labels: { gender: 'male' } },
    ]
    const pick = elevenVoiceFor('euclid', voices)
    expect(['v1', 'v3']).toContain(pick.voice_id)
    expect(elevenVoiceFor('euclid', voices)).toEqual(pick)
    expect(elevenVoiceFor('noether', voices).voice_id).toBe('v2')
  })

  it('falls back to the whole pool when no gender matches', () => {
    const voices = [{ voice_id: 'v9', labels: {} }]
    expect(elevenVoiceFor('noether', voices).voice_id).toBe('v9')
  })

  it('ancients prefer aged voices over young ones', () => {
    const voices = [
      { voice_id: 'a1', labels: { gender: 'male', age: 'young' } },
      { voice_id: 'a2', labels: { gender: 'male', age: 'old' } },
    ]
    expect(elevenVoiceFor('euclid', voices).voice_id).toBe('a2')
    expect(elevenVoiceFor('liuhui', voices).voice_id).toBe('a2')
  })

  it('enlightenment thinkers avoid young voices when older exist', () => {
    const voices = [
      { voice_id: 'b1', labels: { gender: 'male', age: 'young' } },
      { voice_id: 'b2', labels: { gender: 'male', age: 'middle_aged' } },
    ]
    expect(elevenVoiceFor('euler', voices).voice_id).toBe('b2')
  })

  it('20th-century thinkers may cast young voices', () => {
    const voices = [{ voice_id: 'c1', labels: { gender: 'female', age: 'young' } }]
    expect(elevenVoiceFor('mirzakhani', voices).voice_id).toBe('c1')
  })

  it('falls back to any age when the library has no aged voices', () => {
    const voices = [{ voice_id: 'd1', labels: { gender: 'male', age: 'young' } }]
    expect(elevenVoiceFor('euclid', voices).voice_id).toBe('d1')
  })

  it('canon Americans lock to American voices', () => {
    const voices = [
      { voice_id: 'e1', labels: { gender: 'male', age: 'middle_aged', accent: 'british' } },
      { voice_id: 'e2', labels: { gender: 'male', age: 'middle_aged', accent: 'american' } },
    ]
    expect(elevenVoiceFor('shannon', voices).voice_id).toBe('e2')
  })

  it('British Isles thinkers pin British accents even from a tiny bench', () => {
    const voices = [
      { voice_id: 'f1', labels: { gender: 'male', age: 'middle_aged', accent: 'american' } },
      { voice_id: 'f2', labels: { gender: 'male', age: 'middle_aged', accent: 'british' } },
    ]
    expect(elevenVoiceFor('newton', voices).voice_id).toBe('f2')
  })

  it('tradition accents match when the library offers them', () => {
    const voices = [
      { voice_id: 'g1', labels: { gender: 'male', age: 'old', accent: 'american' } },
      { voice_id: 'g2', labels: { gender: 'male', age: 'old', accent: 'chinese' } },
    ]
    expect(elevenVoiceFor('liuhui', voices).voice_id).toBe('g2')
  })

  it('old-world non-American preference needs a bench of three', () => {
    const am = a => ({ voice_id: a, labels: { gender: 'male', age: 'old', accent: 'american' } })
    const br = a => ({ voice_id: a, labels: { gender: 'male', age: 'old', accent: 'british' } })
    const thin = [am('h1'), am('h2'), br('h3'), br('h4')]
    expect(accentPool('euclid', thin)).toEqual(thin) // 2 accented — guard holds
    const rich = [am('h1'), br('h3'), br('h4'), br('h5')]
    expect(accentPool('euclid', rich).every(v => v.labels.accent === 'british')).toBe(true)
  })

  it('the guide is placeless — accent never narrows her pool', () => {
    const voices = [
      { voice_id: 'i1', labels: { gender: 'female', accent: 'british' } },
      { voice_id: 'i2', labels: { gender: 'female', accent: 'american' } },
    ]
    expect(accentPool(null, voices)).toEqual(voices)
  })
})

describe('voice register addendum', () => {
  it('asks for short spoken turns', () => {
    expect(VOICE_REGISTER).toContain('spoken conversation')
    expect(VOICE_REGISTER).toContain('eighty words')
  })
})
