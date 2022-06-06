import { Queue } from './Queue'

describe('Queue', () => {
  test('Should method enqueue have no return', () => {
    const sut = new Queue()
    expect(sut.enqueue('any')).toBe(undefined)
  })

  test('Should method dequeue return undefined if no value are provided to enqueue', () => {
    const sut = new Queue()
    expect(sut.dequeue()).toBe(undefined)
  })
})