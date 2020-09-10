/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { useEventLoggerReducers } from '@kodiak-ui/hooks/use-event-logger'
import { useEventLogRoute } from '@kodiak-ui/hooks'
import {
  Link,
  Switch,
  Route,
  BrowserRouter,
  useLocation,
} from 'react-router-dom'
import { Box, Grid, Text } from '@kodiak-ui/primitives'

export default { title: 'Hooks/useEventLogger' }

let id = 0

export function LogEvent() {
  function LogRouteEvent() {
    const [log, setLog] = React.useState([])

    useEventLoggerReducers({
      initialEventReducers: [
        // Add an id to the event
        event => {
          return { ...event, id: ++id, userId: '12345' }
        },
        // Console.log the event
        event => {
          if (!event) {
            return
          }
          console.log(event)
          return event
        },
        // add it to an event log
        event => {
          if (!event) {
            return
          }
          setLog(log => [...log, event])
          return event
        },
      ],
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { key, ...location } = useLocation() // we don't want to watch key changes if the user stays on the same route

    useEventLogRoute({ location: JSON.stringify(location, null, 2) })

    return (
      <React.Fragment>
        <Grid sx={{ gap: 2 }}>
          <Text as="span" variant="heading" sx={{ mt: 2 }}>
            Choose a link to log the event
          </Text>
          <Link to="/home">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Text>Current iframe route: </Text>
          <Switch>
            <Route path="/home">Home</Route>
            <Route path="/pricing">Pricing</Route>
          </Switch>
        </Grid>

        <Grid sx={{ mt: 4 }}>
          <Text as="span" variant="heading" sx={{ mt: 2 }}>
            List of events
          </Text>
          {log.map((event, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              {JSON.stringify(event, null, 2)}
            </Box>
          ))}
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <LogRouteEvent />
      </BrowserRouter>
    </div>
  )
}
