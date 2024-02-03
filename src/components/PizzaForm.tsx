import { useSelector, useDispatch } from 'react-redux'
import { changeSize, changeThickness, updateToppings } from '../store/option/optionSlice'
import { addOrder } from '../store/order/orderSlice'
import type { RootState } from '../store/store'

import { calculateWeight, calculatePrice } from '../utils/calculations'
import { PRICE } from '../utils/server'
import { IPizza } from '../types/pizza.types'

interface Props {
  selectedPizza: IPizza
  onPopupClose: () => void
}

const PizzaForm = ({ selectedPizza, onPopupClose }: Props) => {
  const dispatch = useDispatch()
  const option = useSelector((state: RootState) => state.option)

  const weight = calculateWeight({
    size: option.size,
    thickness: option.thickness,
    toppings: option.toppings,
  })
  const price = calculatePrice({
    size: option.size,
    thickness: option.thickness,
    toppings: option.toppings,
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newOrder = {
      name: selectedPizza.name,
      image: selectedPizza.image,
      description: selectedPizza.description,
      size: option.size,
      thickness: option.thickness,
      toppings: option.toppings,
      price: price,
    }

    dispatch(addOrder(newOrder))
    console.log(newOrder)

    onPopupClose()
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <span className='text-sm'>Вес: {weight} г</span>
      <div className='flex gap-3'>
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

      <div className='flex gap-3'>
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

      <div className='flex flex-col gap-3 grow'>
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
          Сыр Моцарелла: {PRICE.toppings.cheese}р
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
          Халапеньо: {PRICE.toppings.jalapeno}р
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
          Шампиньоны: {PRICE.toppings.mushrooms}р
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
          Ветчина: {PRICE.toppings.ham}р
        </label>
      </div>

      <button className='p-4 border rounded-md bg-accent text-white hover:opacity-80' type='submit'>
        Добавить в корзину {price}р
      </button>
    </form>
  )
}
export default PizzaForm
