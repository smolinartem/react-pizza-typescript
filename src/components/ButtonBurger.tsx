import classNames from 'classnames'

type ButtonBurgerProps = {
  onClick: () => void
  isOpen: boolean
}

export default function ButtonBurger({ onClick, isOpen }: ButtonBurgerProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        isOpen ? 'bg-close' : 'bg-burger',
        'bg-with-image size-8 transition-all duration-300 md:hidden'
      )}
    />
  )
}
