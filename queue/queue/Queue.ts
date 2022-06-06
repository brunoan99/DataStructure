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
    throw new Error('Method not implemented.')
  }
  size (): number {
    throw new Error('Method not implemented.')
  }
  storage (): V[] {
    throw new Error('Method not implemented.')
  }
  
}