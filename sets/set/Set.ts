import { ISet } from '../ISet'

export class SetClass<V> implements ISet<V> {
  protected set: Set<V> = new Set()

  add (value: V): void {
    this.set.add(value)
  }
  remove (value: V): boolean {
    return this.set.delete(value)
  }
  is_element_of (value: V): boolean {
    return this.set.has(value)
  }
  size (): number {
    return this.set.size
  }
  iterate (): V[] {
    const listToReturn: V[] = []
    this.set.forEach(e => listToReturn.push(e))
    return listToReturn
  }
  filter (callback: object): V[] {
    return []
  }
}
