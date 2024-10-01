import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetOptions } from '../store/option/optionSlice'
import { pizzas, pizzasCategories } from '../utils/server'
import { useProductCategory } from '../hooks/useProductCategory'
import type { Product } from '../types/index.types'
// - components
import ProductCard from '../components/ProductCard'
import PopupSelectionMenu from '../components/PopupSelectionMenu'
import Filters from '../components/Filters'

export default function Pizzas() {
  const { shownProducts, changeCategory, selected } = useProductCategory(pizzas)

  const dispatch = useDispatch()
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)
  const [popupOpen, setPopupOpen] = useState(false)

  const handlePopupOpen = (pizza: Product) => {
    dispatch(resetOptions())
    setSelectedPizza(pizza)
    setPopupOpen(true)
  }
  const handlePopupClose = () => {
    setPopupOpen(false)
  }

  return (
    <>
      <div className='section-container'>
        <Filters
          items={pizzasCategories}
          categoryName='pizzaCategories'
          onSelect={changeCategory}
          selected={selected}
        />

        <ul className='product-grid'>
          {shownProducts.map((pizza) => (
            <ProductCard onCardClick={handlePopupOpen} product={pizza} key={pizza._id} /> // Карточка пиццы
          ))}
        </ul>
      </div>
      {selectedPizza && (
        <PopupSelectionMenu
          selectedPizza={selectedPizza}
          isOpen={popupOpen}
          onClose={handlePopupClose}
        /> // Попап с формой выбора ингредиентов
      )}
    </>
  )
}
