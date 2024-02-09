import { _Address } from './Address'

export interface _Profile {
  UserId?: number
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
  Profile?: _Profile
  createdAt: Date
  updatedAt: Date
}