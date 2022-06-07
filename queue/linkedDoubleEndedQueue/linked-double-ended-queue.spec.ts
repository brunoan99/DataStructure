import { LinkedDoubleEndedQueue } from './LinkedDoubleEndedQueue'

const makeSut = (): LinkedDoubleEndedQueue<unknown> => new LinkedDoubleEndedQueue()

describe('Linked Double Ended Queue', () => {
  test('Should enqueue have no return', () => {
    const sut = makeSut()
    expect(sut.enqueue('any')).toBe(undefined)
  })

  test('Should enqueueFront have no return', () => {
    const sut = makeSut()
    expect(sut.enqueueFront('any')).toBe(undefined)
  })

  test('Should dequeue have no return if no value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.dequeue()).toBe(undefined)
  })

  test('Should dequeueBack have no return if no value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.dequeueBack()).toBe(undefined)
  })

  test('Should peek have no return if no value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
  })
})