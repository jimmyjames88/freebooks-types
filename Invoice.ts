export type Invoice = {
  id: number
  userId: number
  clientId: number
  refNo: string
  status: InvoiceStatus
  issueDate: Date
  dueDate: Date
  notes: string
  lineItems: any[]
  subtotal?: number
  tax?: number
  total?: number
}

export enum InvoiceStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  PARTIAL = 'partial',
  PAID = 'paid',
  VOID = 'void'
}