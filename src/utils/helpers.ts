import { RU_NAMES } from './constants'
import { Order } from '../store/order/orderSlice'

export const translateToppings = (array: string[]) => {
  return array
    .map((topping: string) => {
      return RU_NAMES[topping]
    })
    .join(', ')
}

export const calculateAmountInCart = (array: Order[]) => {
  return array.reduce((item, acc) => {
    return item + acc.amount
  }, 0)
}

export const getCurrentTime = () => {
  const date = new Date()
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
}
