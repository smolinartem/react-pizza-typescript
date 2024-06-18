import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetOptions } from '../store/option/optionSlice'
import { PIZZAS } from '../utils/server'

import { IPizza } from '../types/pizza.types'
import PopupSelectionMenu from '../components/PopupSelectionMenu'

const Pizzas = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const [selectedPizza, setSelectedPizza] = useState<IPizza | null>(null)
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  const handlePopupOpen = (pizza: IPizza) => {
    dispatch(resetOptions())
    setSelectedPizza(pizza)
    setPopupOpen(true)
  }
  const handlePopupClose = () => {
    setPopupOpen(false)
  }

  return (
    <>
      <div className='container pt-6 pb-6 mx-auto shadow-container rounded-xl h-full'>
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {PIZZAS.map((pizza) => (
            <div
              onClick={() => handlePopupOpen(pizza)}
              key={pizza._id}
              className='group flex flex-col cursor-pointer'
            >
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <h3 className='mt-4 text-lg text-gray-700 font-semibold'>{pizza.name}</h3>
              <p className='mt-2 grow text-sm text-gray-700'>{pizza.description}</p>
              <div className='mt-4 flex justify-between items-center'>
                <span className='text-lg font-semibold shrink-0 text-gray-700'>от 400 &#8381;</span>
                <button className='text-sm shrink-0 button'>Добавить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPizza && (
        <PopupSelectionMenu
          selectedPizza={selectedPizza}
          popupOpen={popupOpen}
          onPopupClose={handlePopupClose}
        />
      )}
    </>
  )
}

export default Pizzas
