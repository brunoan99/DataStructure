/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISet } from './ISet'

export interface ISetOperations {
  union(S: ISet<any>, T: ISet<any>): ISet<any>
  intersection(S: ISet<any>, T: ISet<any>): ISet<any>
  difference(S: ISet<any>, T: ISet<any>): ISet<any>
  subset(S: ISet<any>, T: ISet<any>): boolean
}