export interface _PaymentType {
  id: number
  name: string
  icon: string
}

export interface _Payment {
  id?: number
  date?: Date
  clientId?: number
  invoiceId?: number
  userId?: number
  description?: string
  amount: number
  type: _PaymentType
  createdAt?: Date
  updatedAt?: Date
}