import { StackNode } from './stackNode'

describe('Stack Node', () => {
  test('Should StackNode by default point to null', () => {
    const sut = new StackNode('any', null)
    expect(sut.next).toBeNull()
  })

  test('Should StackNode store value provided', () => {
    const sut = new StackNode('any', null)
    expect(sut.value).toBe('any')
  })
})