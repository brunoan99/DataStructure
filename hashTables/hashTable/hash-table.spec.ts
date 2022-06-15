import { HashTable } from './HashTable'

const makeSut = (): HashTable<unknown> => new HashTable()

describe('Hash Table', () => {
  test('Should add method have no return', () => {
    const sut = makeSut()
    expect(sut.add('any')).toBe(undefined)
  })
})