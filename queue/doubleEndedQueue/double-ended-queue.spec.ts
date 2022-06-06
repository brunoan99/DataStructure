import { DoubleEndedQueue } from './DoubleEndedQueue'

const makeSut = (): DoubleEndedQueue<unknown> => new DoubleEndedQueue()

describe('Double Ended Queue', () => {
  test('Should enqueueFront have no return', () => {
    const sut = makeSut()
    expect(sut.enqueueFront('any')).toBe(undefined)
  })
})