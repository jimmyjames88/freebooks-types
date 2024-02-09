import { _PaymentType } from './Payment'
import { _Tax } from './Tax'

export interface _Expense {
  id: number
  UserId: number
  InvoiceId?: number
  paymentTypeId?: number
  date: Date
  description: string
  subtotal: number
  Taxes?: _Tax[]
  createdAt?: Date
  updatedAt?: Date
}