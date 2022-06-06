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

  test('Should StackNode store a next StackNode when provided', () => {
    const anotherStackNode = new StackNode('other_value', null)
    const sut = new StackNode('any', anotherStackNode)
    expect(sut.next).toEqual(anotherStackNode)
    expect(sut.next.value).toBe('other_value')
    expect(sut.next.next).toBe(null)
  })

  test('Should StackNode be possible to overwrite a next StackNode', () => {
    const overwriteStackNode = new StackNode('another_value', null)
    const anotherStackNode = new StackNode('other_value', null)
    const sut = new StackNode('any', anotherStackNode)
    expect(sut.next).toEqual(anotherStackNode)
    expect(sut.next.value).toBe('other_value')
    expect(sut.next.next).toBe(null)
    sut.next = overwriteStackNode
    expect(sut.next).toEqual(overwriteStackNode)
    expect(sut.next.value).toBe('another_value')
    expect(sut.next.next).toBe(null)
  })
})
