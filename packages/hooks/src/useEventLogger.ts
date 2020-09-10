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
      const reducedEvent = get().eventReducers?.reduce(
        (event, reducer) => reducer(event),
        event,
      )
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
