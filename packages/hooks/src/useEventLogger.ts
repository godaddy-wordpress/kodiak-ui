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

export function useEventLogger() {
  const logEvent = useEventLoggerStore(store => store.logEvent)

  return {
    logEvent,
  }
}

const emptyArray = []

export function useEventLoggerReducers(
  { initialEventReducers },
  deps?: React.DependencyList, // if we need to re-initialize the event reducers there needs to be a dependency array
) {
  const setEventReducers = useEventLoggerStore(store => store.setEventReducers)
  const eventReducers = useEventLoggerStore(store => store.eventReducers)
  const initialEventReducersRef = React.useRef(initialEventReducers)

  React.useEffect(
    function setupEventReducers() {
      setEventReducers(initialEventReducersRef.current)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setEventReducers, ...[deps ? deps : emptyArray]],
  )

  return [eventReducers, setEventReducers]
}
