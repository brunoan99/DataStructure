import { IStack } from './IStack'

export class Stack<V> implements IStack<V> {
  private stack: V[]

  constructor () {
    this.stack = []
  }

  push (value: V): void {
    return
  }

  peek (): V | undefined {
    return this.stack[this.stack.length]
  }

  pop (): V | undefined {
    return this.stack[this.stack.length]
  }

  size (): number {
    return this.stack.length
  }

  storage (): V[] {
    return this.stack
  }
}
