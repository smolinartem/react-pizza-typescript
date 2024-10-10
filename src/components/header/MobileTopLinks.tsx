import { NavLink } from 'react-router-dom'
import { ShoppingBasket, Truck } from 'lucide-react'

export default function MobileTopLinks() {
  return (
    <nav className='z-40 fixed top-0 w-full h-20'>
      <div className='container max-w-screen-xl flex items-center justify-between h-full rounded-b-xl shadow-one bg-white'>
        <button className='flex flex-col gap-1 items-center size-14'>
          <Truck color='#525252' />
          <span className='block text-xs'>Доставка</span>
        </button>

        <NavLink className='flex flex-col gap-1 items-center size-14' to='cart'>
          {({ isActive }) => (
            <>
              <ShoppingBasket color={isActive ? '#D92121' : '#525252'} />
              <span className='block text-xs'>Корзина</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  )
}
