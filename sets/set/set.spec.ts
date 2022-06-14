import { Set } from './Set'

const makeSut = (): Set<unknown> => new Set()

describe('Set', () => {
  test('Should method add not have an return', () => {
    const sut = makeSut()
    expect(sut.add('any')).toBe(undefined)
  })

  // eslint-disable-next-line quotes
  test("Should method remove return false if the provided value isn't in Set", () => {
    const sut = makeSut()
    expect(sut.remove('any')).toBe(false)
  })
})