import * as React from 'react'

export const useOnClickOutside = ({
  ref,
  refException,
  handler,
}: {
  ref: React.MutableRefObject<Element>
  refException: React.MutableRefObject<Element>
  handler: (event: any) => void
}) => {
  const savedHandler = React.useRef<(event: any) => void>()

  // Remember the latest callback to reduce adding listeners below
  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (refException && refException.current.contains(event.target))
      ) {
        return
      }

      savedHandler && savedHandler.current && savedHandler.current(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, refException, savedHandler])
}
