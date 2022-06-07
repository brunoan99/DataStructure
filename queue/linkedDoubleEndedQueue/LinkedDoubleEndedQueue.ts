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
  searchBack (value: V): number {
    throw new Error('Method not implemented.')
  }
}