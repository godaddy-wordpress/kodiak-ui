import { useCallback, useMemo, useState } from 'react'

export function useTransition({
  isOpen,
  onEntered,
  onExited,
}: {
  isOpen: boolean
  onEntered?: () => void
  onExited?: () => void
}) {
  const [isExited, setIsExited] = useState(!isOpen)

  const handleEntered = useCallback(() => {
    setIsExited(false)
    onEntered?.()
  }, [onEntered])

  const handleExited = useCallback(() => {
    setIsExited(true)
    onExited?.()
  }, [onExited])

  const shouldMountElement = useMemo(() => isOpen || !isExited, [
    isExited,
    isOpen,
  ])

  return {
    shouldMountElement,
    handleEntered,
    handleExited,
  }
}
