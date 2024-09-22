import { _Address, Optional } from './'

export interface _Profile {
  UserId: number
  displayName: string
  displayEmail: string
  phone: string
  address: _Address
  createdAt: Date
  updatedAt: Date
}

export interface _ProfileInputCreate extends Optional<_Profile, 'createdAt' | 'updatedAt'> {}
export interface _ProfileInputUpdate extends Optional<_Profile, 'createdAt' | 'updatedAt'> {}

