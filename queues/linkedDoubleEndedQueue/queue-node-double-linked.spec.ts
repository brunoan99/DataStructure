import { QueueNodeDoubleLinked } from './QueueNodeDoubleLinked'

describe('Queue Node Double Linked', () => {
  test('Should QueueNodeDoubleLinked by default point next and previus to null', () => {
    const sut = new QueueNodeDoubleLinked('any')
    expect(sut.next).toBeNull()
    expect(sut.previus).toBeNull()
  })

  test('Should QueueNodeDoubleLinked store value provided', () => {
    const sut = new QueueNodeDoubleLinked('any', null)
    expect(sut.value).toBe('any')
  })

  test('Should QueueNodeDoubleLinked store a next QueueNodeDoubleLinked when provided', () => {
    const anotherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('another_value')
    const sut = new QueueNodeDoubleLinked('any', null, anotherQueueNodeDoubleLinked)
    expect(sut.next).toEqual(anotherQueueNodeDoubleLinked)
    expect(sut.next.value).toBe('another_value')
    expect(sut.next.next).toBe(null)
    expect(sut.next.previus).toBe(null)
    expect(sut.previus).toBe(null)
  })

  test('Should QueueNodeDoubleLinked store a previus QueueNodeDoubleLinked when provided', () => {
    const anotherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('another_value', null)
    const sut = new QueueNodeDoubleLinked('any', anotherQueueNodeDoubleLinked)
    expect(sut.previus).toEqual(anotherQueueNodeDoubleLinked)
    expect(sut.previus.value).toBe('another_value')
    expect(sut.previus.next).toBe(null)
    expect(sut.next).toBe(null)
  })

  test('Should QueueNodeDoubleLinked be possible to overwrite a next QueueNodeDoubleLinked', () => {
    const anotherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('another_value', null)
    const overwriteQueueNodeDoubleLinked = new QueueNodeDoubleLinked('other_value', null)
    const sut = new QueueNodeDoubleLinked('any', null, anotherQueueNodeDoubleLinked)
    expect(sut.next).toEqual(anotherQueueNodeDoubleLinked)
    expect(sut.next.value).toBe('another_value')
    expect(sut.next.next).toBe(null)
    sut.next = overwriteQueueNodeDoubleLinked
    expect(sut.next).toEqual(overwriteQueueNodeDoubleLinked)
    expect(sut.next.value).toBe('other_value')
    expect(sut.next.next).toBe(null)
  })

  test('Should QueueNodeDoubleLinked be possible to overwrite a previus QueueNodeDoubleLinked', () => {
    const overwriteQueueNodeDoubleLinked = new QueueNodeDoubleLinked('other_value', null)
    const anotherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('another_value', null)
    const sut = new QueueNodeDoubleLinked('any', anotherQueueNodeDoubleLinked)
    expect(sut.previus).toEqual(anotherQueueNodeDoubleLinked)
    expect(sut.previus.value).toBe('another_value')
    expect(sut.previus.previus).toBe(null)
    sut.previus = overwriteQueueNodeDoubleLinked
    expect(sut.previus).toEqual(overwriteQueueNodeDoubleLinked)
    expect(sut.previus.value).toBe('other_value')
    expect(sut.previus.previus).toBe(null)
  })

  test('Should QueueNodeDoubleLinked be possible to store both previus and next QueueNodeDoubleLinked when provided', () => {
    const anotherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('another_value')
    const otherQueueNodeDoubleLinked = new QueueNodeDoubleLinked('other_value')
    const sut = new QueueNodeDoubleLinked('any', anotherQueueNodeDoubleLinked, otherQueueNodeDoubleLinked)
    expect(sut.next).toEqual(otherQueueNodeDoubleLinked)
    expect(sut.next.next).toBe(null)
    expect(sut.next.previus).toBe(null)
    expect(sut.next.value).toBe('other_value')
    
    expect(sut.previus).toEqual(anotherQueueNodeDoubleLinked)
    expect(sut.previus.next).toBe(null)
    expect(sut.previus.previus).toBe(null)
    expect(sut.previus.value).toBe('another_value')
  })
})
