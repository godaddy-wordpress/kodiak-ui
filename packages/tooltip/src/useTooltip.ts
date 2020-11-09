import * as React from 'react'
import { createPopper, VirtualElement, Placement } from '@popperjs/core'
import { setAttributes } from '@kodiak-ui/utils'
import { usePortal, useOnClickOutside, useId, useKey } from '@kodiak-ui/hooks'

interface UseTooltipReturn {
  isVisible: boolean
  register: (
    ref: TooltipRef | null,
    options?: RegisterOptions,
  ) => { ref: TooltipRef; options?: RegisterOptions }
  getTriggerProps: () => {
    onFocus: (event) => void
    onBlur: (event) => void
    onMouseEnter: (event) => void
    onMouseLeave: (event) => void
  }
  Portal: any
}

interface UseTooltipProps {
  placement?: Placement
  offset?: [number, number]
  closeTimeout?: number
}

type TooltipRef = HTMLElement | null

interface RegisterOptions {
  trigger?: boolean
  arrow?: boolean
}

interface RefAndOptions {
  ref: TooltipRef
  options?: RegisterOptions
}

export const fromEntries = (entries: any) =>
  entries.reduce((acc: any, [key, value]: [any, any]) => {
    acc[key] = value
    return acc
  }, {})

export function useTooltip({
  placement = 'top',
  offset = [0, 10],
  closeTimeout = 0,
}: UseTooltipProps = {}): UseTooltipReturn {
  const triggerRef = React.useRef<HTMLElement | null>(null)
  const tooltipRef = React.useRef<HTMLElement | null>(null)
  const arrowRef = React.useRef<HTMLElement | null>(null)
  const popperInstanceRef = React.useRef<any>(null)
  const timeoutIdRef = React.useRef<any>(null)

  const id = useId()

  const {
    isOpen: isVisible,
    handleOpenPortal,
    handleClosePortal: instantlyClosePortal,
    Portal,
    portalRef,
  } = usePortal()

  const delayedClosePortal = React.useCallback(
    function delayedClosePortal(event) {
      clearTimeout(timeoutIdRef.current)
      if (closeTimeout === 0) {
        instantlyClosePortal(event)
      } else {
        timeoutIdRef.current = setTimeout(() => {
          return instantlyClosePortal(event)
        }, closeTimeout)
      }
    },
    [instantlyClosePortal, closeTimeout],
  )

  React.useLayoutEffect(
    function initializePopper() {
      if (!isVisible && (!triggerRef.current || !tooltipRef.current)) {
        return
      }

      const popperInstance = createPopper(
        triggerRef.current as Element | VirtualElement,
        tooltipRef.current as HTMLElement,
        {
          placement,
          modifiers: [
            offset ? { name: 'offset', options: { offset } } : {},
            arrowRef && arrowRef.current
              ? {
                  name: 'arrow',
                  options: { element: arrowRef && arrowRef.current },
                }
              : {},
          ],
        },
      )

      popperInstanceRef.current = popperInstance

      return () => {
        popperInstance.destroy()
        popperInstanceRef.current = null
      }
    },
    [isVisible, offset, placement],
  )

  useOnClickOutside({
    ref: portalRef as React.MutableRefObject<Element>,
    refException: triggerRef as React.MutableRefObject<Element>,
    handler: () => {
      instantlyClosePortal({})
    },
  })

  useKey({
    key: 'Escape',
    target: triggerRef.current,
    handler: () => {
      if (isVisible) {
        instantlyClosePortal({})
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
        'aria-describedby': `kodiak-ui-tooltip-${id}`,
      })
    }

    return { ref, options }
  }

  function registerTooltipElement({
    ref,
    options,
  }: RefAndOptions): RefAndOptions {
    if ((ref && !options) || (options && !options.trigger && !options.arrow)) {
      tooltipRef.current = ref
      setAttributes(tooltipRef.current, {
        id: `kodiak-ui-tooltip-${id}`,
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
    ref: TooltipRef,
    options?: RegisterOptions,
  ): {
    ref: TooltipRef
    options?: RegisterOptions
  } {
    return registerArrowElement(
      registerTriggerElement(registerTooltipElement({ ref, options })),
    )
  }

  const getTriggerProps = React.useCallback(
    function getTriggerProps() {
      return {
        onFocus: handleOpenPortal,
        onBlur: delayedClosePortal,
        onMouseEnter: handleOpenPortal,
        onMouseLeave: delayedClosePortal,
      }
    },
    [handleOpenPortal, delayedClosePortal],
  )

  return {
    isVisible,
    register,
    getTriggerProps,
    Portal,
  }
}
