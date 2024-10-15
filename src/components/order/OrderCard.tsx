import type { Order } from '../../store/order/orderSlice'
import OrderControls from './OrderControls'
import OrderInfo from './OrderInfo'

type OrderCardProps = {
  item: Order
  index: number
}

export default function OrderCard({ item, index }: OrderCardProps) {
  return (
    <li
      className='grid grid-cols-order-card sm:grid-cols-order-card-sm md:grid-cols-order-card-md gap-3 rounded-lg p-4 shadow-container bg-white shadow-one w-full'
      key={index}
    >
      <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white'>
        <img src={item.image} alt={item.name} className='object-cover object-center' />
      </div>
      <OrderInfo item={item} />
      <OrderControls amount={item.amount} index={index} price={item.price} />
    </li>
  )
}
