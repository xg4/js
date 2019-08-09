import '../src/this'

describe('bind this', () => {
  test('call', () => {
    function hello(this: any) {
      return this && this.name
    }
    expect(hello()).toBeUndefined()

    const foo = {
      name: 'foo'
    }
    expect(hello._call(foo)).toEqual(hello.call(foo))

    const bar = {
      name: 'bar'
    }
    expect(hello._call(bar)).toEqual(hello.call(bar))
  })

  test('apply', () => {
    function hello(this: any) {
      return this && this.name
    }
    expect(hello()).toBeUndefined()

    const foo = {
      name: 'foo'
    }
    expect(hello._apply(foo)).toEqual(hello.apply(foo))

    const bar = {
      name: 'bar'
    }
    expect(hello._apply(bar)).toEqual(hello.apply(bar))
  })

  test('bind', () => {
    function hello(this: any) {
      return this && this.name
    }
    expect(hello()).toBeUndefined()

    const foo = {
      name: 'foo'
    }

    const fooHello = hello._bind(foo)
    const fooHelloNative = hello.bind(foo)
    expect(fooHello()).toEqual(fooHelloNative())

    const bar = {
      name: 'bar'
    }
    const barHello = hello._bind(bar)
    const barHelloNative = hello.bind(bar)
    expect(barHello()).toEqual(barHelloNative())
  })
})
