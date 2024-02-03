import { WEIGHT, PRICE } from './server'
type props = {
  size: string
  thickness: string
  toppings: string[]
}

export const calculateWeight = ({ size, thickness, toppings }: props): number => {
  const sizeWeight: number = WEIGHT.size[size]
  const thicknessWeight: number = WEIGHT.thickness[thickness]
  const toppingsWeight: number = toppings.reduce((a, b) => a + WEIGHT.toppings[b], 0)

  return sizeWeight + thicknessWeight + toppingsWeight
}
export const calculatePrice = ({ size, thickness, toppings }: props): number => {
  const sizePrice: number = PRICE.size[size]
  const thicknessPrice: number = PRICE.thickness[thickness]
  const toppingsPrice: number = toppings.reduce((a, b) => a + PRICE.toppings[b], 0)

  return sizePrice + thicknessPrice + toppingsPrice
}
