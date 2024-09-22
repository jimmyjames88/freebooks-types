export interface _Address {
  line1: string
  line2: string
  city: string
  state: string
  postal: string
  country: string
}

export interface _AddressInputCreate extends _Address {}
export interface _AddressInputUpdate extends _Address {}