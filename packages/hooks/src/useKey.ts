import * as React from 'react'
import {
  useEventListener,
  AddRemoveListenerType,
  OnOffListenerType,
} from '@kodiak-ui/hooks'

interface UseKeyOptions {
  key: string
  handler: (event: KeyboardEvent) => void
  event?: 'keydown' | 'keypress' | 'keyup'
  target?: Window | AddRemoveListenerType | OnOffListenerType | null
}

const createKeyPredicate = (
  keyFilter: string,
): ((event: KeyboardEvent) => boolean) =>
  typeof keyFilter === 'function'
    ? keyFilter
    : typeof keyFilter === 'string'
    ? (event: KeyboardEvent) => event.key === keyFilter
    : keyFilter
    ? () => true
    : () => false

export function useKey({
  key,
  handler,
  event = 'keydown',
  target,
}: UseKeyOptions) {
  const memoizedHandler = React.useMemo(() => {
    const predicate = createKeyPredicate(key)
    return function(event: KeyboardEvent) {
      if (predicate(event)) {
        return handler(event)
      }
    }
  }, [key, handler])

  useEventListener({ name: event, handler: memoizedHandler, target })
}
