import { Product } from '@/types/index.types'
import { Dialog } from './Dialog'
import PizzasInfo from '../PizzaInfo'
import PizzaForm from '../PizzaForm'

interface Props {
  pizza: Product
  isOpen: boolean
  onClose: () => void
}

export function PizzaMenuDialog({ pizza, isOpen, onClose }: Props) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className='grid gap-4 sm:grid-cols-2'>
        <PizzasInfo pizza={pizza} />
        <PizzaForm pizza={pizza} onClose={onClose} />
      </div>
    </Dialog>
  )
}
