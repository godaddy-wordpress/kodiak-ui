import * as React from 'react'
import create from 'zustand'

type EventType = string

export interface Event {
  name: EventType
  payload: any
}

type EventReducer = (event: Event) => Event

type EventLoggerStore = {
  logEvent: (event: Event) => void
  eventReducers: EventReducer[]
  setEventReducers: (eventReducers: EventReducer[]) => void
}

// Middleware is just used to reduce/transform/process a single event
// [transform1, transform2] => transform2(transform1(event)) : Event
export const useEventLoggerStore = create<EventLoggerStore>(
  (set, get): EventLoggerStore => ({
    logEvent: async (event: Event) => {
      get().eventReducers?.reduce((event, reducer) => reducer(event), event)
    },
    eventReducers: [],
    setEventReducers: (eventReducers: EventReducer[]) =>
      set({
        eventReducers,
      }),
  }),
)

const logEventSelector = (store: EventLoggerStore) => store.logEvent
const setEventReducersSelector = (store: EventLoggerStore) =>
  store.setEventReducers
const eventReducersSelector = (store: EventLoggerStore) => store.eventReducers

export function useEventLogger() {
  const logEvent = useEventLoggerStore(logEventSelector)

  return logEvent
}

export function useEventLoggerReducers(
  { initialEventReducers },
  deps?: React.DependencyList, // if we need to re-initialize the event reducers there needs to be a dependency array
) {
  const setEventReducers = useEventLoggerStore(setEventReducersSelector)
  const eventReducers = useEventLoggerStore(eventReducersSelector)
  const initialEventReducersRef = React.useRef(initialEventReducers)

  React.useEffect(
    function setupEventReducers() {
      setEventReducers(initialEventReducersRef.current)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setEventReducers, ...(Array.isArray(deps) ? deps : [])],
  )

  return [eventReducers, setEventReducers]
}

type UseWrappedEventHandlerProps = {
  isLoggingEventsActive?: boolean
  name: string
  handler?: (any) => void
  addToPayload?: (event) => void
}

export function useWrappedEventHandler({
  name,
  handler,
  addToPayload,
  isLoggingEventsActive: isActive = true,
}: UseWrappedEventHandlerProps) {
  // use ref's in case they are not memoized so the user doesn't need
  // to remember to memoize
  const handlerRef = React.useRef({ handler, addToPayload })
  handlerRef.current = { handler, addToPayload }

  const wrappedEvent = React.useCallback(
    function handleEvent(sourceEvent) {
      if (isActive) {
        const target = sourceEvent?.target as HTMLElement
        const logEvent = useEventLoggerStore.getState().logEvent

        logEvent({
          name,
          payload: {
            sourceEvent,
            sourceLabel:
              target?.getAttribute?.('aria-label') || target.textContent,
            ...(handlerRef?.current?.addToPayload
              ? handlerRef?.current?.addToPayload?.(sourceEvent)
              : {}),
          },
        })
      }
      handlerRef?.current?.handler?.(sourceEvent)
    },
    [isActive, name],
  )

  return wrappedEvent
}
