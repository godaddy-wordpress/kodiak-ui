import { MutableRefObject, RefObject, useCallback, useEffect } from 'react'
import { __DEV__ } from '../../../utils/src'

export type UseOverlayProps = {
  isKeyboardDismissDisabled?: boolean
  isOpen?: boolean
  onDismiss?: () => void
}

export function useOverlay(
  { isKeyboardDismissDisabled, isOpen, onDismiss }: UseOverlayProps = {
    isKeyboardDismissDisabled: false,
  },
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>,
) {
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
      const rootNodes = []
      const originalValues = []

      if (!isOpen) {
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
    [isOpen, ref],
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
