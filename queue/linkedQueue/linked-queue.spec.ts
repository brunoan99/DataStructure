import { LinkedQueue } from './LinkedQueue'

const makeSut = (): LinkedQueue<unknown> => new LinkedQueue()

describe('Linked Queue', () => {
  test('Should enqueue have no return', () => {
    const sut = makeSut()
    expect(sut.enqueue('any')).toBeUndefined()
  })

  test('Should peek return undevined if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.peek()).toBeUndefined()
  })
})