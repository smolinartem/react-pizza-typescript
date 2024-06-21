import classNames from 'classnames'
// - hooks
import { useMenuClose } from '../hooks/useMenuClose'
import type { Pizza } from '../types/index.types'
// - components
import PizzaForm from './PizzaForm'

interface Props {
  selectedPizza: Pizza
  isOpen: boolean
  onClose: () => void
}

const PopupSelectionMenu = ({ selectedPizza, isOpen, onClose }: Props) => {
  useMenuClose(isOpen, onClose)

  return (
    <section
      className={classNames(
        isOpen ? 'visible opacity-100 opened' : 'hidden opacity-0',
        'z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-popup scroll-smooth overflow-auto overflow-x-hidded pt-48 sm:pt-0'
      )}
    >
      <div className='bg-white relative sm:rounded-xl p-4 w-full sm:w-fit sm:p-7 sm:m-3 flex flex-col'>
        <button
          onClick={onClose}
          className='absolute top-7 right-7 bg-close bg-with-image self-end size-10'
        />
        <div className='grid gap-2 sm:grid-cols-2 sm:gap-5'>
          <div className='flex flex-col max-w-80'>
            <h3 className='mb-4 text-xl font-semibold text-gray-700 leading-none'>
              {selectedPizza?.name}
            </h3>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <img
                src={selectedPizza.image}
                alt={selectedPizza.name}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <span className='mt-3 text-sm text-gray-700'>{selectedPizza?.description}</span>
          </div>
          <PizzaForm selectedPizza={selectedPizza} onPopupClose={onClose} />
        </div>
      </div>
    </section>
  )
}
export default PopupSelectionMenu
