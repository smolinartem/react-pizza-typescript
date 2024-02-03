import { RU_NAMES } from './constants'

export const translateToppings = (array: string[]) => {
  return array
    .map((topping: string) => {
      return RU_NAMES[topping]
    })
    .join(', ')
}
