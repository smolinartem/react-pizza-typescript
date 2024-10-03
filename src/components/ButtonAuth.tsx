import { LogIn } from 'lucide-react'
import { useState } from 'react'
import PopupAuth from './PopupAuth'

export default function ButtonAuth() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='flex-center relative size-10 md:size-12 circle-animation'
      >
        <LogIn color='#292524' strokeWidth={1.75} size={28} />
      </button>
      <PopupAuth isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
