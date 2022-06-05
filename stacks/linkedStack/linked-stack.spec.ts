import { LinkedStack } from './linkedStack'

describe('Linked Stack', () => {
  test('Should method push have no return', () => {
    const sut = new LinkedStack()
    expect(sut.push('any')).toBe(undefined)
  })

  test('Should method peek return undefined if no value are provided to Stack', () => {    
    const sut = new LinkedStack()
    expect(sut.peek()).toBe(undefined)
  })
})