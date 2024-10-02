import { useDispatch } from 'react-redux'
import { deleteItem } from '../store/order/orderSlice'
import { Trash } from 'lucide-react'
import AmountCounter from './AmountCounter'

type OrderControlsProps = {
  amount: number
  index: number
  price: number
}

export default function OrderControls({ amount, index, price }: OrderControlsProps) {
  const dispatch = useDispatch()
  return (
    <div className='flex items-center gap-4'>
      <AmountCounter amount={amount} index={index} />

      <span className='w-24 text-center text-xl md:text-2xl'>{price * amount}&#8381;</span>

      <button onClick={() => dispatch(deleteItem(index))} className='button-order'>
        <Trash color='#292524' strokeWidth={1.5} />
      </button>
    </div>
  )
}
