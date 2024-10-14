import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { RU_NAMES } from '../../utils/constants'
import { translateToppings } from '../../utils/helpers'
export default function UserOrdersList() {
  const { userInfo, userOrders } = useSelector((state: RootState) => state.user)

  if (userInfo === null) return null
  if (userOrders.length === 0) return <span className='block text-center'>Пока нет заказов.</span>
  return (
    <div>
      <ul>
        {userOrders.map((order, index) => (
          <li key={index} className='border-b-2 py-4'>
            <div className='flex justify-between pb-5'>
              <span className='block font-title uppercase text-xs text-stone-600'>
                {order.status}
              </span>
              <span className='block font-title uppercase text-xs text-stone-600'>
                {order.time}
              </span>
              <span className='block font-title uppercase text-xs text-stone-600'>
                {order.totalPrice} р
              </span>
            </div>
            {order.products.map((product, index) => (
              <div key={index} className='w-full mb-6'>
                <div className='w-full flex justify-between items-center gap-2 mb-1'>
                  <span className='text-xs font-bold uppercase grow'>{product.name}</span>
                  <span className='text-sm w-16'>{product.amount} шт</span>
                  <span className='text-sm text-right font-semibold w-16'>{product.price} р</span>
                </div>
                <div className='flex gap-2'>
                  <span className='block text-sm'>
                    {product.size ? RU_NAMES[product.size] : ''}
                  </span>
                  <span className='block text-sm'>
                    {product.thickness ? RU_NAMES[product.thickness] : ''}
                  </span>
                </div>
                <span className='block text-xs mb-2'>
                  {product.toppings ? translateToppings(product.toppings) : ''}
                </span>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}
