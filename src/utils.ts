export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * @description 记忆函数 缓存函数的运算结果
 * @param fn [Function]
 */
export function cached(fn: Function) {
  const cache = Object.create(null)
  return function(str: any) {
    return cache[str] || (cache[str] = fn(str))
  }
}

/**
 * @description 连字符转驼峰命名 ab-cd-ef ==> abCdEf
 * @param str [String]
 */
export function camelize(str: string) {
  const camelizeRE = /-(\w)/g
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : ''
  })
}

/**
 * @description 驼峰命名转横线命名：拆分字符串，
 *              使用 - 相连，并且转换为小写，abCd ==> ab-cd
 * @param str [String]
 */
export function hyphenate(str: string) {
  const hyphenateRE = /\B([A-Z])/g
  return str.replace(hyphenateRE, '-$1').toLowerCase()
}

/**
 * @description 字符串首位大写 abc ==> Abc
 * @param str [String]
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
