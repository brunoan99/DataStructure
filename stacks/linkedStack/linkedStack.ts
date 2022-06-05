import { IStack } from '../IStack'

export class LinkedStack<V> implements IStack<V> {
  push (value: V): void {
    return
  }
  pop (): V | undefined {
    throw new Error('Method not implemented.')
  }
  size (): number {
    throw new Error('Method not implemented.')
  }
  peek (): V | undefined {
    throw new Error('Method not implemented.')
  }
  storage (): V[] {
    throw new Error('Method not implemented.')
  }

}