import { Ban } from 'lucide-react'
import Popup from './Popup'

type PopupUnauthorizedProps = {
  isOpen: boolean
  onClose: () => void
}

export default function PopupUnauthorized({ isOpen, onClose }: PopupUnauthorizedProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className='flex gap-2 pt-10'>
        <Ban />
        <h2 className='text-center text-xl'>Необходимо авторизоваться</h2>
      </div>
    </Popup>
  )
}
