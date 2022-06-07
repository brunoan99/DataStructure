import { QueueNode } from './QueueNode'

describe('Stack Node', () => {
  test('Should StackNode by default point to null', () => {
    const sut = new QueueNode('any', null)
    expect(sut.next).toBeNull()
  })

  test('Should StackNode store value provided', () => {
    const sut = new QueueNode('any', null)
    expect(sut.value).toBe('any')
  })

  test('Should StackNode store a next StackNode when provided', () => {
    const anotherStackNode = new QueueNode('other_value', null)
    const sut = new QueueNode('any', anotherStackNode)
    expect(sut.next).toEqual(anotherStackNode)
    expect(sut.next.value).toBe('other_value')
    expect(sut.next.next).toBe(null)
  })

  test('Should StackNode be possible to overwrite a next StackNode', () => {
    const overwriteStackNode = new QueueNode('another_value', null)
    const anotherStackNode = new QueueNode('other_value', null)
    const sut = new QueueNode('any', anotherStackNode)
    expect(sut.next).toEqual(anotherStackNode)
    expect(sut.next.value).toBe('other_value')
    expect(sut.next.next).toBe(null)
    sut.next = overwriteStackNode
    expect(sut.next).toEqual(overwriteStackNode)
    expect(sut.next.value).toBe('another_value')
    expect(sut.next.next).toBe(null)
  })
})
