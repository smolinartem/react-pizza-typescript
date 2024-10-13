import Popup from './Popup'
import { useState } from 'react'
import AddressFormAdd from '../forms/AddressFormAdd'
import AddressFormSelect from '../forms/AddressFormSelect'

interface Props {
  isOpen: boolean
  onClose: () => void
}

type Action = 'select' | 'add'

export default function PopupAddress({ isOpen, onClose }: Props) {
  const [action, setAction] = useState<Action>('add')

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className='flex gap-4 items-center justify-center mb-10'>
        <button
          className={`${
            action === 'select' ? 'text-red-600' : 'text-stone-600'
          } font-title uppercase`}
          onClick={() => setAction('select')}
        >
          Выбрать
        </button>
        <button
          className={`${action === 'add' ? 'text-red-600' : 'text-stone-600'} font-title uppercase`}
          onClick={() => setAction('add')}
        >
          Добавить
        </button>
      </div>

      {action === 'select' && <AddressFormSelect onClose={onClose} />}
      {action === 'add' && <AddressFormAdd onClose={onClose} />}
    </Popup>
  )
}
