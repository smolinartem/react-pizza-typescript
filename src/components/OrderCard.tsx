import { useDispatch } from 'react-redux'
import { deleteItem } from '../store/order/orderSlice'
import type { Order } from '../store/order/orderSlice'
import OrderControls from './OrderControls'
import OrderInfo from './OrderInfo'
import { Trash } from 'lucide-react'

type OrderCardProps = {
  item: Order
  index: number
}

export default function OrderCard({ item, index }: OrderCardProps) {
  const dispatch = useDispatch()
  return (
    <li
      className='flex flex-col relative gap-4 items-center justify-between rounded-lg p-4 shadow-container bg-white shadow-one'
      key={index}
    >
      <button
        onClick={() => dispatch(deleteItem(index))}
        className='button-order absolute right-4 top-4 sm:hidden'
      >
        <Trash color='#292524' strokeWidth={1.5} />
      </button>
      <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white mx-auto'>
        <img src={item.image} alt={item.name} className='object-cover object-center' />
      </div>
      <div className='flex flex-col gap-2 items-center w-full'>
        <OrderInfo item={item} />
        <OrderControls amount={item.amount} index={index} price={item.price} />
      </div>
    </li>
  )
}

{
  /* <li className='flex gap-4 rounded-lg p-4 shadow-container bg-white shadow-one' key={index}>
      <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white'>
        <img src={item.image} alt={item.name} className='object-cover object-center' />
      </div>

      <div className='flex flex-col sm:flex-row items-center w-full'>
        <OrderInfo item={item} />
        <OrderControls amount={item.amount} index={index} price={item.price} />
      </div>
    </li> */
}
