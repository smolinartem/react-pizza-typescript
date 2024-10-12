import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Truck } from 'lucide-react'
import { RootState } from '../../store/store'

import { toast } from 'react-toastify'

import PopupAddress from '../popup/PopupAddress'

export default function ButtonDelivery() {
  const navigate = useNavigate()
  const { userAddresses, userInfo } = useSelector((state: RootState) => state.user)

  const [popupAddressOpen, setPopupAddressOpen] = useState(false)

  const notify = () =>
    toast.error(<span className='font-body text-sm'>Необходимо авторизоваться</span>, {
      autoClose: 2000,
      position: 'bottom-center',
      closeOnClick: true,
      pauseOnHover: false,
    })

  const handleClick = () => {
    if (userInfo === null) {
      notify()
      navigate('/auth')
    } else {
      setPopupAddressOpen(true)
    }
  }

  const selectedAddress = userAddresses.find((address) => address.selected === true)

  return (
    <div className='flex items-center gap-2'>
      <button onClick={() => handleClick()} className='flex-center size-12'>
        <Truck color='#525252' />
      </button>

      {selectedAddress && <span className='block text-sm'>{selectedAddress.streetName}</span>}

      {<PopupAddress isOpen={popupAddressOpen} onClose={() => setPopupAddressOpen(false)} />}
    </div>
  )
}
