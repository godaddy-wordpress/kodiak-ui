import * as React from 'react'

export function useIsMounted(): () => boolean {
  const mountedRef = React.useRef(false)
  const getIsMounted = React.useCallback(() => mountedRef.current, [])

  React.useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  })

  return getIsMounted
}
