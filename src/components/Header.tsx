import { useState } from 'react'
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
import ButtonAuth from './ButtonAuth'

export default function Header() {
  const user = useSelector((state: RootState) => state.user.user)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const handleClose = () => setMenuOpen(false)
  useMenuClose(menuOpen, handleClose)

  console.log(user)

  return (
    <>
      <header className='fixed w-full inset-0 z-40 h-16 md:h-24'>
        <div className='container max-w-screen-xl flex justify-between items-center h-full rounded-b-xl shadow-one bg-white'>
          <Logo onClose={handleClose} />
          <Navigation />
          <div className='flex items-center gap-4'>
            {user ? <ButtonAccount /> : <ButtonAuth />}
            <ButtonCart onClose={handleClose} />
            <ButtonBurger onToggle={toggleMenu} isOpen={menuOpen} />
          </div>
        </div>
      </header>
      <SideBarMenu isOpen={menuOpen} onClose={handleClose} />
    </>
  )
}
