export interface _PaymentType {
  id: number
  name: string
  icon: string
}

export interface _Payment {
  id?: number
  date?: Date
  ClientId?: number
  InvoiceId?: number
  UserId?: number
  description?: string
  amount: number
  PaymentType?: _PaymentType
  paymentTypeId?: number
  createdAt?: Date
  updatedAt?: Date
}