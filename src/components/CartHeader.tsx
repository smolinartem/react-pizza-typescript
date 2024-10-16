import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearOrder } from '../store/order/orderSlice'

import { ArrowLeft, Trash2 } from 'lucide-react'

export default function CartHeader({ empty }: { empty: boolean }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className='mb-6 flex items-center justify-between'>
      <div className='flex gap-4 items-center justify-between'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='button-order'
        >
          <ArrowLeft color='#292524' strokeWidth={1.5} />
        </button>
        <h4 className='text-2xl font-title uppercase'>Корзина</h4>
      </div>

      {!empty && (
        <>
          <button
            className='hidden sm:block border-2 py-2 px-4 rounded-md transition-all duration-300 hover:border-accent'
            onClick={() => dispatch(clearOrder())}
            type='button'
          >
            Очистить корзину
          </button>

          <button onClick={() => dispatch(clearOrder())} className='button-order sm:hidden'>
            <Trash2 color='#292524' strokeWidth={1.5} />
          </button>
        </>
      )}
    </div>
  )
}
