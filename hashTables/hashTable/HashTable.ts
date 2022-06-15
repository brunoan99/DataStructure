import { IHashFunction } from '../IHashFunction'
import { IHashTable } from '../IHashTable'

export class HashTable<V> implements IHashTable<V> {
  protected hashTable: V[][]
  protected capacity: number
  protected hasher: IHashFunction<V>

  constructor (capacity: number, hasher: IHashFunction<V>) {
    this.capacity = capacity
    this.hasher = hasher
    const hashTable: V[][] = []
    for (let count = 0; count < capacity; count++) {
      hashTable.push([])
    }
    this.hashTable = hashTable
  }

  add (value: V): void {
    const index = this.hasher.hash(value, this.capacity)
    this.hashTable[index].push(value)
  }
  remove (value: V): boolean {
    return false
  }
  search (value: V): boolean {
    const hashIndex = this.hasher.hash(value, this.capacity)
    const bucket = this.hashTable[hashIndex]
    const bucketIndex = bucket.indexOf(value)
    if (bucketIndex >= 0) {
      return true
    }
    return false
  }
}