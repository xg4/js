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
