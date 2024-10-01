import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { type RootState } from '../store/store'
import { ShoppingCart } from 'lucide-react'

type ButtonCartProps = {
  onClose: () => void
}

export default function ButtonCart({ onClose }: ButtonCartProps) {
  const order = useSelector((state: RootState) => state.order)

  return (
    <Link
      onClick={onClose}
      className='flex items-center justify-center relative size-10 md:size-12 circle-animation'
      to='cart'
    >
      <ShoppingCart color='var(--grey-color)' size={28} />
      {order.length === 0 ? null : (
        <span className='absolute size-4 right-0 top-0 flex-center rounded-full bg-accent text-white text-xs leading-none font-semibold'>
          {order.length}
        </span>
      )}
    </Link>
  )
}
