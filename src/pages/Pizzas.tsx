import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetOptions } from '../store/option/optionSlice'
import { PIZZAS } from '../utils/server'
import type { Pizza } from '../types/index.types'
// - components
import PizzaCard from '../components/PizzaCard'
import PopupSelectionMenu from '../components/PopupSelectionMenu'

export default function Pizzas() {
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
      <div className='container wrapper pt-4 pb-4 md:pt-6 md:pb-6 shadow-one rounded-xl h-full'>
        <ul className='product-grid'>
          {PIZZAS.map((pizza) => (
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
