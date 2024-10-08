import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { deleteFavoriteProduct } from '../store/user/userSlice'
import { resetOptions } from '../store/option/optionSlice'

import { Product } from '../types/index.types'
import { Trash } from 'lucide-react'
import PopupSelectionMenu from './PopupSelectionMenu'

export default function UserFavProducts() {
  const { userInfo, userProducts } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [selectionMenuOpen, setSelectionMenuOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)

  const handlePopupOpen = (pizza: Product) => {
    dispatch(resetOptions())
    setSelectedPizza(pizza)
    setSelectionMenuOpen(true)
  }
  const handlePopupClose = () => {
    setSelectionMenuOpen(false)
  }

  return (
    userInfo && (
      <div className='w-full md:rounded-xl md:shadow-one md:px-4 md:py-6'>
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

        {selectedPizza && (
          <PopupSelectionMenu
            selectedPizza={selectedPizza}
            isOpen={selectionMenuOpen}
            onClose={handlePopupClose}
          />
        )}
      </div>
    )
  )
}
