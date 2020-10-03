import * as React from 'react'

type BaseEvent<T extends React.SyntheticEvent> = T & {
  continuePropagation(): void
}

/**
 * Wraps React's synthetic events so that all events
 * stopPropagation by default. This helps with issues like accessing
 * the event and React attempts to access the cached events.
 *
 * Taken from `@react-aria`, Adobe's accessibility
 * library
 *
 * https://github.com/adobe/react-spectrum/blob/c700898916bbd076bcc63e49d77c16d80623a8e7/packages/%40react-aria/interactions/src/createEventHandler.ts
 */
function eventHandler<T extends React.SyntheticEvent>(
  handler: (e: BaseEvent<T>) => void,
): (e: T) => void {
  if (!handler) return

  let shouldStopPropagation = true
  return (e: T) => {
    const event: BaseEvent<T> = {
      ...e,
      preventDefault() {
        e.preventDefault()
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented()
      },
      stopPropagation() {
        console.error(
          'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.',
        )
      },
      continuePropagation() {
        shouldStopPropagation = false
      },
    }

    handler(event)

    if (shouldStopPropagation) {
      e.stopPropagation()
    }
  }
}

type KeyboardEvents = {
  // Handler is called when target key is pressed
  onKeyDown?: (e: React.KeyboardEvent) => void
  // Handler is called when target key is unpressed
  onKeyUp?: (e: React.KeyboardEvent) => void
}

export function useKeyboard({
  onKeyDown: handleKeyDown,
  onKeyUp: handleKeyUp,
}: KeyboardEvents): {
  getKeyboardProps: () => KeyboardEvents
} {
  const getKeyboardProps = React.useCallback(
    () => ({
      onKeyDown: eventHandler(handleKeyDown),
      onKeyUp: eventHandler(handleKeyUp),
    }),
    [handleKeyDown, handleKeyUp],
  )

  return {
    getKeyboardProps,
  }
}
