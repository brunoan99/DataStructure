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
    return 0
  }
  storage (): V[] {
    return []
  }
  search (value: V): number {
    return -1
  }
}