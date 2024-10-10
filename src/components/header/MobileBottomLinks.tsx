import { NavLink } from 'react-router-dom'
import { CupSoda, Percent, Phone, Pizza, UserRound } from 'lucide-react'

const links = [
  {
    path: '/',
    icon: Pizza,
    title: 'Пиццы',
  },
  {
    path: 'drinks',
    icon: CupSoda,
    title: 'Напитки',
  },
  {
    path: 'promos',
    icon: Percent,
    title: 'Акции',
  },
  {
    path: 'contacts',
    icon: Phone,
    title: 'Контакты',
  },
  {
    path: 'profile',
    icon: UserRound,
    title: 'Профиль',
  },
]

export default function MobileBottomLinks() {
  return (
    <nav className='z-40 fixed bottom-0 w-full h-20'>
      <div className='container max-w-screen-xl flex items-center justify-between h-full rounded-t-xl shadow-one bg-white'>
        {links.map(({ path, icon: Icon, title }) => (
          <NavLink key={path} className='flex flex-col gap-1 items-center size-14' to={path}>
            {({ isActive }) => (
              <>
                <Icon color={isActive ? '#D92121' : '#525252'} />
                <span className='block text-xs'>{title}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
