import classNames from 'classnames'
import { X } from 'lucide-react'
import { useMenuClose } from '../../hooks/useMenuClose'

type PopupProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {
  useMenuClose(isOpen, onClose)
  return (
    <section
      className={classNames(
        isOpen ? 'visible opacity-100 opened' : 'invisible opacity-0',
        'transition-all duration-300 all-screen flex-center bg-black bg-opacity-50'
      )}
    >
      <div className='bg-white relative w-full h-full overflow-y-auto px-6 py-20 md:p-10 md:max-w-screen-md md:h-auto md:rounded-lg md:w-auto'>
        <button
          onClick={onClose}
          className='flex-center absolute size-10 circle-animation z-50 top-4 right-4 sm:top-8 sm:right-8'
        >
          <X color='#292524' strokeWidth={1.25} size={32} />
        </button>
        {children}
      </div>
    </section>
  )
}
