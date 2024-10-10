import { useState } from 'react'
import { pizzas, pizzasCategories } from '../utils/server'
import { useProductCategory } from '../hooks/useProductCategory'
import type { Product } from '../types/index.types'
// - components
import Filters from '../components/Filters'
import PizzaCard from '../components/PizzaCard'
import PopupPizzaMenu from '../components/popup/PopupPizzaMenu'

export default function Pizzas() {
  const { shownProducts, changeCategory, selected } = useProductCategory(pizzas)

  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)
  const [popupOpen, setPopupOpen] = useState(false)

  const handlePopupOpen = (pizza: Product) => {
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
            <PizzaCard onCardClick={handlePopupOpen} product={pizza} key={pizza._id} />
          ))}
        </ul>
      </div>
      {selectedPizza && (
        <PopupPizzaMenu
          selectedPizza={selectedPizza}
          isOpen={popupOpen}
          onClose={handlePopupClose}
        />
      )}
    </>
  )
}
