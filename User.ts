import { _Address } from './Address'

export interface _Profile {
  userId?: number
  displayName?: string
  displayEmail?: string
  phone?: string
  address: _Address
  createdAt?: Date
  updatedAt?: Date
}

export interface _User {
  id: number
  email: string
  password?: string
  name: string
  profile?: _Profile
  createdAt: Date
  updatedAt: Date
}