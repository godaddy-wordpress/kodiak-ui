import { RefObject, useCallback, useEffect } from 'react'

export type UseOverlayProps = {
  isKeyboardDismissDisabled?: boolean
  onDismiss?: () => void
}

export function useOverlay(
  { isKeyboardDismissDisabled, onDismiss }: UseOverlayProps = {
    isKeyboardDismissDisabled: false,
  },
  ref: RefObject<HTMLElement>,
) {
  console.log(ref)
  useEffect(() => {
    if (ref?.current && !ref.current.contains(document.activeElement)) {
      ref?.current?.focus()
    }
  }, [ref])

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
