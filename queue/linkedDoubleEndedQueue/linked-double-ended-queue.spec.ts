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

  test('Should size return 0 if no value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.size()).toBe(0)
  })

  test('Should storage return a empty list if no value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })

  test('Should search return -1 if searched value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.search('any')).toBe(-1)
  })

  test('Should searchBack return -1 if searched value was provided to enqueue or enqueueFront', () => {
    const sut = makeSut()
    expect(sut.searchBack('any')).toBe(-1)
  })

  test('Should dequeue return a value if it was provided to enqueue method', () => {
    const sut = makeSut()
    sut.enqueue('any')
    expect(sut.dequeue()).toBe('any')
  })

  test('Should dequeue return a value if it was provided to enqueueFront method', () => {
    const sut = makeSut()
    sut.enqueueFront('any')
    expect(sut.dequeue()).toBe('any')
  })

  test('Should dequeueBack return a value if it was provided to enqueue method', () => {
    const sut = makeSut()
    sut.enqueue('any')
    expect(sut.dequeueBack()).toBe('any')
  })

  test('Should dequeueBack return a value if it was provided to enqueueFront method', () => {
    const sut = makeSut()
    sut.enqueueFront('any')
    expect(sut.dequeueBack()).toBe('any')
  })
})