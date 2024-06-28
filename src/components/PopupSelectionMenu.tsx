import { useMenuClose } from '../hooks/useMenuClose'
import type { Pizza } from '../types/index.types'
// - components
import Popup from './Popup'
import PizzasInfo from './PizzaInfo'
import PizzaForm from './PizzaForm'

interface SelectionMenuProps {
  selectedPizza: Pizza
  isOpen: boolean
  onClose: () => void
}

// - max-w-80

export default function PopupSelectionMenu({ selectedPizza, isOpen, onClose }: SelectionMenuProps) {
  useMenuClose(isOpen, onClose)

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className='grid gap-6 sm:grid-cols-2'>
        <PizzasInfo pizza={selectedPizza} />
        <PizzaForm pizza={selectedPizza} onClose={onClose} />
      </div>
    </Popup>
  )
}
