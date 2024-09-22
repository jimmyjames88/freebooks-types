import { _PaymentType, Optional } from "./"


export interface _Payment {
  id: number
  ClientId: number
  InvoiceId: number
  UserId: number
  date: Date
  description: string
  amount: number
  PaymentType: _PaymentType
  PaymentTypeId: number
  createdAt: Date
  updatedAt: Date
}

export interface _PaymentInputCreate extends Optional<_Payment, 'id' | 'createdAt' | 'updatedAt' | 'PaymentType'> {}
export interface _PaymentInputUpdate extends Optional<_Payment, 'id' | 'createdAt' | 'updatedAt' | 'PaymentType'> {}