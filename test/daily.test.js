import { describe, it, expect } from 'vitest'
import { dailyPick } from '../src/DailyLine.jsx'
import { MATHEMATICIANS } from '../src/data.js'

describe('dailyPick', () => {
  it('is deterministic and wraps around the canon', () => {
    expect(dailyPick(0, MATHEMATICIANS)).toBe(MATHEMATICIANS[0])
    expect(dailyPick(MATHEMATICIANS.length, MATHEMATICIANS)).toBe(MATHEMATICIANS[0])
    expect(dailyPick(3, MATHEMATICIANS)).toBe(dailyPick(3, MATHEMATICIANS))
    expect(dailyPick(3, MATHEMATICIANS)).not.toBe(dailyPick(4, MATHEMATICIANS))
  })
  it('survives negative day indexes', () => {
    expect(dailyPick(-1, MATHEMATICIANS)).toBe(MATHEMATICIANS[MATHEMATICIANS.length - 1])
  })
})
