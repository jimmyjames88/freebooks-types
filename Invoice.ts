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
  subtotal?: number
  tax?: number
  total?: number
}

export enum _InvoiceStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  PARTIAL = 'partial',
  PAID = 'paid',
  VOID = 'void'
}

export interface _LineItem {
  description: string
  quantity: number
  rate: number
}