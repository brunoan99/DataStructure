import { IQueue } from './IQueue'

export interface IDoubleEndedQueue<V> extends IQueue<V> {
  enqueueFront(value: V): void
  dequeueBack(): V | undefined
  searchBack(value: V): number
}