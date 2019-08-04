import '../src'

describe('bind this', () => {
  test('call', () => {
    function hello() {
      return this && this.name
    }
    const foo = {
      name: 'foo'
    }
    const bar = {
      name: 'bar'
    }
    expect(hello()).toBeUndefined()

    expect(hello._call(foo)).toEqual(hello.call(foo))

    expect(hello._call(bar)).toEqual(hello.call(bar))
  })
})
