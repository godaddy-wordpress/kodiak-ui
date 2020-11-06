import { useCallback } from 'react'

export type UseOverlayProps = {
  isKeyboardDismissDisabled?: boolean
  onDismiss?: () => void
}

export function useOverlay(
  { isKeyboardDismissDisabled, onDismiss }: UseOverlayProps = {
    isKeyboardDismissDisabled: false,
  },
) {
  // Handle the escape key
  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
        e.preventDefault()
        onDismiss?.()
      }
    },
    [isKeyboardDismissDisabled, onDismiss],
  )

  const getOverlayProps = useCallback(
    () => ({
      onKeyDown,
    }),
    [onKeyDown],
  )

  return {
    getOverlayProps,
  }
}
