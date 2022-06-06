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
})