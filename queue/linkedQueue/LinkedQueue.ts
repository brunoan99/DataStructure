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
    return []
  }
  search (value: V): number {
    return -1
  }
}