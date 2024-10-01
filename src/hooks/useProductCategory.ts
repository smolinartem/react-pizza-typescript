import { useState } from 'react'
import { Product } from '../types/index.types'

type ReturnProps = {
  shownProducts: Product[]
  changeCategory: (value: string) => void
  selected: string
}

export function useProductCategory(products: Product[]): ReturnProps {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const changeCategory = (value: string) => {
    setSelectedCategory(value)
  }

  const shownProducts = products.filter((product) => {
    if (selectedCategory === 'all') {
      return true
    } else {
      return product.category.includes(selectedCategory)
    }
  })

  return { shownProducts, changeCategory, selected: selectedCategory }
}
