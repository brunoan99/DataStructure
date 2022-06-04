import { IStack } from './IStack'


export class Stack<V> implements IStack<V> {
  stack: V[]

  constructor () {
    this.stack = []
  }

  push (value: V): undefined {
    return
  }

  peek (): V | undefined {
    return this.stack[this.stack.length]
  }

  pop (): V | undefined {
    return this.stack[this.stack.length]
  }

  size (): number {
    throw new Error()
  }

  storage (): V[] {
    throw new Error()
  }
}
