import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Event, useEventLogger } from './useEventLogger'

interface RouteEvent extends Event {
  name: 'ROUTE_CHANGE'
  payload: ReturnType<typeof useLocation>
}

export function useEventLogRoute() {
  const location = useLocation()
  const { logEvent } = useEventLogger()

  React.useEffect(
    function logRouteEvent() {
      const event: RouteEvent = {
        name: 'ROUTE_CHANGE',
        payload: { ...location, clientEventTime: new Date() },
      }

      logEvent?.(event)
    },
    [location, logEvent],
  )
}
