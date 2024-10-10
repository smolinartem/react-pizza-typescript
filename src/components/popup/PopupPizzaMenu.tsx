import type { Product } from '../../types/index.types'
// - components
import Popup from './Popup'
import PizzasInfo from '../PizzaInfo'
import PizzaForm from '../PizzaForm'

interface PizzaMenuProps {
  selectedPizza: Product
  isOpen: boolean
  onClose: () => void
}

export default function PopupPizzaMenu({ selectedPizza, isOpen, onClose }: PizzaMenuProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className='grid gap-6 sm:grid-cols-2'>
        <PizzasInfo pizza={selectedPizza} />
        <PizzaForm pizza={selectedPizza} onClose={onClose} isOpen={isOpen} />
      </div>
    </Popup>
  )
}
