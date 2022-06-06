import { IQueue } from '../IQueue'

export class Queue<V> implements IQueue<V> {
  queue: V[]

  constructor () {
    this.queue = []
  }
  enqueue (value: V): void {
    return
  }
  dequeue (): V | undefined {
    return this.queue[0]
  }
  peek (): V | undefined {
    return this.queue[0]
  }
  size (): number {
    return 0
  }
  storage (): V[] {
    return []
  }
  
}