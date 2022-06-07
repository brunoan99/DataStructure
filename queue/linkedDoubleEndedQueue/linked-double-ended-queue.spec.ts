import { LinkedDoubleEndedQueue } from './LinkedDoubleEndedQueue'

const makeSut = (): LinkedDoubleEndedQueue<unknown> => new LinkedDoubleEndedQueue()

describe('Linked Double Ended Queue', () => {
  test('Should enqueue have no return', () => {
    const sut = makeSut()
    expect(sut.enqueue('any')).toBe(undefined)
  })

  test('Should enqueueFron have no return', () => {
    const sut = makeSut()
    expect(sut.enqueueFront('any')).toBe(undefined)
  })
})