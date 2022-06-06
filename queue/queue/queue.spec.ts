import { Queue } from './Queue'

const makeSut = (): Queue<unknown> => new Queue()

describe('Queue', () => {
  test('Should method enqueue have no return', () => {
    const sut = makeSut()
    expect(sut.enqueue('any')).toBe(undefined)
  })

  test('Should method dequeue have no return if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.dequeue()).toBe(undefined)
  })

  test('Should method peek have no return if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
  })

  test('Should method size return 0 if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.size()).toBe(0)
  })

  test('Should method sotrage return a empty list if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })
})