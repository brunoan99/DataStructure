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
})