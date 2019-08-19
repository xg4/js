import _ from 'lodash'
import {
  _toString,
  isFunction,
  isStatic,
  isPrimitive,
  isObject,
  isObjectLike,
  isPlainObject
} from '../src/validate'

describe('validate', () => {
  test('is plain object', () => {
    expect(isPlainObject(null)).toBeFalsy()
    expect(isPlainObject(undefined)).toBeFalsy()
    expect(isPlainObject(123)).toBeFalsy()
    expect(isPlainObject('x')).toBeFalsy()
    expect(isPlainObject(false)).toBeFalsy()
    expect(isPlainObject(Symbol(''))).toBeFalsy()
    expect(isPlainObject([])).toBeFalsy()
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(/\d/)).toBeFalsy()
    expect(isPlainObject(() => {})).toBeFalsy()
    expect(isPlainObject(class X {})).toBeFalsy()
  })

  test('is object like', () => {
    expect(isObjectLike(null)).toBeFalsy()
    expect(isObjectLike(undefined)).toBeFalsy()
    expect(isObjectLike(123)).toBeFalsy()
    expect(isObjectLike('x')).toBeFalsy()
    expect(isObjectLike(false)).toBeFalsy()
    expect(isObjectLike(Symbol(''))).toBeFalsy()
    expect(isObjectLike([])).toBeTruthy()
    expect(isObjectLike({})).toBeTruthy()
    expect(isObjectLike(/\d/)).toBeTruthy()
    expect(isObjectLike(() => {})).toBeFalsy()
    expect(isObjectLike(class X {})).toBeFalsy()
  })

  test('is object', () => {
    expect(isObject(null)).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject(123)).toBeFalsy()
    expect(isObject('x')).toBeFalsy()
    expect(isObject(false)).toBeFalsy()
    expect(isObject(Symbol(''))).toBeFalsy()
    expect(isObject([])).toBeTruthy()
    expect(isObject({})).toBeTruthy()
    expect(isObject(/\d/)).toBeTruthy()
    expect(isObject(() => {})).toBeTruthy()
    expect(isObject(class X {})).toBeTruthy()

    // lodash
    const values = [
      null,
      undefined,
      123,
      'string',
      true,
      Symbol('symbol'),
      [],
      {},
      /RegExp/,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function() {},
      class {}
    ]
    values.forEach(value => expect(isObject(value)).toEqual(_.isObject(value)))
  })

  test('is static', () => {
    expect(isStatic(null)).toBeTruthy()
    expect(isStatic(undefined)).toBeTruthy()
    expect(isStatic(123)).toBeTruthy()
    expect(isStatic('x')).toBeTruthy()
    expect(isStatic(false)).toBeTruthy()
    expect(isStatic(Symbol(''))).toBeFalsy()
    expect(isStatic([])).toBeFalsy()
    expect(isStatic({})).toBeFalsy()
    expect(isStatic(/\d/)).toBeFalsy()
    expect(isStatic(() => {})).toBeFalsy()
    expect(isStatic(class X {})).toBeFalsy()
  })

  test('is primitive', () => {
    expect(isPrimitive(null)).toBeTruthy()
    expect(isPrimitive(undefined)).toBeTruthy()
    expect(isPrimitive(123)).toBeTruthy()
    expect(isPrimitive('x')).toBeTruthy()
    expect(isPrimitive(false)).toBeTruthy()
    expect(isPrimitive(Symbol(''))).toBeTruthy()
    expect(isPrimitive([])).toBeFalsy()
    expect(isPrimitive({})).toBeFalsy()
    expect(isPrimitive(/\d/)).toBeFalsy()
    expect(isPrimitive(() => {})).toBeFalsy()
    expect(isPrimitive(class X {})).toBeFalsy()
  })

  test('toString', () => {
    expect(_toString(null)).toBe('Null')
    expect(_toString(undefined)).toBe('Undefined')
    expect(_toString(123)).toBe('Number')
    expect(_toString('x')).toBe('String')
    expect(_toString(true)).toBe('Boolean')
    expect(_toString(Symbol(''))).toBe('Symbol')
    expect(_toString([])).toBe('Array')
    expect(_toString({})).toBe('Object')
    expect(_toString(/\d/)).toBe('RegExp')
    expect(_toString(() => {})).toBe('Function')
    expect(_toString(class X {})).toBe('Function')
  })

  test('is function', () => {
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
    expect(isFunction(123)).toBeFalsy()
    expect(isFunction('x')).toBeFalsy()
    expect(isFunction(true)).toBeFalsy()
    expect(isFunction(Symbol(''))).toBeFalsy()
    expect(isFunction([])).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction(/\d/)).toBeFalsy()
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction(class X {})).toBeTruthy()
  })
})
