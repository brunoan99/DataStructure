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

  test('Should dequeue return undevined if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.dequeue()).toBeUndefined()
  })

  test('Should size return 0 if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.size()).toBe(0)
  })

  test('Should storage return a empty list if value was not provided', () => {
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })

  test('Should search return -1 if value was not found in LinkedQueue', () => {
    const sut = makeSut()
    expect(sut.search('any')).toBe(-1)
  })

  test('Should dequeue return a value when was provided to enqueue method', () => {
    const sut = makeSut()
    sut.enqueue('any')
    expect(sut.dequeue()).toBe('any')
  })

  test('Should peek return a value when was provided to enqueue method', () => {
    const sut = makeSut()
    sut.enqueue('any')
    expect(sut.peek()).toBe('any')
  })

  test('Should size return the exact amount of values provided to enqueue method', () => {
    const sut = makeSut()
    for (let count = 0; count < 10; count++) {
      expect(sut.size()).toBe(count)
      sut.enqueue(`any_${count}`)
    }
  })
})