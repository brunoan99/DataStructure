import { LinkedStack } from './linkedStack'

const makeSut = (): LinkedStack<unknown> => new LinkedStack()

describe('Linked Stack', () => {
  test('Should method push have no return', () => {
    const sut = makeSut()
    expect(sut.push('any')).toBe(undefined)
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

  test('Should method storage return a empty list if no value are provided to Stack', () => {    
    const sut = makeSut()
    expect(sut.storage()).toEqual([])
  })

  test('Should method peek return the last value provided in push method', () => {    
    const sut = makeSut()
    sut.push('any')
    expect(sut.peek()).toBe('any')
    sut.push('other')
    expect(sut.peek()).toBe('other')
    sut.push('another')
    expect(sut.peek()).toBe('another')
  })

  test('Should method pop remove the last value provided in push method', () => {
    const sut = makeSut()
    sut.push('any')
    expect(sut.pop()).toBe('any')
    expect(sut.peek()).toBe(undefined)
  })
})