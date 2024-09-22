import { Optional } from './'

export interface _PaymentType {
  id: number
  name: string
  icon: string
  createdAt: Date
  updatedAt: Date
}

export interface _PaymentTypeInputCreate extends Optional<_PaymentType, 'id' | 'createdAt' | 'updatedAt' > {}
export interface _PaymentTypeInputUpdate extends Optional<_PaymentType, 'createdAt' | 'updatedAt' > {}