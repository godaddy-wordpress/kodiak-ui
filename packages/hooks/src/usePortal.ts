import * as React from 'react'
import { createPortal } from 'react-dom'

type CustomEvent = {
  event?: React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>
  portalRef: React.MutableRefObject<HTMLElement>
  targetRef: React.MutableRefObject<HTMLElement>
}

type CustomEventHandler = (customEvent: CustomEvent) => void
type CustomEventHandlers = {
  [K in keyof React.DOMAttributes<K>]?: CustomEventHandler
}

type EventListenerMap = {
  [K in keyof React.DOMAttributes<K>]: keyof GlobalEventHandlersEventMap
}
type EventListenersRef = React.MutableRefObject<
  {
    [K in keyof React.DOMAttributes<K>]?: (
      event: React.SyntheticEvent<any, Event>,
    ) => void
  }
>

type UsePortalOptions = {
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
  bindTo?: HTMLElement // attach the portal to this node in the DOM
  isOpen?: boolean
  onOpen?: CustomEventHandler
  onClose?: CustomEventHandler
  onPortalClick?: CustomEventHandler
} & CustomEventHandlers

type UsePortalReturn = {
  targetRef: React.MutableRefObject<HTMLElement>
  portalRef: React.MutableRefObject<HTMLElement>
  isOpen: boolean
  handleOpenPortal: (event: any) => void
  handleClosePortal: (event: any) => void
  Portal: any
}

export const errorMessage1 =
  'You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).'

export function usePortal({
  isOpen: defaultIsOpen = false,
  onOpen,
  onClose,
}: UsePortalOptions = {}): UsePortalReturn {
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)

  const targetRef = React.useRef() as React.MutableRefObject<HTMLElement>
  const portalRef = React.useRef(
    document?.createElement('div'),
  ) as React.MutableRefObject<HTMLElement>

  React.useEffect(() => {
    if (!portalRef.current) portalRef.current = document.createElement('div')
  }, [portalRef])

  const elToMountTo = React.useMemo(() => {
    return document?.body
  }, [])

  const createEvent = React.useCallback(
    function createEvent(event: any) {
      if (!event) return { targetRef, portalRef, event }

      const { currentTarget } = event

      if (!targetRef.current && currentTarget && currentTarget !== document) {
        targetRef.current = event.currentTarget
      }

      return {
        portalRef,
        targetRef,
        event,
      }
    },
    [targetRef, portalRef],
  )

  const handleOpenPortal = React.useCallback(
    function handleOpenPortal(
      event: React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    ) {
      onOpen && onOpen(createEvent(event))

      setIsOpen(true)
    },
    [createEvent, onOpen],
  )

  const handleClosePortal = React.useCallback(
    function handleClosePortal(
      event: React.SyntheticEvent<MouseEvent | KeyboardEvent, Event>,
    ) {
      onClose && onClose(createEvent(event))

      setIsOpen(false)
    },
    [createEvent, onClose],
  )

  React.useEffect(() => {
    if (
      !(elToMountTo instanceof HTMLElement) ||
      !(portalRef.current instanceof HTMLElement)
    )
      return

    const node = portalRef.current
    elToMountTo.appendChild(portalRef.current)

    return () => {
      elToMountTo.removeChild(node)
    }
  }, [portalRef, elToMountTo])

  const Portal = React.useCallback(
    ({ children }: { children: React.ReactNode }) => {
      if (portalRef.current != null)
        return createPortal(children, portalRef.current)
      return null
    },
    [portalRef],
  )

  return Object.assign(
    [targetRef, portalRef, isOpen, handleOpenPortal, handleClosePortal, Portal],
    {
      targetRef,
      portalRef,
      isOpen,
      handleOpenPortal,
      handleClosePortal,
      Portal,
    },
  )
}
