import { useScrollPrevent } from '@kodiak-ui/a11y'
import { MutableRefObject, RefObject, useCallback, useEffect } from 'react'
import { __DEV__ } from '../../../utils/src'

export type UseOverlayProps = {
  isKeyboardDismissDisabled?: boolean
  isScrollPreventDisabled?: boolean
  isOpen?: boolean
  hideRootElements?: boolean
  onDismiss?: () => void
}

export function useOverlay(
  {
    isKeyboardDismissDisabled,
    isScrollPreventDisabled,
    isOpen,
    hideRootElements,
    onDismiss,
  }: UseOverlayProps = {
    isKeyboardDismissDisabled: false,
    isScrollPreventDisabled: false,
    hideRootElements: false,
  },
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>,
) {
  useScrollPrevent({ isDisabled: !isOpen || isScrollPreventDisabled })

  useEffect(
    function focusOnOverlayWhenOpen() {
      if (!isOpen) {
        return
      }

      if (!ref) {
        if (__DEV__) {
          console.warn('A ref has not been attached to the dialog node')
        }

        return
      }

      if (ref?.current && !ref.current.contains(document.activeElement)) {
        ref?.current?.focus()
      }
    },
    [isOpen, ref],
  )

  useEffect(
    function addAriaHiddenToOutsideElementsWhenOpen() {
      const dialogNode = ref?.current
      const ownerDocument = document
      const rootNodes: HTMLElement[] = []
      const originalValues = []

      if (!isOpen || !hideRootElements) {
        return
      }

      if (!ref) {
        if (__DEV__) {
          console.warn('A ref has not been attached to the dialog node')
        }

        return
      }

      Array.prototype.forEach.call(
        ownerDocument.querySelectorAll('body > *'),
        node => {
          const portalNode = dialogNode?.parentNode?.parentNode
          if (node === portalNode) {
            return
          }

          const attr = node.getAttribute('aria-hidden')
          const alreadyHidden = attr !== null && attr !== 'false'
          if (alreadyHidden) {
            return
          }

          originalValues.push(attr)
          rootNodes.push(node)
          node.setAttribute('aria-hidden', 'true')
        },
      )

      return () => {
        rootNodes.forEach((node, index) => {
          const originalValue = originalValues[index]
          if (originalValue === null) {
            node.removeAttribute('aria-hidden')
          } else {
            node.setAttribute('aria-hidden', originalValue)
          }
        })
      }
    },
    [hideRootElements, isOpen, ref],
  )

  // Handle the escape key
  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape' && !isKeyboardDismissDisabled) {
        e.preventDefault()
        onDismiss?.()
      }
    },
    [isKeyboardDismissDisabled, onDismiss],
  )

  const getOverlayProps = useCallback(
    () => ({
      onKeyDown,
    }),
    [onKeyDown],
  )

  return {
    getOverlayProps,
  }
}
