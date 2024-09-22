import {
  _Client, _DataTableFilters, _Expense, _Payment, _Tax, _User, _LineItem, Optional
} from './'


export enum _InvoiceStatus {
  DRAFT = 'Draft',
  SENT = 'Sent',
  PARTIAL = 'Partial',
  PAID = 'Paid',
  VOID = 'Void'
}
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
  createdAt: Date
  updatedAt: Date
}

export interface _InvoiceInputCreate extends Optional<
  _Invoice,
  | 'id'
  | 'User'
  | 'Client'
  | 'status'
  | 'issueDate'
  | 'dueDate'
  | 'notes'
  | 'LineItems'
  | 'Expenses'
  | 'Payments'
  | 'Taxes'
  | 'total'
  | 'createdAt'
  | 'updatedAt'
> {}

export interface _InvoiceInputUpdate extends Optional<
  _Invoice,
  | 'User'
  | 'Client'
  | 'status'
  | 'issueDate'
  | 'dueDate'
  | 'notes'
  | 'LineItems'
  | 'Expenses'
  | 'Payments'
  | 'Taxes'
  | 'total'
  | 'createdAt'
  | 'updatedAt'
> {}
