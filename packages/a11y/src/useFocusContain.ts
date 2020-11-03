import { useCallback, useRef, RefObject, useEffect, FocusEvent } from 'react'
import { scopes, getFocusableElementsInScope } from './FocusScope'
import { FocusScopeOptions, FocusScopeProps } from './types'

export let activeScope: RefObject<HTMLElement[]> = null

const TabKeys = ['Tab']

export function isInScope(element: Element, scope: HTMLElement[]) {
  return scope.some(node => node.contains(element))
}

function isInAnyScope(element: Element, scopes: Set<RefObject<HTMLElement[]>>) {
  for (const scope of scopes.values()) {
    if (isInScope(element, scope.current)) {
      return true
    }
  }
  return false
}

export function isNotTabKey(event: KeyboardEvent) {
  return (
    !TabKeys.includes(event?.key) ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey
  )
}

export function focusElement(element: HTMLElement | null) {
  if (element != null) {
    try {
      element.focus()
    } catch (err) {
      // ignore
    }
  }
}

export function focusFirstInScope(scope: HTMLElement[]) {
  const elements = getFocusableElementsInScope(scope, { tabbable: true })
  focusElement(elements[0])
}

export function useFocusContain(
  scopeRef: RefObject<HTMLElement[]>,
  {
    contain,
    tabbable = true,
  }: {
    contain: FocusScopeProps['contain']
    tabbable?: FocusScopeOptions['tabbable']
  },
) {
  const focusedNode = useRef<HTMLElement>()
  const firefoxRef = useRef(null)

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const focusedElement = document.activeElement as HTMLElement

      if (isNotTabKey(event) || !isInScope(focusedElement, scopeRef?.current)) {
        return
      }

      const elements = getFocusableElementsInScope(scopeRef?.current, {
        tabbable,
      })
      const position = elements?.indexOf(focusedElement)
      const lastPosition = elements?.length - 1
      let nextElement = null

      // Tab backwards
      if (event.shiftKey) {
        if (position <= 0) {
          nextElement = elements?.[lastPosition]
        } else {
          nextElement = elements?.[position - 1]
        }
      } else {
        if (position === lastPosition) {
          nextElement = elements?.[0]
        } else {
          nextElement = elements?.[position + 1]
        }
      }

      event.preventDefault()
      if (nextElement) {
        focusElement(nextElement)
      }
    },
    [scopeRef, tabbable],
  )

  const onFocus = useCallback(
    event => {
      const isInScope = isInAnyScope(event?.target, scopes)
      if (!isInScope) {
        if (focusedNode?.current) {
          focusedNode?.current?.focus()
        } else if (activeScope) {
          focusFirstInScope(activeScope?.current)
        }
      } else {
        activeScope = scopeRef
        focusedNode.current = event?.target
      }
    },
    [scopeRef],
  )

  const onBlur = useCallback(
    event => {
      firefoxRef.current = requestAnimationFrame(() => {
        const isInScope = isInAnyScope(document.activeElement, scopes)

        if (!isInScope) {
          activeScope = scopeRef
          focusedNode.current = event.target
          focusedNode?.current?.focus()
        }
      })
    },
    [scopeRef],
  )

  useEffect(() => {
    const scope = scopeRef?.current

    if (!contain) {
      return
    }

    document.addEventListener('keydown', onKeyDown, false)
    document.addEventListener('focusin', onFocus, false)
    scope.forEach(element =>
      element.addEventListener('focusout', onBlur, false),
    )
    scope.forEach(element =>
      element.addEventListener('focusin', onFocus, false),
    )

    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
      document.removeEventListener('focusin', onFocus, false)
      scope.forEach(element =>
        element.removeEventListener('focusin', onFocus, false),
      )
      scope.forEach(element =>
        element.removeEventListener('focusout', onBlur, false),
      )
    }
  }, [contain, onBlur, onFocus, onKeyDown, scopeRef])
}
