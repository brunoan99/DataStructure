import { Queue } from '../queue/Queue'

export class DoubleEndedQueue<V> extends Queue<V> {
  constructor () {
    super()
  }
  enqueueFront (value: V): void {
    this.queue.unshift(value)
  }
}