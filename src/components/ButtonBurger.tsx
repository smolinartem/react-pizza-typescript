import classNames from 'classnames'

type ButtonBurgerProps = {
  onToggle: () => void
  isOpen: boolean
}

export default function ButtonBurger({ onToggle, isOpen }: ButtonBurgerProps) {
  return (
    <button
      onClick={onToggle}
      className={classNames(
        isOpen ? 'bg-close' : 'bg-burger',
        'bg-with-image size-8 transition-all duration-300 md:hidden'
      )}
    />
  )
}
