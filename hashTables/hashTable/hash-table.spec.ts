import { HashFunction } from './HashFunction'
import { HashTable } from './HashTable'

const makeSut = (): HashTable<string> => {
  const hashFunction = new HashFunction()
  return new HashTable(10, hashFunction)
}
describe('Hash Table', () => {
  test('Should add method have no return', () => {
    const sut = makeSut()
    expect(sut.add('any')).toBe(undefined)
  })

  test('Should remove return false if value is not in the HashTable', () => {
    const sut = makeSut()
    expect(sut.remove('any')).toBe(false)
  })

  test('Should search return false if value is not in the HashTable', () => {
    const sut = makeSut()
    expect(sut.search('any')).toBe(false)
  })

  test('Should search return true if value is in HashTable', () => {
    const sut = makeSut()
    sut.add('any')
    expect(sut.search('any')).toBe(true)
  })

  test('Should remove return true if value is in HashTable', () => {
    const sut = makeSut()
    sut.add('any')
    expect(sut.remove('any')).toBe(true)
    expect(sut.remove('any')).toBe(false)
  })
})