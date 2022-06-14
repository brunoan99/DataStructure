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

  test('Should union returns the union of sets S and T event both are not the same type', () => {
    const { sut, S, T } = makeSut([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e'])
    expect(sut.union(S, T).iterate()).toEqual([1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e'])
  })
})
