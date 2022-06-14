/* eslint-disable quotes */
import { SetClass } from './Set'

const makeSut = (): SetClass<unknown> => new SetClass()

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

  test('Should method iterate return a empty list if no value was provided to Set', () => {
    const sut = makeSut()
    expect(sut.iterate()).toEqual([])
  })

  test('Should method filter return a empty list if no value was provided to Set', () => {
    const sut = makeSut()
    expect(sut.filter(e => e)).toEqual([])
  })

  test('Should method remove return true if the provided value is in Set', () => {
    const sut = makeSut()
    sut.add('any')
    expect(sut.remove('any')).toBe(true)
  })
})