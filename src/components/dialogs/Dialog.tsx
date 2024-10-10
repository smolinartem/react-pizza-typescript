import { useDialogClose } from '@/hooks/useDialogClose'
import { useMediaQuery } from '@uidotdev/usehooks'
import classNames from 'classnames'
import { ArrowLeft, X } from 'lucide-react'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
export function Dialog({ isOpen, onClose, children }: DialogProps) {
  useDialogClose({ isOpen, onClose })
  const isSmallDevice = useMediaQuery('only screen and (max-width : 640px)')

  return (
    <section
      className={classNames(
        isOpen ? 'visible opacity-100 opened' : 'invisible opacity-0',
        'dialog'
      )}
    >
      <div className='bg-white relative w-full h-full overflow-y-scroll px-6 py-20 sm:p-10 sm:max-w-screen-md sm:overflow-y-visible sm:h-auto sm:rounded-xl'>
        {isSmallDevice ? (
          <button className='button-order absolute top-6 left-6'>
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

{
  /* <section
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
</section> */
}
