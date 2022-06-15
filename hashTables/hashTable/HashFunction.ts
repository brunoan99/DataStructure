import { IHashFunction } from '../IHashFunction'

export class HashFunction implements IHashFunction<string> {
  hash (value: string, capacity: number): number {
    return value.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0) % capacity
  }
}