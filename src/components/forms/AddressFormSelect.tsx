import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { selectAddress } from '../../store/user/userSlice'
import { useState } from 'react'

interface Props {
  onClose: () => void
}

export default function AddressFormSelect({ onClose }: Props) {
  const { userAddresses } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('default')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selected === 'default') {
      return
    } else {
      dispatch(selectAddress(selected))
    }
    onClose()
  }

  if (userAddresses.length === 0) return <span>Пока нет адресов</span>

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      {userAddresses.map(({ streetName }) => (
        <label className='form-label text-center'>
          <input
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === streetName}
            className='appearance-none hidden m-0'
            name='address'
            type='radio'
            value={streetName}
            key={streetName}
          />
          {streetName}
        </label>
      ))}

      <div className='flex items-center gap-2 mt-8'>
        <button className='button w-full' type='reset'>
          Отмена
        </button>
        <button className='button w-full' type='submit'>
          Выбрать
        </button>
      </div>
    </form>
  )
}
