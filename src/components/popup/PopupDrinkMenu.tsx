import { Product } from '../../types/index.types'
import Popup from './Popup'

import { useDispatch, useSelector } from 'react-redux'
import { addOrder, increaseAmount } from '../../store/order/orderSlice'
import { RootState } from '../../store/store'

type PopupDrinkMenuProps = {
  drink: Product
  open: boolean
  onClose: () => void
}

export default function PopupDrinkMenu({ drink, open, onClose }: PopupDrinkMenuProps) {
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.order)

  const handleAddDrink = () => {
    const newOrder = {
      name: drink.name,
      image: drink.image,
      description: drink.description,
      price: drink.price as number,
      amount: 1,
    }

    if (order.length === 0) {
      dispatch(addOrder(newOrder))
    } else {
      const index = order.findIndex((item) => {
        return item.name === newOrder.name && item.description === newOrder.description
      })

      index === -1 ? dispatch(addOrder(newOrder)) : dispatch(increaseAmount(index))
    }

    onClose()
  }

  return (
    <Popup isOpen={open} onClose={onClose}>
      <div className='flex flex-col items-center gap-4 pt-8'>
        <h3 className='font-title text-center text-lg text-stone-600 uppercase'>{drink.name}</h3>
        <div className='overflow-hidden rounded-md size-80'>
          <img
            src={drink.image}
            alt={drink.name}
            className='h-full w-full object-cover object-center'
          />
        </div>
        <span className='block text-lg font-semibold text-center'>{drink.description}</span>

        <button
          className='button w-full font-title text-base uppercase'
          onClick={() => handleAddDrink()}
        >
          Добавить за {drink.price} Р
        </button>
      </div>
    </Popup>
  )
}
