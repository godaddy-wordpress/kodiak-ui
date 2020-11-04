import * as React from 'react'
import { useLayoutEffect, useRef, RefObject } from 'react'
import { FocusScopeOptions, FocusScopeProps } from './types'
import { useFocusAuto } from './useFocusAuto'
import { useFocusContain } from './useFocusContain'
import { useFocusRestore } from './useFocusRestore'

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
  auto = false,
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
