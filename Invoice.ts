import { _Client } from './Client'
import { _DataTableFilters } from './DataTable'
import { _Expense } from './Expense'
import { _Payment } from './Payment'
import { _Tax } from './Tax'
import { _User } from './User'

export interface _Invoice {
  id: number
  UserId: number
  User: _User
  ClientId: number
  Client: _Client
  refNo: string
  status: _InvoiceStatus
  issueDate: Date
  dueDate: Date
  notes: string
  LineItems: _LineItem[]
  Expenses: _Expense[],
  Payments: _Payment[],
  Taxes: _Tax[]
  total: number
}

export enum _InvoiceStatus {
  DRAFT = 'Draft',
  SENT = 'Sent',
  PARTIAL = 'Partial',
  PAID = 'Paid',
  VOID = 'Void'
}

export interface _LineItem {
  description: string
  quantity?: number
  rate?: number
}