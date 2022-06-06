import { IQueue } from '../IQueue'

export class Queue<V> implements IQueue<V> {
  protected queue: V[] = []

  enqueue (value: V): void {
    this.queue.push(value)
  }
  dequeue (): V | undefined {
    return this.queue.shift()
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
  search (value: V): number {
    return -1
  }
}