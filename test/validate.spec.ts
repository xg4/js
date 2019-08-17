import { _toString, isFunction } from '../src/validate'

describe('validate', () => {
  test('_toString', () => {
    expect(_toString([])).toBe('Array')
    expect(_toString({})).toBe('Object')
    expect(_toString(123)).toBe('Number')
    expect(_toString('foo')).toBe('String')
    expect(_toString(true)).toBe('Boolean')
    expect(_toString(/\d/g)).toBe('RegExp')
    expect(_toString(Symbol('toString'))).toBe('Symbol')
    expect(_toString(null)).toBe('Null')
    expect(_toString(undefined)).toBe('Undefined')
    expect(
      _toString(function() {
        return 'test'
      })
    ).toBe('Function')
  })

  test('is function', () => {
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
    expect(isFunction(123)).toBeFalsy()
    expect(isFunction('x')).toBeFalsy()
  })
})
