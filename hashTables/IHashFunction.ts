export interface IHashFunction<V> {
  hash(value: V, capacity: number): number
}