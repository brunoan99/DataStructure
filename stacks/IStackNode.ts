export interface IStackNode<V> {
  value: V
  next: IStackNode<V> | null
}
