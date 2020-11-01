import * as React from 'react'
import { useSSR } from './useSSR'

// Unload
function preventUnload(event: BeforeUnloadEvent) {
  event.preventDefault()
  // Only IE
  const confirmationMessage = 'Changes you made may not be saved.'
  ;(event || window.event).returnValue = confirmationMessage //Gecko + IE
  return confirmationMessage //Webkit, Safari, Chrome etc.
}

/**
 * @param {Boolean} enabled Blocks the unload if true
 */

export function useBeforeUnload({ enabled = true }: { enabled: boolean }) {
  const { isServer } = useSSR()

  React.useEffect(() => {
    if (isServer) {
      return
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      preventUnload(event)
    }

    if (!enabled) {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    } else {
      window.addEventListener('beforeunload', handleBeforeUnload)
    }

    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [enabled, isServer])
}
