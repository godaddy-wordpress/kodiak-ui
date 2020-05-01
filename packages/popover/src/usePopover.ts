import * as React from 'react'
import { createPopper, VirtualElement, Placement } from '@popperjs/core'
import { setAttributes } from '@kodiak-ui/utils'
import { usePortal, useOnClickOutside, useId, useKey } from '@kodiak-ui/hooks'

interface UsePopoverReturn {
  isVisible: boolean
  register: (
    ref: PopoverRef | null,
    options?: RegisterOptions,
  ) => { ref: PopoverRef; options?: RegisterOptions }
  getTriggerProps: () => {}
  Portal: any
}

interface UsePopoverProps {
  placement?: Placement
  offset?: [number, number]
}

type PopoverRef = HTMLElement | null

interface RegisterOptions {
  trigger?: boolean
  arrow?: boolean
}

interface RefAndOptions {
  ref: PopoverRef
  options?: RegisterOptions
}

export const fromEntries = (entries: any) =>
  entries.reduce((acc: any, [key, value]: [any, any]) => {
    acc[key] = value
    return acc
  }, {})

export function usePopover({
  placement = 'top',
  offset = [0, 10],
}: UsePopoverProps = {}): UsePopoverReturn {
  const triggerRef = React.useRef<HTMLElement | null>(null)
  const popoverRef = React.useRef<HTMLElement | null>(null)
  const arrowRef = React.useRef<HTMLElement | null>(null)
  const popperInstanceRef = React.useRef<any>(null)

  const id = useId()

  const [state, setState] = React.useState<{
    styles: object
    attributes: object
  }>()

  const {
    isOpen: isVisible,
    handleOpenPortal,
    handleClosePortal,
    Portal,
    portalRef,
  } = usePortal()

  const updateStateModifier = React.useMemo(
    () => ({
      name: 'updateState',
      enabled: true,
      phase: 'write' as 'write',
      fn: ({ state }: any) => {
        const elements = Object.keys(state.elements)

        setState({
          styles: fromEntries(
            elements.map(element => [element, state.styles[element] || {}]),
          ),
          attributes: fromEntries(
            elements.map(element => [element, state.attributes[element]]),
          ),
        })
      },
      requires: ['computeStyles'],
    }),
    [],
  )

  React.useLayoutEffect(
    function initializePopper() {
      if (!isVisible && (!triggerRef.current || !portalRef.current)) {
        return
      }

      const popperInstance = createPopper(
        triggerRef.current as Element | VirtualElement,
        portalRef.current as HTMLElement,
        {
          placement,
          modifiers: [
            { name: 'offset', options: { offset } },
            { name: 'applyStyles', enabled: false },
            updateStateModifier,
          ],
        },
      )

      popperInstanceRef.current = popperInstance

      return () => {
        popperInstance.destroy()
        popperInstanceRef.current = null
      }
    },
    [isVisible],
  )

  useOnClickOutside({
    ref: portalRef as React.MutableRefObject<Element>,
    refException: triggerRef as React.MutableRefObject<Element>,
    handler: () => {
      handleClosePortal({})
    },
  })

  useKey({
    key: 'Escape',
    target: triggerRef.current,
    handler: () => {
      if (isVisible) {
        handleClosePortal({})
      }
    },
  })

  function registerTriggerElement({
    ref,
    options,
  }: RefAndOptions): RefAndOptions {
    if (ref && options && options.trigger) {
      triggerRef.current = ref

      setAttributes(triggerRef.current, {
        'aria-describedby': `kodiak-ui-popover-${id}`,
      })
    }

    return { ref, options }
  }

  function registerPopoverElement({
    ref,
    options,
  }: RefAndOptions): RefAndOptions {
    if ((ref && !options) || (options && !options.trigger && !options.arrow)) {
      popoverRef.current = ref
      setAttributes(popoverRef.current, {
        id: `kodiak-ui-popover-${id}`,
        role: 'tooltip',
      })
    }

    return { ref, options }
  }

  function registerArrowElement({
    ref,
    options,
  }: RefAndOptions): RefAndOptions {
    if (ref && options && options.arrow) {
      arrowRef.current = ref
    }

    return { ref, options }
  }

  function register(
    ref: PopoverRef,
    options?: RegisterOptions,
  ): {
    ref: PopoverRef
    options?: RegisterOptions
  } {
    return registerArrowElement(
      registerTriggerElement(registerPopoverElement({ ref, options })),
    )
  }

  const getTriggerProps = React.useCallback(
    function getTriggerProps() {
      return {
        onFocus: handleOpenPortal,
        onBlur: handleClosePortal,
        onMouseEnter: handleOpenPortal,
        onMouseLeave: handleClosePortal,
      }
    },
    [handleOpenPortal, handleClosePortal],
  )

  return {
    isVisible,
    register,
    getTriggerProps,
    Portal,
  }
}
