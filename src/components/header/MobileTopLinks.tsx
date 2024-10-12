import ButtonCart from '../buttons/ButtonCart'
import ButtonDelivery from '../buttons/ButtonDelivery'

export default function MobileTopLinks() {
  return (
    <nav className='z-40 fixed top-0 w-full h-20'>
      <div className='container max-w-screen-xl flex items-center justify-between h-full rounded-b-xl shadow-one bg-white'>
        <ButtonDelivery />

        <ButtonCart />
      </div>
    </nav>
  )
}
