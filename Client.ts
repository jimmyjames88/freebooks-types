import { _Address, _Invoice, _User, Optional } from './'

export interface _Client {
  id: number
  name: string
  email: string
  phone: string
  website: string
  address: _Address
  UserId: number
  User: _User
  Invoices: _Invoice[]
}

export interface _ClientInputCreate extends Optional<_Client, 'id' | 'User' | 'UserId' | 'Invoices' | 'address' | 'website' | 'phone'> {}
export interface _ClientInputUpdate extends Optional<_Client, 'User' | 'UserId' | 'Invoices' | 'address' | 'website' | 'phone'> {}