import { LinkedStack } from './linkedStack'

describe('Linked Stack', () => {
  test('Should method push have no return', () => {
    const sut = new LinkedStack()
    expect(sut.push('any')).toBe(undefined)
  })
})