import { MutableRefObject, RefObject, useCallback, useEffect } from 'react'

export type UseOverlayProps = {
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  onDismiss?: () => void
}

export function useOverlay(
  { isKeyboardDismissDisabled, isOpen, onDismiss }: UseOverlayProps = {
    isKeyboardDismissDisabled: false,
  },
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>,
) {
  useEffect(() => {
    if (
      isOpen &&
      ref?.current &&
      !ref.current.contains(document.activeElement)
    ) {
      ref?.current?.focus()
    }
  }, [isOpen, ref])

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
