import { IStack } from './IStack'


export class Stack<V> implements IStack<V> {
  push (value: V): undefined {
    return
  }

  peek (): V | undefined {
    throw new Error()
  }

  pop (): V | undefined {
    throw new Error()
  }

  size (): number {
    throw new Error()
  }

  storage (): V[] {
    throw new Error()
  }
}
