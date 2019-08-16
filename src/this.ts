interface Function {
  _apply(this: Function, thisArg: any, argArray?: any): any

  _call(this: Function, thisArg: any, ...argArray: any[]): any

  _bind(this: Function, thisArg: any, ...argArray: any[]): any
}

// eslint-disable-next-line no-extend-native
Function.prototype._call = function(context: any = window, ...args: any[]) {
  // 生成唯一的 key ，避免同名属性被覆盖
  const key = Symbol('fn key')
  // 绑定 ctx 的 this
  context[key] = this
  // 获得结果
  const result = context[key](...args)
  // 删除 ctx 上的函数
  delete context[key]
  return result
}

// eslint-disable-next-line no-extend-native
Function.prototype._apply = function(context: any = window, args: any[] = []) {
  const key = Symbol('fn key')
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}

// eslint-disable-next-line no-extend-native
Function.prototype._bind = function(context: any = window, ...args: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const fn = this
  return function F(this: any, ...argArray: any[]) {
    if (this instanceof F) {
      // eslint-disable-next-line new-cap
      return new (fn as FunctionConstructor)(...args, ...argArray)
    } else {
      return fn._apply(context, [...args, ...argArray])
    }
  }
}
