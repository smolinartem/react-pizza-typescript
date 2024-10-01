import { useEffect, useState } from 'react'
import { Pizza } from '../types/index.types'

type ReturnProps = {
  shownPizzaCards: Pizza[]
  selectCategory: (value: string) => void
}
export function usePizzaCategory(pizzaList: Pizza[]): ReturnProps {
  const [shownPizzaCards, setShownPizzaCards] = useState(pizzaList)
  const [category, setCategory] = useState('all')

  const selectCategory = (value: string) => {
    setCategory(value)
  }

  useEffect(() => {
    switch (category) {
      case 'all':
        setShownPizzaCards(pizzaList)
        break
      case 'hot':
        setShownPizzaCards(pizzaList.filter((pizza) => pizza.category.includes('hot')))
        break
      case 'kids':
        setShownPizzaCards(pizzaList.filter((pizza) => pizza.category.includes('kids')))
        break
      case 'veg':
        setShownPizzaCards(pizzaList.filter((pizza) => pizza.category.includes('veg')))
        break
      default:
        break
    }
  }, [setShownPizzaCards, category, pizzaList])

  return { shownPizzaCards, selectCategory }
}
