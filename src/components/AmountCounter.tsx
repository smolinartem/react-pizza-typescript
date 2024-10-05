import { useDispatch } from 'react-redux'
import { decreaseAmount, increaseAmount } from '../store/order/orderSlice'
import { Minus, Plus } from 'lucide-react'

type AmountCounterProps = {
  amount: number
  index: number
}

export default function AmountCounter({ amount, index }: AmountCounterProps) {
  const dispatch = useDispatch()
  return (
    <div className='w-32 flex items-center justify-between'>
      <button
        type='button'
        className={`size-10 flex-center border transition-all duration-300 rounded-full ${
          amount !== 1 && 'hover:border-accent'
        }`}
        disabled={amount === 1}
        onClick={() => dispatch(decreaseAmount(index))}
      >
        <Minus color='#292524' strokeWidth={1} />
      </button>
      <span className='text-2xl'>{amount}</span>
      <button
        type='button'
        className='button-order'
        onClick={() => dispatch(increaseAmount(index))}
      >
        <Plus color='#292524' strokeWidth={1} />
      </button>
    </div>
  )
}
