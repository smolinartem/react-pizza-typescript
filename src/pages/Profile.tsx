import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { deleteUser } from '../store/user/userSlice'
import { Cake, LogOut, Mail, Phone, Settings, UserRound } from 'lucide-react'

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()
  console.log(user)

  return (
    <div className='section-container'>
      <h2 className='text-3xl font-semibold'>Профиль</h2>
      {user && (
        <div className='flex gap-6'>
          <ul className='py-6 px-8 my-8 grid grid-cols-2 rounded-xl gap-5 shadow-one w-fit'>
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

            <button
              className='flex gap-2 border-2 px-4 py-2 rounded-lg'
              onClick={() => dispatch(deleteUser())}
            >
              <LogOut size={20} strokeWidth={1.5} />
              Выйти
            </button>

            <button className='flex gap-2 border-2 px-4 py-2 rounded-lg'>
              <Settings size={20} strokeWidth={1.5} />
              Редактировать
            </button>
          </ul>
          <div className='py-6 px-8 my-8 rounded-xl gap-5 shadow-one w-fit'>
            <h2>Избранные продукты</h2>
            {user.favouriteProducts ? (
              <ul>
                {user.favouriteProducts.map((favorite) => (
                  <li key={favorite.name} className='flex gap-2'>
                    <img src={favorite.image} alt={favorite.name} />
                    <span className='text-xs text-stone-800'>{favorite.name}</span>
                    <span>{favorite.description}&#8381;</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='text-center'>Нет избранных продуктов</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
