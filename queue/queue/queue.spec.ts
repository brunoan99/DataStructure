import { Queue } from './Queue'

describe('Queue', () => {
  test('Should method enqueue have no return', () => {
    const sut = new Queue()
    expect(sut.enqueue('any')).toBe(undefined)
  })

  test('Should method dequeue have no return if no value was provided to enqueue method', () => {
    const sut = new Queue()
    expect(sut.dequeue()).toBe(undefined)
  })

  test('Should method peek have no return if no value was provided to enqueue method', () => {
    const sut = new Queue()
    expect(sut.peek()).toBe(undefined)
  })
})