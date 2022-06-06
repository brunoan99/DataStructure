import { IStack } from '../IStack'
import { StackNode } from './stackNode'

export class LinkedStack<V> implements IStack<V> {
  head: StackNode<V> | null

  constructor () {
    this.head = null
  }

  push (value: V): void {
    return
  }

  peek (): V | undefined {
    return this.head?.value
  }

  pop (): V | undefined {
    return this.head?.value
  }

  size (): number {
    return 0
  }

  storage (): V[] {
    return []
  }
}