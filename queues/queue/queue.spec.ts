import { Queue } from './Queue'

const makeSut = (): Queue<unknown> => new Queue()

describe('Queue', () => {
  const listToEnqueue = ['any', 'other', 'another', 'another_one', 'other_one']

  test('Should method enqueue have no return', () => {
    const sut = makeSut()
    for (const item of listToEnqueue) {
      expect(sut.enqueue(item)).toBe(undefined)
    }
  })

  test('Should method peek return the first value provided to enqueue method that still not dequeued, if no value was provided return undefined', () => {
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
    for (const item of listToEnqueue) {
      sut.enqueue(item)
      expect(sut.peek()).toBe(listToEnqueue[0])
    }

  })

  test('Should method dequeue return a value if it was provided to enqueue method, if not should return undefined', () => {
    const sut = makeSut()
    expect(sut.dequeue()).toBe(undefined)
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

  test('Should method storage return the values that was provided to enqueue method, if no value was provided should return an empty list', () => {
    const listToCompare: unknown[] = []
    const sut = makeSut()
    expect(sut.storage()).toEqual(listToCompare)
    for (const item of listToEnqueue) {
      sut.enqueue(item)
      listToCompare.push(item)
      expect(sut.storage()).toEqual(listToCompare)
    }
    expect(sut.storage()).toEqual(listToEnqueue)
  })

  test('Should search return position of element that was provided to method enqueue, if value was not provided should return -1', () => {
    const sut = makeSut()
    expect(sut.search('any')).toBe(-1)
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