import { useState, useCallback } from 'react'

export function useDialog() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseDialog = useCallback(() => setIsOpen(false), [])
  const handleOpenDialog = useCallback(() => setIsOpen(true), [])
  const handleToggleDialog = useCallback(() => setIsOpen(state => !state), [])

  return {
    isOpen,
    handleCloseDialog,
    handleOpenDialog,
    handleToggleDialog,
  }
}
