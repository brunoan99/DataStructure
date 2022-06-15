import { IHashTable } from '../IHashTable'

export class HashTable<V> implements IHashTable<V> {
  add (value: V): void {
    return
  }
  remove (value: V): boolean {
    return false
  }
  search (value: V): boolean {
    throw new Error('Method not implemented.')
  }
}