import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/pizza.png'

import ButtonAccount from '@/components/buttons/ButtonAccount'
import ButtonCart from '@/components/buttons/ButtonCart'

const links = [
  {
    name: 'Пиццы',
    path: '/',
  },
  {
    name: 'Напитки',
    path: 'drinks',
  },
  {
    name: 'Акции',
    path: 'promos',
  },
  {
    name: 'Контакты',
    path: 'contacts',
  },
]
export default function LaptopLinks() {
  return (
    <nav className='z-40 fixed top-0 w-full h-20'>
      <div className='container max-w-screen-xl flex items-center justify-between h-full rounded-b-xl shadow-one bg-white'>
        <Link className='size-12' to='/'>
          <img src={logo} alt='Пицца.' className='h-full w-full object-cover object-center' />
        </Link>

        <div className='flex gap-4 items-center text-lg lg:text-xl lg:gap-8 font-title tracking-wide uppercase'>
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => (isActive ? 'text-accent' : 'text-stone-600')}
              key={link.name}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className='flex items-center'>
          <ButtonAccount />
          <ButtonCart />
        </div>
      </div>
    </nav>
  )
}
