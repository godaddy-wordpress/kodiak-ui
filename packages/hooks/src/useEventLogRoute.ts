import * as React from 'react'
import { Event, useEventLogger } from './useEventLogger'

interface RouteEvent extends Event {
  name: 'ROUTE_CHANGE'
  payload: { location: string; clientEventTime: Date }
}

export function useEventLogRoute({ location }: { location: string }) {
  const { logEvent } = useEventLogger()

  React.useEffect(
    function logRouteEvent() {
      const event: RouteEvent = {
        name: 'ROUTE_CHANGE',
        payload: { location, clientEventTime: new Date() },
      }

      logEvent?.(event)
    },
    [location, logEvent],
  )
}
