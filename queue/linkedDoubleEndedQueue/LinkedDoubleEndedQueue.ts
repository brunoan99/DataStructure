import { IDoubleEndedQueue } from '../IDoubleEndedQueue'

export class LinkedDoubleEndedQueue<V> implements IDoubleEndedQueue<V> {
  enqueue (value: V): void {
    return
  }
  enqueueFront (value: V): void {
    return
  }
  dequeue (): V | undefined {
    return
  }
  dequeueBack (): V | undefined {
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
  searchBack (value: V): number {
    throw new Error('Method not implemented.')
  }
}