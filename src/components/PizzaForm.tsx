import { useSelector, useDispatch } from 'react-redux'
import { changeSize, changeThickness, updateToppings } from '../store/option/optionSlice'
import { addOrder } from '../store/order/orderSlice'
import type { RootState } from '../store/store'
import type { Pizza } from '../types/index.types'

import { PRICE, WEIGHT } from '../utils/server'

import { calculatePizza } from '../utils/helpers'

type PizzaFormProps = {
  pizza: Pizza
  onClose: () => void
}

const PizzaForm = ({ pizza, onClose }: PizzaFormProps) => {
  const dispatch = useDispatch()
  const option = useSelector((state: RootState) => state.option)

  const weight = calculatePizza(option.size, option.thickness, option.toppings, WEIGHT)
  const price = calculatePizza(option.size, option.thickness, option.toppings, PRICE)

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
    dispatch(addOrder(newOrder))

    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <span className='text-lg font-bold text-neutral-600'>Вес: {weight} г</span>
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

      <button className='p-4 border rounded-md bg-accent text-white hover:opacity-80' type='submit'>
        Добавить в корзину {price} &#8381;
      </button>
    </form>
  )
}
export default PizzaForm
