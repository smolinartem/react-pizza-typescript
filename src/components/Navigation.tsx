import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constants'

export default function Navigation() {
  return (
    <nav className='hidden md:flex md:gap-x-8 md:items-center md:text-xl md:font-bold'>
      {NAV_LINKS.map((link) => (
        <NavLink
          className={({ isActive }) => (isActive ? 'text-accent' : 'text-stone-800')}
          key={link.name}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
