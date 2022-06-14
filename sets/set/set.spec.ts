/* eslint-disable quotes */
import { Set } from './Set'

const makeSut = (): Set<unknown> => new Set()

describe('Set', () => {
  test('Should method add not have an return', () => {
    const sut = makeSut()
    expect(sut.add('any')).toBe(undefined)
  })

  test("Should method remove return false if the provided value isn't in Set", () => {
    const sut = makeSut()
    expect(sut.remove('any')).toBe(false)
  })

  test("Should method is_element_of return false if the provided value isn't in Set", () => {
    const sut = makeSut()
    expect(sut.is_element_of('any')).toBe(false)  
  })

  test('Should method size return 0 if no value was provided to Set', () => {
    const sut = makeSut()
    expect(sut.size()).toBe(0)
  })
})