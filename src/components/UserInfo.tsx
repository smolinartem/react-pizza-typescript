import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { deleteUser } from '../store/user/userSlice'
import { Cake, LogOut, Mail, Phone, Settings, UserRound } from 'lucide-react'
import PopupProfileEdit from './PopupProfileEdit'

export default function UserInfo() {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()

  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    user && (
      <ul className='grid gap-2 h-max w-full mb-6 md:rounded-xl md:shadow-one md:px-4 md:py-6'>
        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <UserRound size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваше имя</span>
            <span className='text-sm'>{user.name}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Mail size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш email</span>
            <span className='text-sm'>{user.email}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Phone size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш телефон</span>
            <span className='text-sm'>{user.phone ? user.phone : 'Не указан'}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Cake size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш день рождения</span>
            <span className='text-sm'>{user.birthday ? user.birthday : 'Не указан'}</span>
          </div>
        </li>

        <div className='flex flex-col items-end gap-1'>
          <button
            className='flex gap-1 pr-4 py-2 shrink-0 text-sm'
            onClick={() => dispatch(deleteUser())}
          >
            <LogOut size={20} strokeWidth={1.5} />
            Выйти
          </button>

          <button
            onClick={() => setSettingsOpen(true)}
            className='flex gap-1 pr-4 py-2 shrink-0 text-sm'
          >
            <Settings size={20} strokeWidth={1.5} />
            Редактировать
          </button>

          <button className='flex gap-1 pr-4 py-2 shrink-0 text-sm'>
            <Settings size={20} strokeWidth={1.5} />
            Сменить пароль
          </button>
        </div>

        {settingsOpen && (
          <PopupProfileEdit isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
        )}
      </ul>
    )
  )
}
