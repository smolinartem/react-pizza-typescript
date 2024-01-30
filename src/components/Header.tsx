import { Link, NavLink } from 'react-router-dom'
const addActiveClass = (isActive: boolean): string => {
  return isActive ? 'text-red-500' : ''
}
export default function Header() {
  return (
    <header className='py-6'>
      <div className='container flex justify-between items-center'>
        <Link to='/' className='block w-10 h-10'>
          <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 64 64'>
            <path fill='#f6da77' d='M62.3 47.1C62.2 22.7 41.5 2.1 17.1 2L2.3 62l60-14.9' />
            <path
              fill='#860d16'
              d='m54.5 49 2.1-.4c-1-19-14.6-38.9-41-40.9l-.3 2C35.5 12.3 52 28.7 54.5 49'
            />
            <path
              fill='#c98e52'
              d='m56.5 48.6 5.7-1.4C62.3 22.8 41.5 2 16.9 2l-1.4 5.7c23.5 2.2 38.8 17.6 41 40.9z'
            />
            <g fill='#83bf4f'>
              <path d='M13.5 41.7c-1.7 0-3.2-.6-4.4-1.8-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.7 0 1.4 1.4 3.9 1.4 5.3 0 .7-.7 1.1-1.6 1.1-2.6s-.4-1.9-1.1-2.6c-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.7 0 1.2 1.2 1.8 2.7 1.8 4.4 0 1.7-.6 3.2-1.8 4.4-1.1.9-2.7 1.6-4.3 1.6M38.6 21.9v.5c-.1.3-.2.5-.5.7-.3.2-.6.2-.8.1-.8-.2-1.6 0-2.3.4-.7.4-1.2 1.1-1.4 1.9-.4 1.6.7 3.3 2.3 3.7.6.1 1 .8.8 1.3-.1.6-.7 1-1.3.8-2-.5-3.5-2-4-4-.2-.8-.2-1.6 0-2.3.3-1.4 1.2-2.5 2.4-3.3 1.2-.8 2.6-1 4-.7.3.2.7.5.8.9M43.9 50.9h-.5c-.3-.1-.5-.2-.6-.5-.1-.2-.2-.5-.1-.8.2-.7.1-1.5-.3-2.2-.4-.7-1-1.2-1.8-1.4-1.5-.4-3.2.6-3.6 2-.1.5-.8.9-1.3.7-.6-.2-.9-.7-.7-1.3.5-1.8 2-3.3 3.9-3.6.7-.1 1.5-.1 2.2.1 1.3.3 2.4 1.2 3 2.3.7 1.2.8 2.5.5 3.8 0 .5-.3.8-.7.9' />
            </g>
            <g fill='#b21725'>
              <path d='M37.1 36.2c1.4 4.1-.8 8.5-5 9.9-4.2 1.4-8.7-.8-10-4.9-1.4-4.1.8-8.5 5-9.9 4.1-1.4 8.6.8 10 4.9M49.6 37c.8 2.5-.5 5.1-3 6-2.5.8-5.2-.5-6-3-.8-2.5.5-5.1 3-6 2.4-.8 5.1.5 6 3M29 19c1.1 3.3-.7 7-4.1 8.1-3.4 1.1-7.1-.7-8.2-4-1.1-3.3.7-7 4.1-8.1 3.4-1.1 7.1.7 8.2 4M34.4 54l-9.7 2.4c-.9-2.6.9-5.7 3.5-6.4 3.2-.8 5.3 1.5 6.2 4M19.6 47c1.2 3.4-.7 7.2-4.2 8.3-3.5 1.2-7.3-.7-8.5-4.2-1.2-3.4.7-7.2 4.2-8.3 3.5-1.1 7.3.8 8.5 4.2' />
            </g>
            <path
              fill='#e0a763'
              d='M15.5 7.7c5.3.1 10.6 1.1 15.6 3.1 5 1.9 9.7 4.9 13.5 8.8 3.8 3.8 6.8 8.5 8.8 13.5 2 5 3 10.3 3.1 15.6-.9-5.2-2.3-10.3-4.5-15-2.2-4.7-5.1-9.1-8.8-12.7-3.6-3.7-8-6.6-12.7-8.7-4.7-2.3-9.8-3.7-15-4.6'
            />
            <g fill='#ffab41'>
              <path d='m16.794 13.436 1.98-1.98 1.98 1.98-1.98 1.98zM29.72 19.044l1.98-1.98 1.98 1.98-1.98 1.98zM12.908 26.448l1.98-1.98 1.98 1.98-1.98 1.98zM19.748 32.135l1.98-1.98 1.98 1.98-1.98 1.98zM37.545 32.39l1.98-1.98 1.98 1.98-1.98 1.98zM49.024 46.541l1.98-1.98 1.98 1.98-1.98 1.98zM19.617 44.652l1.98-1.98 1.98 1.98-1.98 1.98zM21.034 51.903l1.98-1.98 1.98 1.98-1.98 1.98zM4.338 58.241l1.98-1.98 1.98 1.98-1.98 1.98zM13.97 17.328l1.485-1.485 1.485 1.485-1.485 1.485zM26.552 27.893l1.485-1.485 1.485 1.485-1.485 1.485zM40.075 27.955l1.485-1.485 1.485 1.485-1.485 1.485zM13.436 36.164l1.485-1.485 1.485 1.485-1.485 1.485zM7.36 42.1l1.485-1.485 1.485 1.484-1.485 1.485zM5.03 54.485 6.515 53 8 54.485 6.515 55.97zM17.876 55.286l1.485-1.485 1.485 1.486-1.485 1.484zM30.778 48.346l1.485-1.485 1.485 1.485-1.485 1.485zM37.042 50.896l1.485-1.485 1.485 1.485-1.485 1.484zM45.376 45.17l1.485-1.484 1.485 1.485-1.485 1.485z' />
            </g>
          </svg>
        </Link>
        <nav className='hidden md:flex gap-x-8 items-center text-xl font-bold'>
          <NavLink className={({ isActive }) => addActiveClass(isActive)} to='/'>
            Пиццы
          </NavLink>
          <NavLink className={({ isActive }) => addActiveClass(isActive)} to='drinks'>
            Напитки
          </NavLink>
          <NavLink className={({ isActive }) => addActiveClass(isActive)} to='promos'>
            Акции
          </NavLink>
          <NavLink className={({ isActive }) => addActiveClass(isActive)} to='contacts'>
            Контакты
          </NavLink>
        </nav>
        <Link
          className='flex items-center gap-2 rounded-lg py-2 px-4 text-white bg-slate-700'
          to='cart'
        >
          <span>8</span>
          <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path d='M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z' />
            <circle cx='10.5' cy='19.5' r='1.5' />
            <circle cx='17.5' cy='19.5' r='1.5' />
          </svg>
        </Link>
      </div>
    </header>
  )
}