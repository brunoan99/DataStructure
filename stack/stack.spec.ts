import { Stack } from './Stack'

describe('Stack', () => {
  test('Should method push have no return', () => {    
    const sut = new Stack()
    const returned = sut.push('any_value')
    expect(returned).toBe(undefined)
  })
})