import PasswordFormEdit from '../forms/PasswordFormEdit'
import Popup from './Popup'

interface Props {
  isOpen: boolean
  onClose: () => void
}
export default function PopupPasswordEdit({ isOpen, onClose }: Props) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <PasswordFormEdit onClose={onClose} />
    </Popup>
  )
}
