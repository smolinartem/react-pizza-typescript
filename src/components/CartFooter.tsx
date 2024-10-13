import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function CartFooter({ totalPrice }: { totalPrice: number }) {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  const notify = () =>
    toast.error(<span className='font-body text-sm'>Необходимо авторизоваться</span>, {
      autoClose: 2000,
      position: 'bottom-center',
      closeOnClick: true,
      pauseOnHover: false,
    })

  const handleCreateOrder = () => {
    if (userInfo === null) {
      notify()
      navigate('/auth', { replace: true, state: { from: 'cart' } })
    } else {
      navigate('/cart/order', { replace: true })
    }
  }

  return (
    <div className='py-8 flex items-center justify-between gap-2'>
      <span className='md:text-xl font-semibold text-center'>
        Сумма заказа: {totalPrice}&#8381;
      </span>
      <button
        onClick={handleCreateOrder}
        className='button text-sm p-2 md:text-base md:px-4'
        type='button'
      >
        Оформить заказ
      </button>
    </div>
  )
}
