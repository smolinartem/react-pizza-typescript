import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store/store'
import { deleteUser, deleteFavoriteProduct } from '../store/user/userSlice'
import { ArrowLeft, Cake, LogOut, Mail, Phone, Settings, Trash, UserRound } from 'lucide-react'
import { useState } from 'react'
import PopupProfileEdit from '../components/PopupProfileEdit'

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [settingsOpen, setSettingsOpen] = useState(false)

  /*   const [selectionMenuOpen, setSelectionMenuOpen] = useState(false)
  const [selectedPizza, setSelectedPizza] = useState<Product | null>(null)

  const handlePopupOpen = (pizza: Product) => {
    dispatch(resetOptions())
    setSelectedPizza(pizza)
    setSelectionMenuOpen(true)
  }
  const handlePopupClose = () => {
    setSelectionMenuOpen(false)
  } */

  console.log(user)

  return (
    <div className='section-container'>
      <div className='flex gap-4 items-center'>
        <button
          onClick={() => {
            navigate(-1)
          }}
          className='button-order'
        >
          <ArrowLeft color='#292524' strokeWidth={1.5} />
        </button>
        <h2 className='text-2xl font-title uppercase'>Профиль</h2>
      </div>

      {user && (
        <div className='gap-6 mt-6 md:grid md:grid-cols-2 md:gap-4'>
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
          </ul>

          {user.favourite.length > 0 && (
            <div className='w-full md:rounded-xl md:shadow-one md:px-4 md:py-6'>
              <h2 className='text-xl mb-6 text-center'>Избранные продукты</h2>

              <ul className='flex flex-col gap-4'>
                {user.favourite.map((fav) => (
                  <li key={fav._id} className='flex items-center gap-2 w-full'>
                    <div className='shrink-0 size-24 rounded-full overflow-hidden bg-white'>
                      <img src={fav.image} alt={fav.name} className='object-cover object-center' />
                    </div>

                    <div className='flex flex-col gap-2 w-full sm:grow'>
                      <div className='flex items-center gap-2 w-full'>
                        <span className='text-sm text-stone-800 font-semibold grow'>
                          {fav.name}
                        </span>
                        <button
                          onClick={() => dispatch(deleteFavoriteProduct(fav))}
                          className='sm:hidden shrink-0 size-8 flex-center border transition-all duration-300 rounded-full hover:border-accent'
                        >
                          <Trash color='#292524' size={20} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className='text-xs text-stone-800'>{fav.description}</span>
                    </div>

                    <button
                      onClick={() => dispatch(deleteFavoriteProduct(fav))}
                      className='hidden shrink-0 size-8 sm:flex items-center justify-center border transition-all duration-300 rounded-full hover:border-accent'
                    >
                      <Trash color='#292524' size={20} strokeWidth={1.5} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {settingsOpen && (
        <PopupProfileEdit isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      )}

      {/*       {selectedPizza && (
        <PopupSelectionMenu
          selectedPizza={selectedPizza}
          isOpen={popupOpen}
          onClose={handlePopupClose}
        />
      )} */}
    </div>
  )
}
