import { IQueue } from '../IQueue'
import { QueueNode } from './QueueNode'

export class LinkedQueue<V> implements IQueue<V> {
  protected start: QueueNode<V> | null = null 

  enqueue (value: V): void {
    if (this.start) {
      let tempQueueNode = this.start
      while (tempQueueNode?.next !== null ) {
        tempQueueNode = tempQueueNode.next
      }
      tempQueueNode.next = new QueueNode(value)
      return
    }
    this.start = new QueueNode(value)
  }
  dequeue (): V | undefined {
    const queueNodeToDequeue = this.start?.value
    this.start = this.start?.next ? this.start.next : null 
    return queueNodeToDequeue
  }
  peek (): V | undefined {
    return this.start?.value
  }
  size (): number {
    let tempQueueNode = this.start
    let count = 0
    while (tempQueueNode) {
      tempQueueNode = tempQueueNode?.next
      count++
    }
    return count
  }
  storage (): V[] {
    let tempQueueNode = this.start
    const listToReturn = []
    while (tempQueueNode) {
      listToReturn.push(tempQueueNode.value)
      tempQueueNode = tempQueueNode?.next
    }
    return listToReturn
  }
  search (value: V): number {
    return -1
  }
}