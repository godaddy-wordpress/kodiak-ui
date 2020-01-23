import * as React from 'react'

/**
 * usePrevious hook
 *
 * Provides you with the value from the previous render of
 * the argument passed in
 *
 * Accepts type generic for the type of the value
 *
 * @param value: T
 * @returns ref.current: T
 */
export function usePrevious<T>(value: T) {
  const ref = React.useRef<T | null>(null)

  React.useEffect(() => void (ref.current = value), [value])

  return ref.current
}
