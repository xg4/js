import {
  sleep,
  cached,
  camelize,
  hyphenate,
  capitalize,
  randomInt,
  uniqueArray,
  hasOwn,
  extend
} from '../src/utils'

describe('utils', () => {
  test('has own hasOwnProperty', () => {
    const foo = { a: 1, b: 2 }
    expect(hasOwn(foo, 'a')).toBeTruthy()
    expect(hasOwn(foo, 'toString')).toBeFalsy()
    expect(hasOwn(foo, 'b')).toBeTruthy()
    expect(foo.toString()).toBe('[object Object]')
  })

  test('extend', () => {
    const foo = { a: 1 }
    const bar = { b: 2, c: 3 }
    expect(extend(foo, bar)).toStrictEqual({ a: 1, b: 2, c: 3 })
  })

  test('unique array', () => {
    expect(uniqueArray([1, 2, 3, 4, 123, 1, 2, 3])).toStrictEqual([
      1,
      2,
      3,
      4,
      123
    ])
  })

  test('random int', () => {
    expect(randomInt(1, 2)).toBeLessThanOrEqual(2)
    expect(randomInt(1, 2)).toBeGreaterThanOrEqual(1)

    expect(randomInt(-10, 100)).toBeLessThanOrEqual(100)
    expect(randomInt(-10, 100)).toBeGreaterThanOrEqual(-10)
  })

  test('sleep', () => {
    expect.assertions(1)
    return sleep(200).then(data => {
      expect(data).toBeUndefined()
    })
  })

  test('sleep 2', () => {
    expect.assertions(1)
    return expect(sleep(200)).resolves.toBeUndefined()
  })

  test('cached', () => {
    const _camelize = cached(camelize)
    expect(_camelize('a-b-c-d-e')).toBe('aBCDE')
    expect(_camelize('foo-bar')).toBe('fooBar')

    const _hyphenate = cached(hyphenate)
    expect(_hyphenate('aBCDE')).toBe('a-b-c-d-e')
    expect(_hyphenate('fooBar')).toBe('foo-bar')

    const _capitalize = cached(capitalize)
    expect(_capitalize('aBCDE')).toBe('ABCDE')
    expect(_capitalize('fooBar')).toBe('FooBar')
  })

  test('camelize', () => {
    expect(camelize('a-b-c-d-e')).toBe('aBCDE')
    expect(camelize('foo-bar')).toBe('fooBar')
  })

  test('hyphenate', () => {
    expect(hyphenate('aBCDE')).toBe('a-b-c-d-e')
    expect(hyphenate('fooBar')).toBe('foo-bar')
  })

  test('capitalize', () => {
    expect(capitalize('aBCDE')).toBe('ABCDE')
    expect(capitalize('fooBar')).toBe('FooBar')
  })
})
