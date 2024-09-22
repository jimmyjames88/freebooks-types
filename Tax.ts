export enum _TaxType {
  PERCENTAGE = 'PERCENTAGE',
  FLAT = 'FLAT'
}

export interface _Tax {
  id: number
  UserId: number
  name: string
  rate: number
  type: _TaxType
  default: boolean
  createdAt: Date
  updatedAt: Date
}