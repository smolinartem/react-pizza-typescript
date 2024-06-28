import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { clearOrder, deleteItem, increaseAmount, decreaseAmount } from '../store/order/orderSlice'
import { RU_NAMES } from '../utils/constants'
import { translateToppings } from '../utils/translateToppings'

const Cart = () => {
  const navigate = useNavigate()
  const order = useSelector((state: RootState) => state.order)
  const dispatch = useDispatch()
  const empty = order.length === 0
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.amount, 0)

  return (
    <section>
      <div className='section-container'>
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
              /* Карточка товара */
              <li className='flex bg-white rounded-lg p-4 shadow-container' key={index}>
                <div className='shrink-0 w-24 h-24 rounded-full overflow-hidden bg-gray-200'>
                  <img src={item.image} alt={item.name} className='object-cover object-center' />
                </div>

                <div className='flex flex-col sm:flex-row items-center ml-4 w-full'>
                  <div className='grow'>
                    <h5 className='text-2xl'>{item.name}</h5>
                    <span className='cart__options'>
                      {`${RU_NAMES[item.size]}, ${RU_NAMES[item.thickness]}`}
                      {item.toppings.length === 0
                        ? ''
                        : `, Добавить: ${translateToppings(item.toppings)}`}
                    </span>
                  </div>

                  <div className='flex items-center gap-4'>
                    {/* Счётчик колличества */}
                    <div className='w-28 flex items-center justify-between'>
                      <button
                        className='w-10 h-10 rounded-full hover:opacity-8 border bg-minus bg-with-image'
                        disabled={item.amount === 1}
                        onClick={() => dispatch(decreaseAmount(index))}
                      />
                      <span className='text-2xl'>{item.amount}</span>
                      <button
                        className='w-10 h-10 rounded-full hover:opacity-8 border bg-plus bg-with-image'
                        onClick={() => dispatch(increaseAmount(index))}
                      />
                    </div>

                    {/* Цена */}
                    <span className='text-center font-semibold text-xl md:text-2xl'>
                      {item.price * item.amount}&#8381;
                    </span>

                    {/* Корзина */}
                    <button
                      onClick={() => dispatch(deleteItem(index))}
                      className='bg-trash bg-no-repeat bg-center hover:bg-sky-100 rounded-full w-10 h-10'
                    />
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        {empty ? null : (
          <div className='py-8 flex items-center justify-between'>
            <span className='text-xl font-semibold'>Сумма заказа: {totalPrice}&#8381;</span>
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
