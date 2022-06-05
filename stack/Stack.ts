import { IStack } from './IStack'

export class Stack<V> implements IStack<V> {
  private stack: V[]

  constructor () {
    this.stack = []
  }

  push (value: V): void {
    this.stack.push(value)
  }

  peek (): V | undefined {
    return this.stack[this.stack.length - 1]
  }

  pop (): V | undefined {
    return this.stack[this.stack.length - 1]
  }

  size (): number {
    return this.stack.length
  }

  storage (): V[] {
    return this.stack
  }
}
