import { useMenuClose } from '../../hooks/useMenuClose'
import { useMediaQuery } from '@uidotdev/usehooks'
import classNames from 'classnames'
import { ArrowLeft, X } from 'lucide-react'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
export default function Popup({ isOpen, onClose, children }: PopupProps) {
  useMenuClose(isOpen, onClose)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 640px)')

  return (
    <section
      className={classNames(isOpen ? 'visible opacity-100 opened' : 'invisible opacity-0', 'popup')}
    >
      <div className='popup-container'>
        {isSmallDevice ? (
          <button onClick={onClose} className='button-order absolute top-6 left-6'>
            <ArrowLeft color='#292524' strokeWidth={1.5} />
          </button>
        ) : (
          <button
            onClick={onClose}
            className='flex-center absolute size-10 circle-animation top-8 right-8'
          >
            <X color='#292524' strokeWidth={1.25} size={32} />
          </button>
        )}

        {children}
      </div>
    </section>
  )
}
