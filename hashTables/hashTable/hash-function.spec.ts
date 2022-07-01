import { HashFunction } from './HashFunction'

const makeSut = (): HashFunction => new HashFunction()

describe('Hash Function', () => {
  test('Should hash return a number less than capacity provided', () => {
    const sut = makeSut()
    expect(typeof sut.hash('any', 10)).toBe('number')
    expect(sut.hash('any', 10)).toBeLessThan(10)
  })
})