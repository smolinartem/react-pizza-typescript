import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store/store'
import { RU_NAMES } from '../utils/constants'
import { translateToppings } from '../utils/helpers'
import { toast } from 'react-toastify'
import { createOrder } from '../store/user/userSlice'
import { clearOrder } from '../store/order/orderSlice'
import { useNavigate } from 'react-router-dom'
export default function OrderPage() {
  const dispatch = useDispatch()
  const { userAddresses } = useSelector((state: RootState) => state.user)
  const order = useSelector((state: RootState) => state.order)

  const navigate = useNavigate()

  const selecedAddress = userAddresses.find((a) => a.selected)
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.amount, 0)

  const notify = () =>
    toast.error(<span className='font-body text-sm'>Добавьте адрес доставка</span>, {
      autoClose: 3000,
      position: 'bottom-center',
      closeOnClick: true,
      pauseOnHover: false,
    })

  const handleCreateOrder = () => {
    if (!selecedAddress) {
      notify()
      return
    }

    const confirmedOrder = {
      products: order,
      address: selecedAddress.value,
      totalPrice,
    }
    dispatch(createOrder(confirmedOrder))
    dispatch(clearOrder())
    navigate('/', { replace: true })
  }

  return (
    <div className='section-container flex flex-col gap-6'>
      <h3 className='font-title uppercase text-xl text-stone-600'>Оформление заказа</h3>

      <div className='flex flex-col gap-2'>
        <span className='block font-title uppercase text-lg text-stone-600'>
          доставка по адресу:
        </span>
        <span className='block uppercase font-semibold'>
          {selecedAddress ? selecedAddress.value : 'Добавьте адрес доставки.'}
        </span>
      </div>

      <div className='max-w-md flex flex-col gap-6'>
        <div className='flex flex-col gap-4'>
          <span className='block font-title uppercase text-lg text-stone-600'>Состав заказа:</span>
          {order.length > 0 &&
            order.map((order, index) => (
              <div key={index} className='w-full border-b-2 mb-4'>
                <div className='w-full flex justify-between items-center gap-2 mb-1'>
                  <span className='text-xs font-bold uppercase grow'>{order.name}</span>
                  <span className='text-sm w-16'>{order.amount} шт</span>
                  <span className='text-sm text-right font-semibold w-16'>{order.price} р</span>
                </div>
                <div className='flex gap-2 mb-1'>
                  <span className='block text-sm'>{order.size ? RU_NAMES[order.size] : ''}</span>
                  <span className='block text-sm'>
                    {order.thickness ? RU_NAMES[order.thickness] : ''}
                  </span>
                </div>
                <span className='block text-sm mb-2'>
                  {order.toppings ? translateToppings(order.toppings) : ''}
                </span>
              </div>
            ))}
        </div>

        <div className='flex gap-2'>
          <span className='block font-title uppercase text-lg text-stone-600'>К оплате:</span>
          <span className='block font-title uppercase text-lg text-stone-600'>{totalPrice} P</span>
        </div>

        <button onClick={() => handleCreateOrder()} className='button w-full font-title uppercase'>
          Заказать
        </button>
      </div>
    </div>
  )
}
