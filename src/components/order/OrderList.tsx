import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

import OrderCard from './OrderCard'

export default function OrderList() {
  const order = useSelector((state: RootState) => state.order)
  return (
    <ul className='grid gap-3'>
      {order.map((item, index) => (
        <OrderCard key={index} item={item} index={index} />
      ))}
    </ul>
  )
}
