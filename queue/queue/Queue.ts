import { IQueue } from '../IQueue'

export class Queue<V> implements IQueue<V> {
  queue: V[]

  constructor () {
    this.queue = []
  }
  enqueue (value: V): void {
    this.queue.push(value)
  }
  dequeue (): V | undefined {
    const dequeuedItem = this.queue[0]
    this.queue = this.queue.slice(1)
    return dequeuedItem
  }
  peek (): V | undefined {
    return this.queue[0]
  }
  size (): number {
    return this.queue.length
  }
  storage (): V[] {
    return this.queue
  }
  
}