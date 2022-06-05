import { StackNode } from './stackNode'

describe('Stack Node', () => {
  test('Should StackNode by default point to null', () => {
    const sut = new StackNode('any', null)
    expect(sut.next).toBeNull()
  })
})