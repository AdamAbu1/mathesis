import { describe, it, expect } from 'vitest'
import { byId } from '../src/data.js'
import {
  sessionFromMessages,
  wrapLines,
  transcriptText,
  tweetUrl,
  SITE,
} from '../src/broadsheet.js'

const symp = { a: 'newton', b: 'leibniz' }
const messages = [
  { role: 'user', question: 'Is suffering good for us?' },
  { role: 'assistant', speakerId: 'newton', text: 'Let us first ask what [[leibniz]] means by good.', blocks: [] },
  { role: 'user', question: 'Answer plainly, both of you.' },
  { role: 'assistant', speakerId: 'leibniz', text: 'Plainly then: yes.', blocks: [] },
  { role: 'assistant', speakerId: 'newton', text: '', streaming: true }, // dropped
]

describe('sessionFromMessages', () => {
  it('extracts question, attributed turns, and strips markers', () => {
    const s = sessionFromMessages(messages, symp)
    expect(s.question).toBe('Is suffering good for us?')
    expect(s.turns).toEqual([
      { who: 'newton', text: `Let us first ask what ${byId.leibniz.name} means by good.` },
      { who: 'user', text: 'Answer plainly, both of you.' },
      { who: 'leibniz', text: 'Plainly then: yes.' },
    ])
    expect(s.a).toBe('newton')
    expect(s.b).toBe('leibniz')
  })
})

describe('wrapLines', () => {
  const measure = s => s.length * 10 // 10px per char stub
  it('wraps at the width without splitting words', () => {
    expect(wrapLines('alpha beta gamma delta', 120, measure)).toEqual([
      'alpha beta',
      'gamma delta',
    ])
  })
  it('a word wider than the line stands alone', () => {
    expect(wrapLines('tiny extraordinarily tiny', 120, measure)).toEqual([
      'tiny',
      'extraordinarily',
      'tiny',
    ])
  })
  it('keeps short text on one line', () => {
    expect(wrapLines('brief', 120, measure)).toEqual(['brief'])
  })
})

describe('transcript & tweet', () => {
  const s = sessionFromMessages(messages, symp)
  it('transcript carries names, question, attributed turns, and the site', () => {
    const t = transcriptText(s)
    expect(t).toContain('MATHESIS · A SYMPOSIUM')
    expect(t).toContain('“Is suffering good for us?”')
    expect(t).toContain('NEWTON — Let us first ask')
    expect(t).toContain('THE QUESTIONER — Answer plainly')
    expect(t).toContain(SITE)
  })
  it('tweet url embeds question, names, and link', () => {
    const u = tweetUrl(s)
    expect(u).toContain('twitter.com/intent/tweet')
    expect(decodeURIComponent(u)).toContain('Newton & Leibniz')
    expect(decodeURIComponent(u)).toContain(SITE)
  })
})
