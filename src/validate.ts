/**
 * @description
 * @param value
 */
export function _toString(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * @description
 * @param x
 */
export function isFunction(x: any): x is Function {
  return _toString(x) === 'Function'
}

/**
 * @description 检测数据是不是除了 symbol 外的原始数据
 */
export function isStatic(x: any) {
  const type = typeof x
  return (
    type === 'string' ||
    type === 'number' ||
    type === 'boolean' ||
    type === 'undefined' ||
    x === null
  )
}

/**
 * @description 检测数据是不是原始数据
 * @param x
 */
export function isPrimitive(x: any) {
  return isStatic(x) || typeof x === 'symbol'
}

/**
 * @description 判断数据是不是引用类型的数据 (例如： Array, Function, Object, Regexp, new Number(0),以及 new String(‘’))
 * @param x
 */
export function isObject(x: any) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

/**
 * @description 检查 x 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 “object”
 * @param x
 */
export function isObjectLike(x: any) {
  return x !== null && typeof x === 'object'
}

/**
 * @description 判断数据是不是 Object 类型的数据
 * @param x
 */
export function isPlainObject(x: any) {
  return _toString(x) === 'Object'
}
