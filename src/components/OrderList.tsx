import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

import OrderCard from './OrderCard'

export default function OrderList() {
  const order = useSelector((state: RootState) => state.order)
  return (
    <ul className='flex flex-col gap-3'>
      {order.map((item, index) => (
        <OrderCard item={item} index={index} />
      ))}
    </ul>
  )
}
