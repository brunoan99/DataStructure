export interface IStack<V> {
  push(value: V): void
  pop(): V | undefined
  size(): number
  peek(): V | undefined
  storage(): V[]
}