import { Optional } from './'

export enum _TaxType {
  PERCENTAGE = 'PERCENTAGE',
  FLAT = 'FLAT'
}

export interface _Tax {
  id: number
  UserId: number
  name: string
  rate: number
  type: _TaxType
  default: boolean
  createdAt: Date
  updatedAt: Date
}

export interface _TaxInputCreate extends Optional<_Tax, 'id' | 'createdAt' | 'updatedAt' | 'UserId'> {}
export interface _TaxInputUpdate extends Optional<_Tax, 'createdAt' | 'updatedAt' | 'UserId'> {}