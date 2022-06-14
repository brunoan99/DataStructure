import { ISet } from '../ISet'

export class Set<V> implements ISet<V> {
  add (value: V): void {
    return
  }
  remove (value: V): boolean {
    return false
  }
  is_element_of (value: V): boolean {
    return false
  }
  size (): number {
    throw new Error('Method not implemented.')
  }
  iterate (): V[] {
    throw new Error('Method not implemented.')
  }
  filter (): V[] {
    throw new Error('Method not implemented.')
  }
}