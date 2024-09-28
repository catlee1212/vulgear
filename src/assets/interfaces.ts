export interface AmountStock {
  amountInStock: number,
  type: string
}

// TODO: is amountinstock really optional?
export interface Product {
  type: string,
  isUsed: boolean,
  amountInStock?: number
}