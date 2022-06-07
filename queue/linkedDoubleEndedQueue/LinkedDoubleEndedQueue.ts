import { IDoubleEndedQueue } from '../IDoubleEndedQueue'
import { QueueNodeDoubleLinked } from './QueueNodeDoubleLinked'

export class LinkedDoubleEndedQueue<V> implements IDoubleEndedQueue<V> {
  start: QueueNodeDoubleLinked<V> | null = null 
  end: QueueNodeDoubleLinked<V> | null = null
  
  enqueue (value: V): void {
    const newQueueNode = new QueueNodeDoubleLinked(value)
    newQueueNode.previus = this.end
    if (this.end) {
      this.end.next = newQueueNode
    }
    if (!this.start) {
      this.start = newQueueNode
    }
    this.end = newQueueNode
  }
  enqueueFront (value: V): void {
    const newQueueNode = new QueueNodeDoubleLinked(value)
    newQueueNode.next = this.start
    if (this.start) {
      this.start.previus = newQueueNode
    }
    if (!this.end) {
      this.end = newQueueNode
    }
    this.start = newQueueNode
  }
  dequeue (): V | undefined {
    return this.end?.value
  }
  dequeueBack (): V | undefined {
    return this.end?.value
  }
  peek (): V | undefined {
    return
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
  searchBack (value: V): number {
    return -1
  }
}