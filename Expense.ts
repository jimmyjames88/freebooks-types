import { _PaymentType, _Tax, Optional } from './'

export interface _Expense {
  id: number
  UserId: number
  InvoiceId: number | null
  PaymentType: _PaymentType
  PaymentTypeId: number
  date: Date
  description: string
  subtotal: number
  Taxes: _Tax[]
  createdAt: Date
  updatedAt: Date
}

export interface _ExpenseInputCreate extends Optional<_Expense, 'id' | 'InvoiceId' | 'Taxes' | 'PaymentType' | 'createdAt' | 'updatedAt'> {}
export interface _ExpenseInputUpdate extends Optional<_Expense, 'InvoiceId' | 'createdAt' | 'updatedAt'> {}