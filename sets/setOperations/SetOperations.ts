/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISet } from '../ISet'
import { ISetOperations } from '../ISetOperations'
import { SetClass } from '../set/Set'

export class SetOperations implements ISetOperations {
  union (S: ISet<any>, T: ISet<any>): ISet<any> {
    const setToReturn = new SetClass()
    for (const item of S.iterate().concat(T.iterate())) {
      setToReturn.add(item)
    } 
    return setToReturn
  }
  intersection (S: ISet<any>, T: ISet<any>): ISet<any> {
    const setToReturn = new SetClass()
    for (const itemS of S.iterate()) {
      for (const itemT of T.iterate()) {
        if (itemS === itemT) {
          setToReturn.add(itemS)
        }
      }
    }
    return setToReturn
  }
  difference (S: ISet<any>, T: ISet<any>): ISet<any> {
    throw new Error('Method not implemented.')
  }
  subset (S: ISet<any>, T: ISet<any>): ISet<any> {
    throw new Error('Method not implemented.')
  }
}