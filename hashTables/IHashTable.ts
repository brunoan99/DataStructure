export interface IHashTable<V> {
  add(value: V): void
  remove(value: V): boolean
  search(value: V): boolean
}