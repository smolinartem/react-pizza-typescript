import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
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

import { CupSoda, LogIn, Pizza, ShoppingCart, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  const { userInfo } = useSelector((state: RootState) => state.user)
  /*   const { userInfo } = useSelector((state: RootState) => state.user)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const handleClose = () => setMenuOpen(false)
  useMenuClose(menuOpen, handleClose) */

  return (
    <header className='z-40 fixed bottom-0 w-full h-16 bg-white'>
      <div className='container flex items-center justify-between h-full rounded-t-xl shadow-one bg-white'>
        <Link className='flex-center size-10 rounded-full border' to='/'>
          <Pizza />
        </Link>

        <Link className='flex-center size-10 rounded-full border' to='drinks'>
          <CupSoda />
        </Link>

        {userInfo ? (
          <Link className='flex-center size-10 rounded-full border' to='/'>
            <UserRound />
          </Link>
        ) : (
          <Link className='flex-center size-10 rounded-full border' to='/'>
            <LogIn />
          </Link>
        )}

        <Link className='flex-center size-10 rounded-full border' to='drinks'>
          <ShoppingCart />
        </Link>
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
