import type { Product } from '../../types/index.types'
// - components
import Popup from './Popup'
import PizzasInfo from '../PizzaInfo'
import PizzaForm from '../PizzaForm'

interface SelectionMenuProps {
  selectedPizza: Product
  isOpen: boolean
  onClose: () => void
}

// - max-w-80

export default function PopupSelectionMenu({ selectedPizza, isOpen, onClose }: SelectionMenuProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className='grid gap-6 sm:grid-cols-2'>
        <PizzasInfo pizza={selectedPizza} />
        <PizzaForm pizza={selectedPizza} onClose={onClose} />
      </div>
    </Popup>
  )
}
