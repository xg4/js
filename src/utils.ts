/**
 * @description 检查是否是自身属性，还是原型链上的属性
 * @param context
 * @param key
 */
export function hasOwn(context: any, key: string) {
  return Object.prototype.hasOwnProperty.call(context, key)
}

/**
 * @description 将属性混合到目标对象中
 * @param a
 * @param b
 */
export function extend<T, P>(a: T, b: P): T & P {
  const result: Partial<T & P> = {}
  for (const prop in a) {
    if (hasOwn(a, prop)) {
      ;(result as T)[prop] = a[prop]
    }
  }
  for (const prop in b) {
    if (hasOwn(b, prop)) {
      ;(result as P)[prop] = b[prop]
    }
  }
  return result as T & P
}

/**
 * @description
 * @param arr
 */
export function uniqueArray(arr: any[]) {
  return [...new Set(arr)]
}

/**
 * @description 随机一个区间整数
 * @param min [Number] 区间最小值
 * @param max [Number] 区间最大值
 */
export function randomInt(min: number, max: number) {
  if (min > max) {
    ;[min, max] = [max, min]
  }
  return Math.floor(min + Math.random() * (max - min + 1))
}

/**
 * @description 休眠一定毫秒之后继续执行
 * @param ms [Number]
 */
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
