import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

type action = 'register' | 'login'
export default function AuthPage() {
  const [action, setAction] = useState<action>('register')
  return (
    <div className='section-container'>
      <div className='flex gap-4 items-center justify-center mb-4'>
        <button
          className={`${
            action === 'register' ? 'text-red-600' : 'text-stone-600'
          } font-title uppercase`}
          onClick={() => setAction('register')}
        >
          Регистрация
        </button>
        <button
          className={`${
            action === 'login' ? 'text-red-600' : 'text-stone-600'
          } font-title uppercase`}
          onClick={() => setAction('login')}
        >
          Вход
        </button>
      </div>
      <div>
        {action === 'register' && <SignUpForm />}
        {action === 'login' && <SignInForm />}
      </div>
    </div>
  )
}
