import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { selectAddress } from '../../store/user/userSlice'
import { useEffect, useState } from 'react'

interface Props {
  onClose: () => void
}

export default function AddressFormSelect({ onClose }: Props) {
  const { userAddresses } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('default')

  useEffect(() => {
    const index = userAddresses.findIndex((a) => a.selected === true)
    if (index !== -1) setSelected(userAddresses[index].value)
  }, [userAddresses])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selected === 'default') {
      return
    } else {
      dispatch(selectAddress(selected))
    }
    onClose()
  }

  if (userAddresses.length === 0)
    return (
      <span className='block text-center sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto md:mt-10'>
        Пока нет адресов
      </span>
    )

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 sm:border-2 rounded-lg py-8 sm:px-6 w-full sm:w-96 mx-auto md:mt-10'
    >
      {userAddresses.map(({ value }) => (
        <label key={value} className='form-label text-center'>
          <input
            onChange={(e) => setSelected(e.target.value)}
            checked={selected === value}
            className='appearance-none hidden m-0'
            name='address'
            type='radio'
            value={value}
            key={value}
          />
          {value}
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
