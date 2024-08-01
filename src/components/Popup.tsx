import classNames from 'classnames'

type PopupProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {
  return (
    <section
      className={classNames(
        isOpen ? 'visible opacity-100 opened' : 'invisible opacity-0',
        'transition-all duration-300 all-screen flex-center bg-black bg-opacity-50'
      )}
    >
      <div className='bg-white relative w-full h-full overflow-y-auto px-6 py-20 md:p-10 md:max-w-screen-md md:h-auto md:rounded-lg'>
        <button
          onClick={onClose}
          className='absolute bg-close bg-with-image size-10 top-4 right-4 sm:top-8 sm:right-8 circle-animation'
        />
        {children}
      </div>
    </section>
  )
}
