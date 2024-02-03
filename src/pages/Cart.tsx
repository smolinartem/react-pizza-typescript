import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { clearOrder, deleteItem } from '../store/order/orderSlice'
import { RU_NAMES } from '../utils/constants'
import { translateToppings } from '../utils/translateToppings'

const Cart = () => {
  const navigate = useNavigate()
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const empty = order.length === 0
  const totalPrice = order.reduce((acc, item) => acc + item.price, 0)

  return (
    <section>
      <div className='container shadow-container rounded-xl pt-6 mb-10'>
        <div className='pb-6 flex items-center justify-between'>
          <div className='flex gap-4 items-center justify-between'>
            <button
              onClick={() => {
                navigate(-1)
              }}
              className='bg-arrow bg-with-image hover:bg-sky-100 rounded-full w-10 h-10'
            />
            <h4 className='text-2xl'>Корзина</h4>
          </div>

          {empty ? null : (
            <button onClick={() => dispatch(clearOrder())} type='button'>
              Очистить корзину
            </button>
          )}
        </div>

        <ul className='flex flex-col gap-3'>
          {empty ? (
            <span className='py-10 text-2xl'>Корзина пуста</span>
          ) : (
            order.map((item, index) => (
              <li className='flex bg-white rounded-lg p-4 shadow-container' key={index}>
                <div className='aspect-h-1 aspect-w-1 w-24 h-24 rounded-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </div>

                <div className='flex items-center ml-4 w-full'>
                  <div className='grow'>
                    <h5 className='text-2xl'>{item.name}</h5>
                    <span className='cart__options'>
                      {`${RU_NAMES[item.size]}, ${RU_NAMES[item.thickness]}`}
                      {item.toppings.length === 0
                        ? ''
                        : `, Добавить: ${translateToppings(item.toppings)}`}
                    </span>
                  </div>

                  <span className='w-20 text-center font-semibold text-2xl'>{item.price}р</span>

                  <button
                    onClick={() => dispatch(deleteItem(index))}
                    className='bg-trash bg-no-repeat bg-center hover:bg-sky-100 rounded-full w-10 h-10'
                  />
                </div>
              </li>
            ))
          )}
        </ul>
        {empty ? null : (
          <div className='py-8 flex items-center justify-between'>
            <span className='text-xl font-semibold'>Сумма заказа: {totalPrice} р</span>
            <button className='button' type='button'>
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
