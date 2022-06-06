import { DoubleEndedQueue } from './DoubleEndedQueue'

const makeSut = (): DoubleEndedQueue<unknown> => new DoubleEndedQueue()

describe('Double Ended Queue', () => {
  test('Should enqueueFront have no return', () => {
    const sut = makeSut()
    expect(sut.enqueueFront('any')).toBe(undefined)
  })

  test('Should dequeueBack have no return if no value was provided to DoubleEndedQueue', () => {
    const sut = makeSut()
    expect(sut.dequeueBack()).toBe(undefined)
  })

  test('Should searchBack return -1 if value was not found at DoubleEndedQueue', () => {
    const sut = makeSut()
    expect(sut.searchBack('any')).toBe(-1)
  })

  test('Should dequeueBack return a value if it was provided to DoubleEndedQueue, in FIFO order', () => {
    const listToEnqueue = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    for (const item of listToEnqueue) {
      sut.enqueue(item)
    }
    for (const itemToDequeue of listToEnqueue.reverse()) {
      expect(sut.dequeueBack()).toBe(itemToDequeue)
    }
    expect(sut.dequeueBack()).toBe(undefined)
  })
})