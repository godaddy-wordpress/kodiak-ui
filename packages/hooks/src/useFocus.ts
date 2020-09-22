import * as React from 'react'

type FocusEvents = {
  // Handler is called when element receives focus
  onFocus?: (e: React.FocusEvent) => void
  // Handler is called when element loses focus
  onBlur?: (e: React.FocusEvent) => void
}

export function useFocus({
  onFocus: onFocusCallback,
  onBlur: onBlurCallback,
}: FocusEvents): {
  getFocusProps: () => {
    onFocus: (e: React.FocusEvent) => void
    onBlur: (e: React.FocusEvent) => void
  }
} {
  const onFocus = React.useCallback(
    (e: React.FocusEvent) =>
      onFocusCallback
        ? e?.target === e?.currentTarget
          ? onFocusCallback(e)
          : null
        : null,
    [onFocusCallback],
  )

  const onBlur = React.useCallback(
    (e: React.FocusEvent) =>
      onBlurCallback
        ? e?.target === e?.currentTarget
          ? onBlurCallback(e)
          : null
        : null,
    [onBlurCallback],
  )

  const getFocusProps = React.useCallback(() => {
    return {
      onFocus,
      onBlur,
    }
  }, [onFocus, onBlur])

  return {
    getFocusProps,
  }
}
