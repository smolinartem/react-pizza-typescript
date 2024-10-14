import { useState } from 'react'
import UserFavorites from './UserFavorites'
import UserOrdersList from './UserOrdersList'

type Action = 'favorites' | 'orders'
export default function UserHistory() {
  const [action, setAction] = useState<Action>('favorites')
  return (
    <div className='w-full min-h-80 md:rounded-xl md:shadow-one md:p-6'>
      <div className='flex gap-5 items-center justify-center mb-10'>
        <button
          className={`${
            action === 'favorites' ? 'text-red-600' : 'text-stone-600'
          } font-title uppercase`}
          onClick={() => setAction('favorites')}
        >
          Избранные товары
        </button>
        <button
          className={`${
            action === 'orders' ? 'text-red-600' : 'text-stone-600'
          } font-title uppercase`}
          onClick={() => setAction('orders')}
        >
          Ваши заказы
        </button>
      </div>

      {action === 'favorites' && <UserFavorites />}
      {action === 'orders' && <UserOrdersList />}
    </div>
  )
}
