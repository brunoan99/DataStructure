import { ISet } from '../ISet'

export class Set<V> implements ISet<V> {
  add (value: V): void {
    throw new Error('Method not implemented.')
  }
  remove (value: V): boolean {
    throw new Error('Method not implemented.')
  }
  is_element_of (value: V): boolean {
    throw new Error('Method not implemented.')
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