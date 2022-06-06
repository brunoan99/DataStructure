import { Queue } from './Queue'

describe('Queue', () => {
  test('Should method enqueue have no return', () => {
    const sut = new Queue()
    expect(sut.enqueue('any')).toBe(undefined)
  })
})