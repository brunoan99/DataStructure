import { IQueueNodeDoubleLinked } from '../IQueueNodeDoubleLinked'

export class QueueNodeDoubleLinked<V> implements IQueueNodeDoubleLinked<V> {
  value: V
  next: IQueueNodeDoubleLinked<V> | null
  previus: IQueueNodeDoubleLinked<V> | null

  constructor (value: V, previus?: IQueueNodeDoubleLinked<V>, next?: IQueueNodeDoubleLinked<V> | null) {
    this.value = value
    this.next = next === undefined ? null : next
    this.previus = previus === undefined ? null : previus
  }
}
