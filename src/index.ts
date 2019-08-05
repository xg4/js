interface Function {
  _call(this: Function, thisArg: any, ...argArray: any[]): any

  _apply(this: Function, thisArg: any, argArray?: any): any

  _bind(this: Function, thisArg: any, ...argArray: any[]): any
}

// eslint-disable-next-line no-extend-native
Function.prototype._call = function(context = window, ...args) {
  // 生成唯一的 key ，避免其他属性被覆盖
  const key = Symbol('fn key')
  // 绑定 ctx 的 this
  context[key] = this
  // 获得结果
  const result = context[key](...args)
  // 删除 ctx 上的函数
  delete context[key]
  return result
}
