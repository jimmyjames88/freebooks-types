import { _Address } from './Address'

export interface _Client {
  id: number
  name: string
  email: string
  phone: string
  website: string
  address?: _Address
  userId?: number
}