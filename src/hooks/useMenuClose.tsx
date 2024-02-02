import { useEffect } from 'react'

export function useMenuClose(isOpen: boolean, closePopup: () => void): void {
  useEffect(() => {
    if (!isOpen) return

    const handleOverlay = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('opened')) {
        closePopup()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleOverlay)
    document.body.classList.add('overflow-hidden')

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleOverlay)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen, closePopup])
}
