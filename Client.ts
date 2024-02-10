import { _Address } from './Address'
import { _Invoice } from './Invoice'

export interface _Client {
  id: number
  name: string
  email: string
  phone?: string
  website?: string
  address?: _Address
}