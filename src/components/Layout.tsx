import { Outlet } from 'react-router-dom'
import Header from './Header'
export default function Layout() {
  return (
    <>
      <Header />
      <main className='md:mt-32 mt-20'>
        <Outlet />
      </main>
    </>
  )
}
