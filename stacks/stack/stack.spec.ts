import { Stack } from './Stack'

const makeSut = (): Stack<unknown> => new Stack()

describe('Stack', () => {
  test('Should method push have no return', () => {    
    const sut = makeSut()
    expect(sut.push('any_value')).toBe(undefined)
  })

  test('Should method peek return undefined if no value are provided to Stack', () => {    
    const sut = makeSut()
    expect(sut.peek()).toBe(undefined)
  })

  test('Should method pop return undefined if no value are provided to Stack', () => {    
    const sut = makeSut()
    expect(sut.pop()).toBe(undefined)
  })

  test('Should method size return zero if no value are provided to Stack', () => {    
    const sut = makeSut()
    expect(sut.size()).toBe(0)
  })

  test('Should method storeage return an empty list if no value are provided to Stack', () => {    
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })

  test('Should method peek return the last value provided in push method', () => {    
    const sut = makeSut()
    sut.push('any')
    expect(sut.peek()).toBe('any')
    sut.push('another_any')
    expect(sut.peek()).toBe('another_any')
    sut.push('other')
    expect(sut.peek()).toBe('other')
  })

  test('Should method pop return the last value provided in push method', () => {    
    const sut = makeSut()
    sut.push('any')
    expect(sut.pop()).toBe('any')
  })

  test('Should method pop remove the last value provided in push method to the stack', () => {    
    const sut = makeSut()
    sut.push('any')
    expect(sut.pop()).toBe('any')
    expect(sut.peek()).toBe(undefined)
  })

  test('Should method size return a number different of zero when some value is provided in push method', () => {    
    const sut = makeSut()
    sut.push('any')
    expect(sut.size()).not.toBe(0)
  })

  test('Should method size return the exact amout of values provided in push method', () => {    
    const sut = makeSut()
    for (let count = 0; count < 10; count ++) {
      expect(sut.size()).toBe(count)
      sut.push(`any_${count}`)
    }
  })

  test('Should method storage return a list with all values provided in push method', () => {
    const listToPush = ['any', 'other', 'another', 'another_one', 'other_one']
    const sut = makeSut()
    for (const item of listToPush) {
      sut.push(item)
    }
    expect(sut.storage()).toEqual(listToPush)
  })
})