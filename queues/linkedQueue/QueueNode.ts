import { IQueueNode } from '../IQueueNode'

export class QueueNode<V> implements IQueueNode<V> {
  value: V
  next: IQueueNode<V> | null

  constructor (value: V, next?: IQueueNode<V> | null) {
    this.value = value
    this.next = next === undefined ? null : next
  }
}
