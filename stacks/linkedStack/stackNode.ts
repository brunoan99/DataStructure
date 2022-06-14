import { IStackNode } from '../IStackNode'

export class StackNode<V> implements IStackNode<V> {
  value: V
  next: IStackNode<V> | null

  constructor (value: V) {
    this.value = value
    this.next = null
  }
}
