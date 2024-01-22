import { _Tax } from './Tax'

export interface _Invoice {
  id: number
  userId: number
  clientId?: number
  refNo: string
  status: _InvoiceStatus
  issueDate: Date
  dueDate: Date
  notes: string
  lineItems: _LineItem[]
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
  quantity: number
  rate: number
}