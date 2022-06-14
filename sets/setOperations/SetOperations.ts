/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISet } from '../ISet'
import { ISetOperations } from '../ISetOperations'
import { SetClass } from '../set/Set'

export class SetOperations implements ISetOperations {
  union (S: ISet<any>, T: ISet<any>): ISet<any> {
    const setToReturn = new SetClass()
    S.iterate().concat(T.iterate()).map(e => setToReturn.add(e))
    return setToReturn
  }
  intersection (S: ISet<any>, T: ISet<any>): ISet<any> {
    const setToReturn = new SetClass()
    S.iterate().map(e => {
      if(T.is_element_of(e)) setToReturn.add(e)
    })
    return setToReturn
  }
  difference (S: ISet<any>, T: ISet<any>): ISet<any> {
    const setToReturn = new SetClass()
    S.iterate().map(e => {
      if(!T.is_element_of(e)) setToReturn.add(e)
    })
    T.iterate().map(e => {
      if(!S.is_element_of(e)) setToReturn.add(e)
    })
    return setToReturn
  }
  subset (S: ISet<any>, T: ISet<any>): ISet<any> {
    throw new Error('Method not implemented.')
  }
}