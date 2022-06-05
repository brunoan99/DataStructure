import { Stack } from './Stack'

const makeSut = (): Stack<unknown> => {
  return new Stack()
}

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
  })
})