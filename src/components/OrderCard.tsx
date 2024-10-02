import { Order } from '../store/order/orderSlice'
import OrderControls from './OrderControls'
import OrderInfo from './OrderInfo'

type OrderCardProps = {
  item: Order
  index: number
}

export default function OrderCard({ item, index }: OrderCardProps) {
  return (
    <li className='flex rounded-lg p-4 shadow-container bg-white shadow-one' key={index}>
      <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white'>
        <img src={item.image} alt={item.name} className='object-cover object-center' />
      </div>

      <div className='flex flex-col sm:flex-row items-center ml-4 w-full'>
        <OrderInfo item={item} />
        <OrderControls amount={item.amount} index={index} price={item.price} />
      </div>
    </li>
  )
}
