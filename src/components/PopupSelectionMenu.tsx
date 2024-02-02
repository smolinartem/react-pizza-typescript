import { useMenuClose } from '../hooks/useMenuClose'
import PizzaForm from './PizzaForm'
import { IPizza } from '../types/pizza.types'

interface Props {
  selectedPizza: IPizza
  popupOpen: boolean
  onPopupClose: () => void
}

const PopupSelectionMenu = ({
  selectedPizza,
  popupOpen,
  onPopupClose,
}: Props): React.JSX.Element => {
  useMenuClose(popupOpen, onPopupClose)

  return (
    <section
      className={`${
        popupOpen ? 'visible opacity-100 opened' : 'hidden opacity-0'
      } z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-popup`}
    >
      <div className='bg-white rounded-xl p-7 flex flex-col'>
        <button onClick={onPopupClose} className='bg-close bg-with-image self-end w-10 h-10' />
        <div className='grid grid-cols-2 gap-5'>
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
          <PizzaForm onPopupClose={onPopupClose} />
        </div>
      </div>
    </section>
  )
}
export default PopupSelectionMenu
