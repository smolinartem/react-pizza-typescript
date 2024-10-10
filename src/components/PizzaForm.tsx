import isEqual from 'lodash.isequal'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder, increaseAmount } from '../store/order/orderSlice'
import type { RootState } from '../store/store'
import type { Product } from '../types/index.types'

import { PRICE } from '../utils/server'

import { usePizzaForm } from '../hooks/usePizzaForm'

type PizzaFormProps = {
  pizza: Product
  onClose: () => void
  isOpen: boolean
}

const PizzaForm = ({ pizza, onClose, isOpen }: PizzaFormProps) => {
  const dispatch = useDispatch()
  const order = useSelector((state: RootState) => state.order)
  const { selected, price, weight, actions } = usePizzaForm(isOpen)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newOrder = {
      name: pizza.name,
      image: pizza.image,
      description: pizza.description,
      size: selected.size,
      thickness: selected.thickness,
      toppings: selected.toppings,
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
            onChange={(e) => actions.chooseSize(e)}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='small'
            checked={selected.size === 'small'}
          />
          20
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => actions.chooseSize(e)}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='medium'
            checked={selected.size === 'medium'}
          />
          25
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => actions.chooseSize(e)}
            className='appearance-none hidden m-0'
            name='size'
            type='radio'
            value='large'
            checked={selected.size === 'large'}
          />
          30
        </label>
      </div>

      <div className='flex gap-2 sm:gap-3'>
        <label className='form-label text-center'>
          <input
            onChange={(e) => actions.chooseThickness(e)}
            className='appearance-none hidden m-0'
            name='thickness'
            type='radio'
            value='thin'
            checked={selected.thickness === 'thin'}
          />
          Тонкое
        </label>
        <label className='form-label text-center'>
          <input
            onChange={(e) => actions.chooseThickness(e)}
            className='appearance-none hidden m-0'
            name='thickness'
            type='radio'
            value='lush'
            checked={selected.thickness === 'lush'}
          />
          Пышное
        </label>
      </div>

      <div className='flex flex-col gap-2 sm:gap-3 grow'>
        <label className='form-label'>
          <input
            onChange={(e) => actions.chooseToppings(e)}
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='cheese'
            checked={selected.toppings.includes('cheese')}
          />
          Сыр Моцарелла: {PRICE.toppings.cheese} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) => actions.chooseToppings(e)}
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='jalapeno'
            checked={selected.toppings.includes('jalapeno')}
          />
          Халапеньо: {PRICE.toppings.jalapeno} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) => actions.chooseToppings(e)}
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='mushrooms'
            checked={selected.toppings.includes('mushrooms')}
          />
          Шампиньоны: {PRICE.toppings.mushrooms} &#8381;
        </label>
        <label className='form-label'>
          <input
            onChange={(e) => actions.chooseToppings(e)}
            className='appearance-none hidden m-0'
            name='toppings'
            type='checkbox'
            value='ham'
            checked={selected.toppings.includes('ham')}
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
