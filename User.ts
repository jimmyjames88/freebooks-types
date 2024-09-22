import { _Address, _Profile, Optional } from './'

export interface _User {
  id: number
  email: string
  password?: string
  name: string
  Profile: _Profile
  createdAt: Date
  updatedAt: Date
}

export interface _UserInputCreate extends Optional<_User, 'id' | 'createdAt' | 'updatedAt' | 'Profile'> {}
export interface _UserInputUpdate extends Optional<_User, 'id' | 'password' | 'createdAt' | 'updatedAt' | 'Profile'> {}