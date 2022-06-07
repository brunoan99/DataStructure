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
    return this.start?.value
  }
  peekBack (): V | undefined {
    return this.end?.value
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
    let tempQueueNode = this.start
    let index = 0
    while (tempQueueNode) {
      if (tempQueueNode.value == value) return index      
      tempQueueNode = tempQueueNode?.next
      index++
    }
    return -1
  }
  searchBack (value: V): number {
    return -1
  }
}