import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { deleteUser } from '../../store/user/userSlice'
import { Cake, LogOut, Mail, Phone, Settings, UserRound } from 'lucide-react'
import PopupProfileEdit from '../popup/PopupProfileEdit'
import PopupPasswordEdit from '../popup/PopupPasswordEdit'

export default function UserData() {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [popupSettingsOpen, setPopupSettingsOpen] = useState(false)
  const [popupPasswordOpen, setPopupPasswordOpen] = useState(false)

  if (userInfo === null) return null
  return (
    <div>
      <ul className='grid gap-2 h-max w-full mb-10 md:rounded-xl md:shadow-one md:px-4 md:py-6'>
        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <UserRound size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваше имя</span>
            <span className='text-sm'>{userInfo.name}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Mail size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш email</span>
            <span className='text-sm'>{userInfo.email}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Phone size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш телефон</span>
            <span className='text-sm'>{userInfo.phone ? userInfo.phone : 'Не указан'}</span>
          </div>
        </li>

        <li className='flex gap-2'>
          <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
            <Cake size={40} strokeWidth={1.5} color='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-xs text-stone-800 font-semibold'>Ваш день рождения</span>
            <span className='text-sm'>{userInfo.birthday ? userInfo.birthday : 'Не указан'}</span>
          </div>
        </li>

        <div className='mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-rows-3 md:grid-cols-1 xl:grid-cols-3 xl:grid-rows-1 items-center gap-2'>
          <button
            onClick={() => setPopupSettingsOpen(true)}
            className='flex items-center justify-center gap-1 border-2 py-4 rounded-lg uppercase text-xs font-semibold hover:text-accent'
          >
            <Settings size={20} strokeWidth={1.5} />
            Редактировать
          </button>

          <button
            onClick={() => setPopupPasswordOpen(true)}
            className='flex items-center justify-center gap-1 border-2 py-4 rounded-lg uppercase text-xs font-semibold hover:text-accent'
          >
            <Settings size={20} strokeWidth={1.5} />
            Сменить пароль
          </button>

          <button
            className='flex col-span-2 sm:col-span-1 items-center justify-center gap-1 border-2 py-4 rounded-lg uppercase text-xs font-semibold hover:text-accent'
            onClick={() => dispatch(deleteUser())}
          >
            <LogOut size={20} strokeWidth={1.5} />
            Выйти
          </button>
        </div>

        {
          <PopupProfileEdit
            isOpen={popupSettingsOpen}
            onClose={() => setPopupSettingsOpen(false)}
          />
        }
        {
          <PopupPasswordEdit
            isOpen={popupPasswordOpen}
            onClose={() => setPopupPasswordOpen(false)}
          />
        }
      </ul>
    </div>
  )
}
