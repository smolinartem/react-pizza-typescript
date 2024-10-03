import Popup from './Popup'

type PopupAuthProps = {
  isOpen: boolean
  onClose: () => void
}

export default function PopupAuth({ isOpen, onClose }: PopupAuthProps) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      Auth
    </Popup>
  )
}
