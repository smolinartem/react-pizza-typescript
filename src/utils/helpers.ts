import { AllOptions } from './server'
import { RU_NAMES } from './constants'

export const calculatePizza = (
  size: string,
  thickness: string,
  toppings: string[],
  options: AllOptions
): number => {
  const sizeWeight: number = options.size[size]
  const thicknessWeight: number = options.thickness[thickness]
  const toppingsWeight: number = toppings.reduce((acc, item) => acc + options.toppings[item], 0)

  return sizeWeight + thicknessWeight + toppingsWeight
}

export const translateToppings = (array: string[]) => {
  return array
    .map((topping: string) => {
      return RU_NAMES[topping]
    })
    .join(', ')
}
