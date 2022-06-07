import { IDoubleEndedQueue } from '../IDoubleEndedQueue'

export class LinkedDoubleEndedQueue<V> implements IDoubleEndedQueue<V> {
  enqueue (value: V): void {
    throw new Error('Method not implemented.')
  }
  enqueueFront (value: V): void {
    throw new Error('Method not implemented.')
  }
  dequeue (): V | undefined {
    throw new Error('Method not implemented.')
  }
  dequeueBack (): V | undefined {
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
  searchBack (value: V): number {
    throw new Error('Method not implemented.')
  }
}