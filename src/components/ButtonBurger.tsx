import { Menu, X } from 'lucide-react'

type ButtonBurgerProps = {
  onToggle: () => void
  isOpen: boolean
}

export default function ButtonBurger({ onToggle, isOpen }: ButtonBurgerProps) {
  return (
    <button onClick={onToggle} className='size-8 transition-all duration-300 flex-center md:hidden'>
      {isOpen ? (
        <X color='#292524' strokeWidth={1.5} />
      ) : (
        <Menu color='#292524' strokeWidth={1.5} />
      )}
    </button>
  )
}
