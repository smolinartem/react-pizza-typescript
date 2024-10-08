import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

import CartHeader from '../components/CartHeader'
import CartFooter from '../components/CartFooter'
import OrderList from '../components/order/OrderList'

export default function Cart() {
  const order = useSelector((state: RootState) => state.order)
  const empty = order.length === 0
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.amount, 0)

  return (
    <section>
      <div className='section-container'>
        <CartHeader empty={empty} />

        {empty ? <span className='py-10 text-xl'>Корзина пока пуста.</span> : <OrderList />}

        {!empty && <CartFooter totalPrice={totalPrice} />}
      </div>
    </section>
  )
}
