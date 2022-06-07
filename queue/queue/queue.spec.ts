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

  test('Should method storage return a empty list if no value was provided to enqueue method', () => {
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })

  test('Should method dequeue return a value if value was provided to enqueue method', () => {
    const listToEnqueue = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    for (const item of listToEnqueue) {
      sut.enqueue(item)
    }
    for (const dequeuedItem of listToEnqueue) {
      expect(sut.dequeue()).toBe(dequeuedItem)
    }
    expect(sut.dequeue()).toBe(undefined)
  })

  test('Should method size return the exact amount if values was provided to enqueue method', () => {
    const sut = makeSut()
    for (let count = 0; count < 10; count++) {
      expect(sut.size()).toBe(count)
      sut.enqueue(`any_${count}`)
    }
  })

  test('Should method storage return the values that was provided to enqueue method', () => {
    const listToEnqueue = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    for (const item of listToEnqueue) {
      sut.enqueue(item)
    }
    expect(sut.storage()).toEqual(listToEnqueue)
  })

  test('Should method search return -1 if the value search are not in Queue', () => {
    const sut = makeSut()
    expect(sut.search('any')).toBe(-1)
  })

  test('Should search return position of element that was provided to method enqueue', () => {
    const listToEnqueue = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    for (const item of listToEnqueue) {
      sut.enqueue(item)
    }
    let count = 0
    for (const itemToSearch of listToEnqueue ) {
      expect(sut.search(itemToSearch)).toBe(count)
      count++
    }
  })
})