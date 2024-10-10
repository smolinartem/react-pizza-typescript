import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='my-24'>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  )
}
