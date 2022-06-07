import { IQueue } from '../IQueue'

export class LinkedQueue<V> implements IQueue<V> {
  enqueue (value: V): void {
    return
  }
  dequeue (): V | undefined {
    return
  }
  peek (): V | undefined {
    return
  }
  size (): number {
    return 0
  }
  storage (): V[] {
    throw new Error('Method not implemented.')
  }
  search (value: V): number {
    throw new Error('Method not implemented.')
  }
  
}