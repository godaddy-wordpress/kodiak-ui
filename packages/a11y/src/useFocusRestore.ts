import { useLayoutEffect, RefObject, useCallback } from 'react'
import { FocusScopeProps, FocusScopeOptions } from './types'
import {
  TABBABLE_ELEMENT_SELECTOR,
  FOCUSABLE_ELEMENT_SELECTOR,
} from './FocusScope'
import { isNotTabKey, isInScope, focusElement } from './useFocusContain'

export function getFocusableTreeWalker(
  root: HTMLElement,
  options?: FocusScopeOptions,
) {
  const { tabbable, from } = options

  const selector = tabbable
    ? TABBABLE_ELEMENT_SELECTOR
    : FOCUSABLE_ELEMENT_SELECTOR

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        // Skip nodes inside the starting node.
        if (from?.contains(node)) {
          return NodeFilter.FILTER_REJECT
        }

        if ((node as HTMLElement).matches(selector)) {
          return NodeFilter.FILTER_ACCEPT
        }

        return NodeFilter.FILTER_SKIP
      },
    },
    false,
  )

  if (from) {
    walker.currentNode = from
  }

  return walker
}

export function useFocusRestore(
  scopeRef: RefObject<HTMLElement[]>,
  {
    restore,
    contain,
  }: {
    restore: FocusScopeProps['restore']
    contain: FocusScopeProps['contain']
  },
) {
  const nodeToRestore = document?.activeElement as HTMLElement

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const focusedElement = document.activeElement as HTMLElement

      if (isNotTabKey || !isInScope(focusedElement, scopeRef?.current)) {
        return
      }
      const walker = getFocusableTreeWalker(document.body, { tabbable: true })

      walker.currentNode = focusedElement

      let nextElement = (event?.shiftKey
        ? walker.previousNode()
        : walker.nextNode()) as HTMLElement

      if (
        (!nextElement || !isInScope(nextElement, scopeRef?.current)) &&
        nodeToRestore
      ) {
        walker.currentNode = nodeToRestore

        do {
          nextElement = (event?.shiftKey
            ? walker?.previousNode()
            : walker?.nextNode()) as HTMLElement
        } while (isInScope(nextElement, scopeRef?.current))

        event.preventDefault()
        event.stopPropagation()

        if (nextElement) {
          nextElement.focus()
        } else {
          focusedElement?.blur()
        }
      }
    },
    [nodeToRestore, scopeRef],
  )

  useLayoutEffect(() => {
    const scope = scopeRef?.current

    if (!contain) {
      document.addEventListener('keydown', onKeyDown, true)
    }

    return () => {
      if (!contain) {
        document.removeEventListener('keydown', onKeyDown, true)
      }

      if (
        restore &&
        nodeToRestore &&
        isInScope(document.activeElement, scope)
      ) {
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore)) {
            focusElement(nodeToRestore)
          }
        })
      }
    }
  }, [scopeRef, restore, contain, onKeyDown, nodeToRestore])
}
