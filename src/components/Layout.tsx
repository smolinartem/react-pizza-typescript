import { Outlet } from 'react-router-dom'
import Header from './header/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='my-24'>
        <Outlet />
      </main>
    </>
  )
}
