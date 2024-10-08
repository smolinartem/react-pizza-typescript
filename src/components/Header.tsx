/* import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
// - hooks
import { useMenuClose } from '../hooks/useMenuClose'
// - components
import Logo from './Logo'
import Navigation from './Navigation'
import ButtonCart from './ButtonCart'
import ButtonBurger from './ButtonBurger'
import SideBarMenu from './SideBarMenu'
import ButtonAccount from './ButtonAccount'
import ButtonAuth from './ButtonAuth' */

import { CupSoda, Percent, Phone, Pizza, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  /*   const { userInfo } = useSelector((state: RootState) => state.user)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const handleClose = () => setMenuOpen(false)
  useMenuClose(menuOpen, handleClose) */

  const link_class = 'flex flex-col gap-1 items-center size-14'
  const title_class = 'block text-xs'
  const accent_color = '#D92121'
  const default_color = '#525252'
  return (
    <header className='z-40 fixed bottom-0 w-full h-20 bg-white'>
      <div className='container flex items-center justify-between h-full rounded-t-xl shadow-one bg-white'>
        <NavLink className={link_class} to='/'>
          {({ isActive }) => (
            <>
              <Pizza color={isActive ? accent_color : default_color} />
              <span className={title_class}>Пиццы</span>
            </>
          )}
        </NavLink>

        <NavLink className={link_class} to='drinks'>
          {({ isActive }) => (
            <>
              <CupSoda color={isActive ? accent_color : default_color} />
              <span className={title_class}>Напитки</span>
            </>
          )}
        </NavLink>

        <NavLink className={link_class} to='promos'>
          {({ isActive }) => (
            <>
              <Percent color={isActive ? accent_color : default_color} />
              <span className={title_class}>Акции</span>
            </>
          )}
        </NavLink>

        <NavLink className={link_class} to='contacts'>
          {({ isActive }) => (
            <>
              <Phone color={isActive ? accent_color : default_color} />
              <span className={title_class}>Контакты</span>
            </>
          )}
        </NavLink>

        <NavLink className={link_class} to='profile'>
          {({ isActive }) => (
            <>
              <UserRound color={isActive ? accent_color : default_color} />
              <span className={title_class}>Профиль</span>
            </>
          )}
        </NavLink>

        {/* <NavLink className={link_class} to='cart'>
          <ShoppingBasket />
          <span className={title_class}>Корзина</span>
        </NavLink> */}
      </div>
    </header>
  )
}

{
  /* <>
      <header className='fixed w-full inset-0 z-40 h-16 md:h-24'>
        <div className='container max-w-screen-xl flex justify-between items-center h-full rounded-b-xl shadow-one bg-white'>
          <Logo onClose={handleClose} />
          <Navigation />
          <div className='flex items-center gap-4'>
            {userInfo ? <ButtonAccount /> : <ButtonAuth />}
            <ButtonCart onClose={handleClose} />
            <ButtonBurger onToggle={toggleMenu} isOpen={menuOpen} />
          </div>
        </div>
      </header>
      <SideBarMenu isOpen={menuOpen} onClose={handleClose} />
    </> */
}
