import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='mt-20 md:mt-32'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
