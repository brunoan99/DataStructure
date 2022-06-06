export interface IQueue<V> {
  enqueue(value: V): void
  dequeue(): V | undefined
  peek(): V | undefined
  size(): number
  storage(): V[]
}
