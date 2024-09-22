export interface _LineItem {
  description: string
  quantity: number
  rate: number
}

export interface _LineItemInputCreate extends _LineItem {}
export interface _LineItemInputUpdate extends _LineItem {}
