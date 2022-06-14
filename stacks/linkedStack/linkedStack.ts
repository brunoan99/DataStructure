import { IStack } from '../IStack'
import { StackNode } from './stackNode'

export class LinkedStack<V> implements IStack<V> {
  protected head: StackNode<V> | null = null

  push (value: V): void {
    const newNode = new StackNode(value)
    newNode.next = this.head
    this.head = newNode
  }

  peek (): V | undefined {
    return this.head?.value
  }

  pop (): V | undefined {
    const valueToPop = this.head?.value
    if (this.head?.next) {
      const newNode = new StackNode(this.head.next.value)
      newNode.next = this.head.next.next
      this.head = newNode
      return valueToPop
    }
    this.head = null
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
