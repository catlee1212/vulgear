export interface AmountStock {
  amountInStock: number,
  productType: string
}

// TODO: is amountinstock really optional?
export interface Product {
  productType: string,
  isUsed: boolean,
  amountInStock?: number
}