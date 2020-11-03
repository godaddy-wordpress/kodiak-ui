import * as React from 'react'
import { useLayoutEffect, useRef, RefObject } from 'react'
// import create from 'zustand'
import { FocusScopeOptions, FocusScopeProps } from './types'
import { useFocusAuto } from './useFocusAuto'
import { useFocusContain } from './useFocusContain'
import { useFocusRestore } from './useFocusRestore'

// const useFocusScopeStore = create(() => ({
//   focusNext(options: FocusScopeOptions) {
//     const node = options.from || document.activeElement
//     const focusable = getFocusableElementsInScope(scopeRef.current, opts)
//     let nextNode = focusable.find(
//       n =>
//         !!(
//           node.compareDocumentPosition(n) &
//           (Node.DOCUMENT_POSITION_FOLLOWING |
//             Node.DOCUMENT_POSITION_CONTAINED_BY)
//         ),
//     )
//     if (!nextNode && opts.wrap) {
//       nextNode = focusable[0]
//     }
//     if (nextNode) {
//       nextNode.focus()
//     }
//     return nextNode
//   },
//   focusPrevious() {
//     return 'prev'
//   },
// }))

const focusableElements = [
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'a[href]',
  'area[href]',
  'summary',
  'iframe',
  'object',
  'embed',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]',
]

export const FOCUSABLE_ELEMENT_SELECTOR =
  focusableElements.join(',') + ',[tabindex]'
focusableElements.push('[tabindex]:not([tabindex="-1"])')
export const TABBABLE_ELEMENT_SELECTOR = focusableElements.join(
  ':not([tabindex="-1"]),',
)

export function getFocusableElementsInScope(
  scope: HTMLElement[],
  opts: FocusScopeOptions,
): HTMLElement[] {
  const res = []
  const selector = opts.tabbable
    ? TABBABLE_ELEMENT_SELECTOR
    : FOCUSABLE_ELEMENT_SELECTOR
  for (const node of scope) {
    if (node.matches(selector)) {
      res.push(node)
    }
    res.push(...Array.from(node.querySelectorAll(selector)))
  }
  return res
}

export const scopes: Set<RefObject<HTMLElement[]>> = new Set()

export function FocusScope({
  children,
  contain = true,
  restore = true,
  auto = true,
}: FocusScopeProps) {
  const startRef = useRef<HTMLSpanElement>()
  const endRef = useRef<HTMLSpanElement>()
  const scopeRef = useRef<HTMLElement[]>()

  useLayoutEffect(() => {
    // Find all rendered nodes between the sentinels and add them to the scope.
    let node = startRef.current.nextSibling
    const nodes = []
    while (node && node !== endRef.current) {
      nodes.push(node)
      node = node.nextSibling
    }

    scopeRef.current = nodes
    scopes.add(scopeRef)
    return () => {
      scopes.delete(scopeRef)
    }
  }, [children])

  useFocusContain(scopeRef, { contain })
  useFocusRestore(scopeRef, { contain, restore })
  useFocusAuto(scopeRef, { auto })

  return (
    <>
      <span hidden ref={startRef} />
      {children}
      <span hidden ref={endRef} />
    </>
  )
}
