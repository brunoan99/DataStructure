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
    return this.queue.pop()
  }
  
  searchBack (value: V): number {
    let index
    for (index = this.queue.length -1; index >= 0; index--) {
      if (this.queue[index] === value) {
        return index
      }
    }
    return index
  }

  peekBack (): V | undefined {
    return this.queue[this.queue.length -1]
  }
}
