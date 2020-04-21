import { hasKey } from '../'

describe('utils', () => {
  it('should check to see if an object has a key', () => {
    const object = {
      test: 'should exist',
    }

    expect(hasKey(object, 'test')).toBeTruthy()
    expect(hasKey(object, 'nokey')).toBeFalsy()
  })
})
