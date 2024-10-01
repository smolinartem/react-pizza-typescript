import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetOptions } from '../store/option/optionSlice'
import { pizzaList, pizzaCategories } from '../utils/server'
import { usePizzaCategory } from '../hooks/usePizzaCategory'
import type { Pizza } from '../types/index.types'
// - components
import PizzaCard from '../components/PizzaCard'
import PopupSelectionMenu from '../components/PopupSelectionMenu'
import Filters from '../components/Filters'

export default function Pizzas() {
  const { shownPizzaCards, selectCategory } = usePizzaCategory(pizzaList)

  const dispatch = useDispatch()
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null)
  const [popupOpen, setPopupOpen] = useState(false)

  const handlePopupOpen = (pizza: Pizza) => {
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
          items={pizzaCategories}
          categoryName='pizza categories'
          onSelect={selectCategory}
        />

        <ul className='product-grid'>
          {shownPizzaCards.map((pizza) => (
            <PizzaCard onOpen={handlePopupOpen} pizza={pizza} key={pizza._id} /> // Карточка пиццы
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
