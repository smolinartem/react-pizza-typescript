import { useState } from 'react'

import Popup from './Popup'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

type PopupAuthProps = {
  isOpen: boolean
  onClose: () => void
}

type action = 'login' | 'register'

export default function PopupAuth({ isOpen, onClose }: PopupAuthProps) {
  const [action, setAction] = useState<action>('register')

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      {action === 'register' ? <SignUpForm /> : <SignInForm />}
      <button
        type='button'
        className='mt-4 text-center w-full'
        onClick={() => setAction(action === 'login' ? 'register' : 'login')}
      >
        {action === 'register' ? 'Зарегистрироваться' : 'Вход'}
      </button>
    </Popup>
  )
}
