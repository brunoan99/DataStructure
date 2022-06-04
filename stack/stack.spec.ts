import { Stack } from './Stack'

describe('Stack', () => {
  test('Should method push have no return', () => {    
    const sut = new Stack()
    const returned = sut.push('any_value')
    expect(returned).toBe(undefined)
  })

  test('Should method peek return undefined if no value are provided to Stack', () => {    
    const sut = new Stack()
    const returned = sut.peek()
    expect(returned).toBe(undefined)
  })
})