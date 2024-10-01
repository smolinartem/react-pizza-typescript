import type { Values } from './server'
import type { Options } from '../store/option/optionSlice'
import { RU_NAMES } from './constants'

export const calculatePizza = (option: Options, values: Values): number => {
  const sizeWeight: number = values.size[option.size]
  const thicknessWeight: number = values.thickness[option.thickness]
  const toppingsWeight: number = option.toppings.reduce(
    (acc, item) => acc + values.toppings[item],
    0
  )

  return sizeWeight + thicknessWeight + toppingsWeight
}

export const translateToppings = (array: string[]) => {
  return array
    .map((topping: string) => {
      return RU_NAMES[topping]
    })
    .join(', ')
}
