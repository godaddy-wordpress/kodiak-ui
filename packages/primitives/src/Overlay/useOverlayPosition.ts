import { useLayoutEffect } from 'react'
import { createPopper, Placement } from '@popperjs/core'

export type UseOverlayPositionProps = {
  isVisible: boolean
  placement?: Placement
  offset?: [number, number]
}

export function useOverlayPosition(
  {
    isVisible,
    placement = 'bottom-start',
    offset = [0, 8],
  }: UseOverlayPositionProps,
  triggerRef,
  overlayRef,
) {
  useLayoutEffect(() => {
    if (!isVisible || !triggerRef || !overlayRef) {
      return
    }

    const popperInstance = createPopper(
      triggerRef?.current,
      overlayRef?.current,
      {
        placement,
        modifiers: [{ name: 'offset', options: { offset } }],
      },
    )

    return () => {
      popperInstance.destroy()
    }
  }, [isVisible, offset, overlayRef, placement, triggerRef])

  return null
}
