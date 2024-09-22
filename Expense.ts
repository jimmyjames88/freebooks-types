import { _PaymentType } from './PaymentType'
import { _Tax } from './Tax'

export interface _Expense {
  id: number
  UserId: number
  InvoiceId: number | null
  PaymentType: _PaymentType
  paymentTypeId: number
  date: Date
  description: string
  subtotal: number
  Taxes: _Tax[]
  createdAt: Date
  updatedAt: Date
}