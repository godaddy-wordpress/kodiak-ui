import { useScrollPrevent } from '@kodiak-ui/a11y'
import { useState, useCallback } from 'react'

export type DialogAriaProps = {
  titleId?: string
  role?: 'dialog' | 'alertdialog'
  'aria-labelledby'?: string
  'aria-describedby'?: string
}

export type UseDialogProps = DialogAriaProps

export function useDialog({ titleId, role, ...rest }: UseDialogProps = {}) {
  const [isOpen, setIsOpen] = useState(false)

  useScrollPrevent({ isDisabled: !isOpen })

  const ariaLabeledBy = rest['aria-labelledby']

  const handleCloseDialog = useCallback(() => setIsOpen(false), [])
  const handleOpenDialog = useCallback(() => setIsOpen(true), [])
  const handleToggleDialog = useCallback(() => setIsOpen(state => !state), [])

  const getDialogProps = useCallback(
    () => ({
      isOpen,
      tabIndex: -1,
      role: role ? role : 'dialog',
      'aria-modal': true,
      'aria-labelledby': ariaLabeledBy || titleId,
      onDismiss: handleCloseDialog,
    }),
    [ariaLabeledBy, handleCloseDialog, isOpen, role, titleId],
  )

  return {
    handleCloseDialog,
    handleOpenDialog,
    handleToggleDialog,
    getDialogProps,
  }
}
