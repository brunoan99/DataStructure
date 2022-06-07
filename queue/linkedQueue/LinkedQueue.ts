import { IQueue } from '../IQueue'

export class LinkedQueue<V> implements IQueue<V> {
  enqueue (value: V): void {
    return
  }
  dequeue (): V | undefined {
    throw new Error('Method not implemented.')
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
  search (value: V): number {
    throw new Error('Method not implemented.')
  }
  
}