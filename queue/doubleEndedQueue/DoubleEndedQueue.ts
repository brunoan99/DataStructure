import { IDoubleEndedQueue } from '../IDoubleEndedQueue'
import { Queue } from '../queue/Queue'

export class DoubleEndedQueue<V> extends Queue<V> implements IDoubleEndedQueue<V> {
  constructor () {
    super()
  }
  enqueueFront (value: V): void {
    this.queue.unshift(value)
  }

  dequeueBack (): V | undefined {
    return
  }
}