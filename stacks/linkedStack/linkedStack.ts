import { IStack } from '../IStack'
import { StackNode } from './stackNode'

export class LinkedStack<V> implements IStack<V> {
  head: StackNode<V> | null

  constructor () {
    this.head = null
  }

  push (value: V): void {
    this.head = new StackNode(value, this.head)
  }

  peek (): V | undefined {
    return this.head?.value
  }

  pop (): V | undefined {
    const valueToPop = this.head?.value
    this.head = this.head?.next ? new StackNode(this.head.next.value, this.head.next.next) : null
    return valueToPop
  }

  size (): number {
    let tempStackNode = this.head
    let count = 0
    while (tempStackNode !== null) {
      count += 1
      tempStackNode = tempStackNode.next
    }
    return count
  }

  storage (): V[] {
    let tempStackNode = this.head
    const storageList = []
    while (tempStackNode !== null) {
      storageList.push(tempStackNode.value)
      tempStackNode = tempStackNode.next
    }
    return storageList.reverse()
  }
}
