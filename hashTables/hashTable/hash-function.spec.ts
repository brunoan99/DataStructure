import { HashFunction } from './HashFunction'

const makeSut = (): HashFunction => new HashFunction()

describe('Hash Function', () => {
  test('Should return a number', () => {
    const sut = makeSut()
    expect(typeof sut.hash('any', 10)).toBe('number')
  })
})