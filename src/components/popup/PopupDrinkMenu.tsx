import { Product } from '../../types/index.types'
import Popup from './Popup'

type PopupDrinkMenuProps = {
  drink: Product
  open: boolean
  onClose: () => void
}

export default function PopupDrinkMenu({ drink, open, onClose }: PopupDrinkMenuProps) {
  const handleAddDrink = () => {
    onClose()
  }
  return (
    <Popup isOpen={open} onClose={onClose}>
      <div className='flex flex-col'>
        <h3 className='mb-4 text-2xl md:text-xl text-center md:text-left font-boldleading-none'>
          {drink.name}
        </h3>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md'>
          <img
            src={drink.image}
            alt={drink.name}
            className='h-full w-full object-cover object-center'
          />
        </div>
        <span className='my-4 text-center'>{drink.description}</span>
        <button className='button' onClick={() => handleAddDrink()}>
          Добавить
        </button>
      </div>
    </Popup>
  )
}
