import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { deleteUser } from '../store/user/userSlice'
import { Cake, LogOut, Mail, Phone, Settings, UserRound } from 'lucide-react'
import { useState } from 'react'
import PopupProfileEdit from '../components/PopupProfileEdit'

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()

  const [settingsOpen, setSettingsOpen] = useState(false)

  console.log(user)

  return (
    <div className='section-container'>
      <h2 className='text-3xl font-semibold'>Профиль</h2>
      {user && (
        <div className='flex gap-6 my-8'>
          <ul className='py-6 px-8 grid grid-cols-2 rounded-xl gap-5 shadow-one h-max w-full'>
            <li className='flex gap-2'>
              <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
                <UserRound size={40} strokeWidth={1.5} color='white' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-stone-800'>Ваше имя</span>
                <span>{user.name}</span>
              </div>
            </li>

            <li className='flex gap-2'>
              <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
                <Mail size={40} strokeWidth={1.5} color='white' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-stone-800'>Ваш email</span>
                <span>{user.email}</span>
              </div>
            </li>

            <li className='flex gap-2'>
              <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
                <Phone size={40} strokeWidth={1.5} color='white' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-stone-800'>Ваш телефон</span>
                <span>{user.phone ? user.phone : 'Не указан'}</span>
              </div>
            </li>

            <li className='flex gap-2'>
              <div className='size-12 flex-center rounded-lg bg-accent shrink-0'>
                <Cake size={40} strokeWidth={1.5} color='white' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-stone-800'>Ваш день рождения</span>
                <span>{user.birthday ? user.birthday : 'Не указан'}</span>
              </div>
            </li>

            <div className='col-span-2 flex items-center justify-between'>
              <button
                className='flex gap-2 border-2 px-4 py-2 rounded-lg'
                onClick={() => dispatch(deleteUser())}
              >
                <LogOut size={20} strokeWidth={1.5} />
                Выйти
              </button>

              <button
                onClick={() => setSettingsOpen(true)}
                className='flex gap-2 border-2 px-4 py-2 rounded-lg'
              >
                <Settings size={20} strokeWidth={1.5} />
                Редактировать
              </button>

              <button className='flex gap-2 border-2 px-4 py-2 rounded-lg'>
                <Settings size={20} strokeWidth={1.5} />
                Сменить пароль
              </button>
            </div>
          </ul>

          <div className='py-6 px-8 rounded-xl gap-5 shadow-one max-w-2xl'>
            <h2>Избранные продукты</h2>
            {user.favourite && (
              <ul className='flex flex-col gap-4'>
                {user.favourite.map((fav) => (
                  <li key={fav.name} className='flex gap-2'>
                    <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white'>
                      <img src={fav.image} alt={fav.name} className='object-cover object-center' />
                    </div>

                    <div className='flex flex-col justify-center'>
                      <span className='text-sm text-stone-800 font-semibold'>{fav.name}</span>
                      <span className='text-xs text-stone-800'>{fav.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {settingsOpen && (
        <PopupProfileEdit isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      )}
    </div>
  )
}
