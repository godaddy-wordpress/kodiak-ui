import * as React from 'react'
import { useControlled } from './'

export type UseOverlayProps = {
  isOpen?: boolean
  defaultOpen?: boolean
}

export type UseOverlayState = {
  // Determines if overlay is open or closed
  readonly isOpen: boolean
  // Opens the overlay
  open(): void
  // Closes the overlay
  close(): void
  // Toggle the overlay open and close
  toggle(): void
}

export function useOverlay({
  isOpen: isOpenProp,
  defaultOpen: defaultOpen = false,
}: UseOverlayProps = {}): UseOverlayState {
  const [isOpen, setIsOpen] = useControlled({
    controlled: isOpenProp,
    default: defaultOpen,
    name: 'Overlay',
    state: 'open',
  })

  const open = React.useCallback(() => setIsOpen(true), [setIsOpen])
  const close = React.useCallback(() => setIsOpen(false), [setIsOpen])
  const toggle = React.useCallback(() => setIsOpen(!isOpen), [
    isOpen,
    setIsOpen,
  ])

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}
