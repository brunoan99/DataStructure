import { Stack } from './Stack'

const makeSut = (): Stack<unknown> => new Stack()

describe('Stack', () => {
  test('Should method push have no return', () => {    
    const sut = makeSut()
    expect(sut.push('any_value')).toBe(undefined)
  })

  test('Should method peek return the last value if it was provided to push method, if not return undefined', () => {    
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
    sut.push('any')
    expect(sut.peek()).toBe('any')
    sut.push('another_any')
    expect(sut.peek()).toBe('another_any')
    sut.push('other')
    expect(sut.peek()).toBe('other')
  })

  test('Should method pop remove the last value if it was provided to push method to the stack, if not return undefined', () => {    
    const sut = makeSut()
    expect(sut.pop()).toBe(undefined)
    sut.push('any')
    expect(sut.pop()).toBe('any')
    expect(sut.peek()).toBe(undefined)
  })

  test('Should method size return the exact amout of values provided to push method', () => {    
    const sut = makeSut()
    for (let count = 0; count < 10; count ++) {
      expect(sut.size()).toBe(count)
      sut.push(`any_${count}`)
    }
  })

  test('Should method storage return a list with all values provided to push method', () => {
    const listToPush = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    const listToCompare: unknown[] = []
    expect(sut.storage()).toEqual(listToCompare)
    for (const item of listToPush) {
      sut.push(item)
      listToCompare.push(item)
      expect(sut.storage()).toEqual(listToCompare)
    }
    expect(sut.storage()).toEqual(listToCompare)
  })
})
