import * as React from 'react'

type KeyboardEvents = {
  // Handler is called when target key is pressed
  onKeyDown?: (e: React.KeyboardEvent) => void
  // Handler is called when target key is unpressed
  onKeyUp?: (e: React.KeyboardEvent) => void
}

export function useKeyboard({
  onKeyDown: onKeyDownCallback,
  onKeyUp: onKeyUpCallback,
}: KeyboardEvents): {
  getKeyboardProps: () => KeyboardEvents
} {
  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => (
      e.preventDefault(), e.stopPropagation(), onKeyDownCallback?.(e)
    ),
    [onKeyDownCallback],
  )
  const onKeyUp = React.useCallback(
    (e: React.KeyboardEvent) => (
      e.preventDefault(), e.stopPropagation(), onKeyUpCallback?.(e)
    ),
    [onKeyUpCallback],
  )

  const getKeyboardProps = React.useCallback(
    () => ({
      onKeyDown,
      onKeyUp,
    }),
    [onKeyDown, onKeyUp],
  )

  return {
    getKeyboardProps,
  }
}
