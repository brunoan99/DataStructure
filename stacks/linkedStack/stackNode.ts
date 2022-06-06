import { IStackNode } from '../IStackNode'

export class StackNode<V> implements IStackNode<V> {
  value: V
  next: IStackNode<V> | null

  constructor (value: V, next?: StackNode<V> | null) {
    this.value = value
    this.next = next === undefined ? null : next
  }
}
