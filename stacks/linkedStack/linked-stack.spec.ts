import { LinkedStack } from './linkedStack'

const makeSut = (): LinkedStack<unknown> => new LinkedStack()

describe('Linked Stack', () => {
  test('Should method push have no return', () => {
    const sut = makeSut()
    expect(sut.push('any')).toBe(undefined)
  })

  test('Should method peek return the last value if it was provided to push method', () => {    
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
    sut.push('any')
    expect(sut.peek()).toBe('any')
    sut.push('other')
    expect(sut.peek()).toBe('other')
    sut.push('another')
    expect(sut.peek()).toBe('another')
  })

  test('Should method pop remove and return the value in the head of linkedStack', () => {
    const sut = makeSut()
    expect(sut.pop()).toBe(undefined)
    sut.push('any')
    expect(sut.pop()).toBe('any')
    expect(sut.pop()).toBe(undefined)
    sut.push('other')
    sut.push('another')
    sut.push('any_other')
    expect(sut.pop()).toBe('any_other')
    expect(sut.pop()).toBe('another')
    expect(sut.pop()).toBe('other')
    expect(sut.pop()).toBe(undefined)
  })

  test('Should method size return the exact amout of values provided to push method', () => {    
    const sut = makeSut()
    for (let count = 0; count < 10; count ++) {
      expect(sut.size()).toBe(count)
      sut.push(`any_${count}`)
    }
  })

  test('Should method storage return a list with all values provided to push method, in same order that was pushed', () => {
    const listToPush = ['any', 'other', 'another', 'another_one', 'other_one']
    const listToCompare: unknown[] = []
    const sut = makeSut()
    expect(sut.storage()).toEqual(listToCompare)
    for (const item of listToPush) {
      sut.push(item)
      listToCompare.push(item)
      expect(sut.storage()).toEqual(listToCompare)
    }
    expect(sut.storage()).toEqual(listToPush)
  })

  test('Should method search return the index if searched value was provided to push method, if not return -1', () => {
    const sut = makeSut()
    const listToPush = ['any', 'other', 'another', 'another_one', 'other_one']
    expect(sut.search('any')).toBe(-1)
    for (const item of listToPush) {
      sut.push(item)
      expect(sut.search(item)).toBe(0)
    }
    let index = listToPush.length -1
    for (const item of listToPush) {
      expect(sut.search(item)).toBe(index)
      index--
    }
  })
})
