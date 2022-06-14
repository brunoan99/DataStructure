export interface ISet<V> {
  add(value: V): void
  remove(value: V): boolean
  is_element_of(value: V): boolean
  size(): number
  iterate(): V[]
  filter(): V[] 
}