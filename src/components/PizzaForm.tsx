import isEqual from 'lodash.isequal'
import { useSelector, useDispatch } from 'react-redux'
import { changeSize, changeThickness, updateToppings } from '../store/option/optionSlice'
import { addOrder, increaseAmount } from '../store/order/orderSlice'
import type { RootState } from '../store/store'
import type { Product } from '../types/index.types'

import { PRICE, WEIGHT } from '../utils/server'

import { calculatePizza } from '../utils/helpers'

type PizzaFormProps = {
  pizza: Product
  onClose: () => void
}

const PizzaForm = ({ pizza, onClose }: PizzaFormProps) => {
  const dispatch = useDispatch()
  const option = useSelector((state: RootState) => state.option)
  const order = useSelector((state: RootState) => state.order)

  /*   const [length, setLength] = useState('20')
  useEffect(() => {
    setLength('20')
  }, []) */

  const weight = calculatePizza(option, WEIGHT)
  const price = calculatePizza(option, PRICE)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newOrder = {
      name: pizza.name,
      image: pizza.image,
      description: pizza.description,
      size: option.size,
      thickness: option.thickness,
      toppings: option.toppings,
      price: price,
      amount: 1,
    }

    if (order.length === 0) {
      dispatch(addOrder(newOrder))
    } else {
      const index = order.findIndex((item) => {
        return (
          item.name === newOrder.name &&
          item.size === newOrder.size &&
          item.thickness === newOrder.thickness &&
          isEqual(item.toppings, newOrder.toppings)
        )
      })

      index === -1 ? dispatch(addOrder(newOrder)) : dispatch(increaseAmount(index))
    }

    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <span className='text-lg font-bold block'>Вес: {weight} г</span>

      <div className='flex gap-2 sm:gap-3'>
        <label className='form-label text-center'>
          <input
            onChange={(e) => dispatch(changeSize(e.target.value))}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='small'
            checked={option.size === 'small'}
          />
          20
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => dispatch(changeSize(e.target.value))}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='medium'
            checked={option.size === 'medium'}
          />
          25
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => dispatch(changeSize(e.target.value))}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='large'
            checked={option.size === 'large'}
          />
          30
        </label>
      </div>

      <div className='flex gap-2 sm:gap-3'>
        <label className='form-label text-center'>
          <input
            onChange={(e) => dispatch(changeThickness(e.target.value))}
            className='appearance-none hidden m-0'
            name='thickness'
            type='radio'
            value='thin'
            checked={option.thickness === 'thin'}
          />
          Тонкое
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => dispatch(changeThickness(e.target.value))}
            className='appearance-none hidden m-0'
            name='thickness'
            type='radio'
            value='lush'
            checked={option.thickness === 'lush'}
          />
          Пышное
        </label>
      </div>

      <div className='flex flex-col gap-2 sm:gap-3 grow'>
        <label className='form-label'>
          <input
            onChange={(e) =>
              dispatch(updateToppings({ value: e.target.value, checked: e.target.checked }))
            }
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='cheese'
            checked={option.toppings.includes('cheese')}
          />
          Сыр Моцарелла: {PRICE.toppings.cheese} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) =>
              dispatch(updateToppings({ value: e.target.value, checked: e.target.checked }))
            }
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='jalapeno'
            checked={option.toppings.includes('jalapeno')}
          />
          Халапеньо: {PRICE.toppings.jalapeno} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) =>
              dispatch(updateToppings({ value: e.target.value, checked: e.target.checked }))
            }
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='mushrooms'
            checked={option.toppings.includes('mushrooms')}
          />
          Шампиньоны: {PRICE.toppings.mushrooms} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) =>
              dispatch(updateToppings({ value: e.target.value, checked: e.target.checked }))
            }
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='ham'
            checked={option.toppings.includes('ham')}
          />
          Ветчина: {PRICE.toppings.ham} &#8381;
        </label>
      </div>

      <button
        className='p-4 font-title text-sm uppercase rounded-md bg-accent text-white hover:opacity-80'
        type='submit'
      >
        Добавить за <span className='text-lg'>{price}</span> Р
      </button>
    </form>
  )
}
export default PizzaForm
