import { _Address } from './Address'
import { _Invoice } from './Invoice'
import { _User } from './User'

export interface _Client {
  id: number
  name: string
  email: string
  phone?: string
  website?: string
  address: _Address
  User: _User
  Invoices?: _Invoice[]
}