import { RefObject, useEffect } from 'react'
import { FocusScopeProps } from './types'
import { isInScope, focusFirstInScope } from './useFocusContain'

let activeScope: RefObject<HTMLElement[]> = null

export function useFocusAuto(
  scopeRef: RefObject<HTMLElement[]>,
  {
    auto,
  }: {
    auto: FocusScopeProps['auto']
  },
) {
  useEffect(() => {
    if (auto) {
      activeScope = scopeRef
      if (!isInScope(document.activeElement, activeScope?.current)) {
        focusFirstInScope(scopeRef?.current)
      }
    }
  }, [auto, scopeRef])
}
