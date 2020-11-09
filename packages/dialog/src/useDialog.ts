import { useState, useCallback, useRef } from 'react'

export function useDialog() {
  const ref = useRef<HTMLElement>()
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseDialog = useCallback(() => setIsOpen(false), [])
  const handleOpenDialog = useCallback(() => setIsOpen(true), [])
  const handleToggleDialog = useCallback(() => setIsOpen(state => !state), [])

  const getDialogProps = useCallback(
    () => ({
      ref,
      isOpen,
      tabIndex: -1,
      role: 'dialog',
      onDismiss: handleCloseDialog,
    }),
    [handleCloseDialog, isOpen],
  )

  return {
    handleCloseDialog,
    handleOpenDialog,
    handleToggleDialog,
    getDialogProps,
  }
}
