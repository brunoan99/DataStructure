/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetClass } from '../set/Set'
import { SetOperations } from './SetOperations'

type SutType = {
  sut: SetOperations
  S: SetClass<any>
  T: SetClass<any>
}

const makeSut = (sValues: any[], tValues: any[]): SutType => {
  const sut = new SetOperations()
  const S = new SetClass()
  for (const item of sValues) {
    S.add(item)
  }
  const T = new SetClass()
  for (const item of tValues) {
    T.add(item)
  }
  return {
    sut,
    S,
    T
  }
}

describe('Set Operations', () => {
  test('Should union returns the union of sets S and T', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
    expect(sut.union(S, T).iterate()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  test('Should union returns the union of sets S and T even both are not the same type', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'])
    expect(sut.union(S, T).iterate()).toEqual([1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e'])
  })

  test('Should union returns the union of sets S and T but not duplicate elements there are in both Sets', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
    expect(sut.union(S, T).iterate()).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  test('Should intersection returns the intersection of sets S and T', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
    expect(sut.intersection(S, T).iterate()).toEqual([3, 4, 5])
  })

  test('Should difference returns the difference of sets S and T', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
    expect(sut.difference(S, T).iterate()).toEqual([1, 2, 6, 7])
  })

  test('Should subset returns false when S is not a subset of T', () => {
    const { sut, S, T } = makeSut([1, 2, 3], [4, 5, 6, 7, 8, 9, 10])
    expect(sut.subset(S, T)).toBe(false)
  })

  test('Should subset returns true when S is a subset of T', () => {
    const { sut, S, T } = makeSut([1, 2, 3], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(sut.subset(S, T)).toBe(true)
  })

  test('Should subset returns false when S is not a subset of T, but S is partialy contained in T', () => {
    const { sut, S, T } = makeSut([4, 5, 6], [1, 2, 3, 4, 5])
    expect(sut.subset(S, T)).toBe(false)
  })
})
