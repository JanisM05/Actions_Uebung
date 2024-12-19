import { strict as assert } from 'assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should return 3 for 1 + 2', () => {
    // Korrigieren Sie den Test
    assert.equal(sum(1, 2), 3)
  })
})

describe('sum', () => {
  it('should handle decimal numbers', () => {
    assert.equal(sum(1.5, 2.5), 4)
  })

  it('should handle negative numbers', () => {
    assert.equal(sum(-1, -2), -3)
  })
})
