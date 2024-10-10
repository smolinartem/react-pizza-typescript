import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { deleteFavoriteProduct } from '../store/user/userSlice'

import { Product } from '../types/index.types'
import { Trash } from 'lucide-react'

import PopupDrinkMenu from './popup/PopupDrinkMenu'
import PopupPizzaMenu from './popup/PopupPizzaMenu'

export default function UserFavProducts() {
  const { userInfo, userProducts } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [pizzaMenuOpen, setPizzaMenuOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)

  const [drinkMenuOpen, setDrinkMenuOpen] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState<Product | null>(null)

  const handlePopupOpen = (product: Product) => {
    if (product._id > 20) {
      setSelectedDrink(product)
      setDrinkMenuOpen(true)
    } else {
      setSelectedPizza(product)
      setPizzaMenuOpen(true)
    }
  }

  return (
    userInfo && (
      <div className='w-full md:rounded-xl md:shadow-one md:px-4 md:py-6'>
        {selectedPizza && (
          <PopupPizzaMenu
            selectedPizza={selectedPizza}
            isOpen={pizzaMenuOpen}
            onClose={() => setPizzaMenuOpen(false)}
          />
        )}

        {selectedDrink && (
          <PopupDrinkMenu
            drink={selectedDrink}
            open={drinkMenuOpen}
            onClose={() => setDrinkMenuOpen(false)}
          />
        )}

        <h2 className='text-xl mb-6 text-center'>Избранные продукты</h2>

        <ul className='flex flex-col gap-4'>
          {userProducts.map((fav) => (
            <li key={fav._id} className='flex items-center gap-2 w-full'>
              <div
                onClick={() => handlePopupOpen(fav)}
                className='shrink-0 size-24 rounded-full overflow-hidden bg-white cursor-pointer'
              >
                <img src={fav.image} alt={fav.name} className='object-cover object-center' />
              </div>

              <div className='flex flex-col gap-2 w-full sm:grow'>
                <div className='flex items-center gap-2 w-full'>
                  <span className='text-sm text-stone-800 font-semibold grow'>{fav.name}</span>
                  <button
                    onClick={() => dispatch(deleteFavoriteProduct(fav))}
                    className='sm:hidden shrink-0 size-8 flex-center border transition-all duration-300 rounded-full hover:border-accent'
                  >
                    <Trash color='#292524' size={20} strokeWidth={1.5} />
                  </button>
                </div>

                <span className='text-xs text-stone-800'>{fav.description}</span>
              </div>

              <button
                onClick={() => dispatch(deleteFavoriteProduct(fav))}
                className='hidden shrink-0 size-8 sm:flex items-center justify-center border transition-all duration-300 rounded-full hover:border-accent'
              >
                <Trash color='#292524' size={20} strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}
