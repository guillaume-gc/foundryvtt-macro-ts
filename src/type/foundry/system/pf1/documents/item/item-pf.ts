import { Collection } from '../../../../utils/collection'
import { ItemAction } from '../../components/item-action'
import { ActorPF } from '../actor/actor-pf'
import { ItemBasePF } from './item-base-pf'

export const itemPFTypeValues = ['buff', 'attack', 'feat'] as const
export type ItemPFType = (typeof itemPFTypeValues)[number]

export declare class ItemPF extends ItemBasePF {
  constructor(...args: any[])

  id: string

  type: ItemPFType
  name: string
  actions: Collection<ItemAction>
  uuid: string
  actor: ActorPF

  get hasDamage(): boolean
  get isOwned(): boolean
  get isActive(): boolean
  get hasAction(): boolean
  get isSingleUse(): boolean
  get isCharged(): boolean
  get charges(): boolean
  get autoDeductCharges(): boolean
  get img(): string
  get thumbnail(): string

  getDefaultChargeCost(rollData: Record<string, any>): number
  getRollData(): object
}
