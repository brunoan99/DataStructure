import { IStack } from '../IStack'

export class Stack<V> implements IStack<V> {
  protected stack: V[] = []

  push (value: V): void {
    this.stack.push(value)
  }

  peek (): V | undefined {
    return this.stack[this.stack.length - 1]
  }

  pop (): V | undefined {
    return this.stack.pop()
  }

  size (): number {
    return this.stack.length
  }

  storage (): V[] {
    return this.stack
  }

  search (value: V): number {
    return this.stack.indexOf(value)
  }
}
