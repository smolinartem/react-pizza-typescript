import { Order } from '../../store/order/orderSlice'
import { PizzaOrder } from '../../types/index.types'
import { RU_NAMES } from '../../utils/constants'
import { translateToppings } from '../../utils/helpers'

type OrderInfoProps = {
  item: Order
}

export default function OrderInfo({ item }: OrderInfoProps) {
  function isPizzaOrder(order: unknown): order is PizzaOrder {
    return (
      typeof order === 'object' &&
      order != null &&
      'size' in order &&
      'thickness' in order &&
      'toppings' in order
    )
  }

  const isPizza = isPizzaOrder(item)

  return (
    <div className='flex flex-col gap-1 justify-center'>
      <h5 className='text-xs md:text-base text-stone-600 font-title uppercase tracking-wide'>
        {item.name}
      </h5>

      {isPizza ? (
        <>
          <span className='text-xs md:text-sm block'>{`${RU_NAMES[item.size]}, ${
            RU_NAMES[item.thickness]
          }`}</span>
          <span className='text-xs md:text-sm block'>
            {item.toppings.length !== 0 && `Добавить: ${translateToppings(item.toppings)}`}
          </span>
        </>
      ) : (
        <span className='text-sm'>{item.description}</span>
      )}
    </div>
  )
}
