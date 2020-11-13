import * as React from 'react'

type FocusEvents = {
  // Handler is called when element or descendant receives focus
  onFocus?: (e: React.FocusEvent) => void
  // Handler is called when element or descendant loses focus
  onBlur?: (e: React.FocusEvent) => void
}

export function useFocusWithin({
  onFocus: onFocusCallback,
  onBlur: onBlurCallback,
}: FocusEvents): {
  isFocusWithin: boolean
  getFocusProps: () => {
    onFocus: (e: React.FocusEvent) => void
    onBlur: (e: React.FocusEvent) => void
  }
} {
  const [isFocusWithin, setIsFocusWithin] = React.useState(false)

  const onFocus = React.useCallback(
    (e: React.FocusEvent) =>
      !isFocusWithin ? (onFocusCallback?.(e), setIsFocusWithin(true)) : null,
    [isFocusWithin, onFocusCallback],
  )

  const onBlur = React.useCallback(
    (e: React.FocusEvent) =>
      isFocusWithin && !e.currentTarget.contains(e.relatedTarget as HTMLElement)
        ? (onBlurCallback?.(e), setIsFocusWithin(false))
        : null,
    [isFocusWithin, onBlurCallback],
  )

  const getFocusProps = React.useCallback(() => {
    return {
      onFocus,
      onBlur,
    }
  }, [onFocus, onBlur])

  return {
    isFocusWithin,
    getFocusProps,
  }
}
