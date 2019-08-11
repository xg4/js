import { sleep, cached, camelize, hyphenate, capitalize } from '../src/utils'

describe('utils', () => {
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
