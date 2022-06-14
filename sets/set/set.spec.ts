import { Set } from './Set'

const makeSut = (): Set<unknown> => new Set()

describe('Set', () => {
  test('Should method add not have an return', () => {
    const sut = makeSut()
    expect(sut.add('any'))
  })
})