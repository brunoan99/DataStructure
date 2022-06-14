export interface IQueueNodeDoubleLinked<V>  {
  value: V
  next: IQueueNodeDoubleLinked<V> | null
  previus: IQueueNodeDoubleLinked<V> | null
}
