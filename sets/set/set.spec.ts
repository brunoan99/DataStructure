/* eslint-disable quotes */
import { SetClass } from './Set'

const makeSut = (): SetClass<unknown> => new SetClass()

describe('Set', () => {
  const listToAdd = ['any', 'other', 'another', 'another_one', 'other_one']

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
    for (const item of listToAdd) {
      sut.add(item)
    }
    for (const item of listToAdd) {
      expect(sut.remove(item)).toBe(true)
      expect(sut.remove(item)).toBe(false)
    }
  })

  test('Should method is_element_of return true if the provided value is in Set', () => {
    const sut = makeSut()
    for (const item of listToAdd) {
      sut.add(item)
    }
    for (const item of listToAdd) {
      expect(sut.is_element_of(item)).toBe(true)
      expect(sut.is_element_of(item)).toBe(true)
    }
  })

  test('Should method size return the exact amount of values provided to Set', () => {
    const sut = makeSut()
    let count = 0
    for (const item of listToAdd) {
      expect(sut.size()).toBe(count)
      sut.add(item)
      count++
    }
  })

  test('Should method iterate return a list with values provided to Set', () => {
    const sut = makeSut()
    for (const item of listToAdd) {
      sut.add(item)
    }
    expect(sut.iterate()).toEqual(listToAdd)
  })

  test('Should method filter return a list with provided values and filtered by predicate parameter', () => {
    const sut = makeSut()
    for (const item of listToAdd) {
      sut.add(item)
    }
    expect(sut.filter(e => e)).toEqual(listToAdd)
    expect(sut.filter(e => e === listToAdd[0])).toEqual([listToAdd[0]])
    expect(sut.filter(e => e !== listToAdd[0])).toEqual(listToAdd.slice(1))
  })

  test('Should add only one time a duplicated provided value', () => {
    const sut = makeSut()
    for (const item of listToAdd) {
      sut.add(item)
    }
    expect(sut.size()).toBe(listToAdd.length)
    for (const item of listToAdd) {
      sut.add(item)
    }
    expect(sut.size()).toBe(listToAdd.length)
  })
})