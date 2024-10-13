import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { selectAddress } from '../../store/user/userSlice'

import PopupAddress from '../popup/PopupAddress'
import { MapPin } from 'lucide-react'

export default function UserAddressList() {
  const [popupAddressOpen, setPopupAddressOpen] = useState(false)
  const { userAddresses } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const handleAddressSelect = (value: string) => {
    dispatch(selectAddress(value))
  }
  return (
    <div className='grid gap-6 h-max w-full mb-6 md:rounded-xl md:shadow-one md:px-6 md:py-6'>
      {<PopupAddress isOpen={popupAddressOpen} onClose={() => setPopupAddressOpen(false)} />}
      <h3 className='font-title uppercase text-stone-600'>Ваши адреса:</h3>
      <button
        onClick={() => setPopupAddressOpen(true)}
        type='button'
        className='flex justify-center items-center gap-2 font-title uppercase text-sm text-stone-600 border-2 rounded-lg py-3 px-6 w-full hover:text-accent'
      >
        Добавить новый адрес
        <MapPin strokeWidth={3} />
      </button>

      {userAddresses.length > 0 ? (
        <ul className='flex flex-col gap-2'>
          {userAddresses.map((address, index) => (
            <li key={index}>
              <button
                onClick={() => handleAddressSelect(address.value)}
                type='button'
                className={`${
                  address.selected ? 'border-accent' : 'border-inherite'
                } font-title uppercase text-sm text-stone-600 border-2 rounded-lg py-3 px-6 w-full`}
              >
                {address.value}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span className='text-center'>Пока нет адресов.</span>
      )}
    </div>
  )
}
