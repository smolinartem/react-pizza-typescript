import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../utils/constants'
import classNames from 'classnames'

type SideBarProps = {
  isOpen: boolean
  onClose: () => void
}

export default function SideBarMenu({ isOpen, onClose }: SideBarProps) {
  return (
    <div
      className={classNames(
        isOpen ? 'w-full sm:w-2/4 opened' : 'w-0',
        'fixed top-0 bottom-0 right-0 z-20 pt-16 bg-white overflow-y-auto flex flex-col items-end sm:border-l transition-all duration-300 md:hidden'
      )}
    >
      <nav className='py-8 px-10 flex flex-col gap-y-6 w-full text-xl font-bold'>
        {NAV_LINKS.map((link) => (
          <NavLink
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'text-accent' : 'text-neutral-600')}
            key={link.name}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
