import { useEffect } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}
export function useDialogClose({ isOpen, onClose }: Props): void {
  useEffect(() => {
    if (!isOpen) return

    const handleOverlay = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('opened')) {
        onClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
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
  }, [isOpen, onClose])
}
