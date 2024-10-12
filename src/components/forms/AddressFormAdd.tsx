import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewAddress } from '../../store/user/userSlice'

interface Props {
  onClose: () => void
}
export default function AddressFormAdd({ onClose }: Props) {
  const dispatch = useDispatch()
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addNewAddress(address))
    setAddress('')
    onClose()
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='streetName' className='text-sm'>
        Улица
      </label>
      <input
        onChange={(e) => setAddress(e.target.value)}
        id='streetName'
        type='text'
        className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey-900 sm:text-sm sm:leading-6'
      />

      <div className='flex items-center gap-2 mt-8'>
        <button className='button w-full' type='reset'>
          Отмена
        </button>
        <button className='button w-full' type='submit'>
          Добавить
        </button>
      </div>
    </form>
  )
}
