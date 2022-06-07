export interface IQueueNode<V> {
  value: V
  next: IQueueNode<V> | null
}
