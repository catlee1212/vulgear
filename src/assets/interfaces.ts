export interface AmountStock {
  amountInStock: number,
  type: string
}

export interface Product {
  type: string,
  isUsed: boolean,
  amountInStock: number
}