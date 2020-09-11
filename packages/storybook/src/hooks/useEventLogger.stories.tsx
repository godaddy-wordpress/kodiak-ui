/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import {
  useEventLoggerReducers,
  useEventLogger,
  Event,
} from '@kodiak-ui/hooks/use-event-logger'
import { useEventLogRoute } from '@kodiak-ui/hooks'
import {
  Link,
  Switch,
  Route,
  BrowserRouter,
  useLocation,
} from 'react-router-dom'
import {
  Box,
  Button,
  AnchorButton,
  Grid,
  Text,
  Link as KodiakLink,
} from '@kodiak-ui/primitives'

export default { title: 'Hooks/useEventLogger' }

let id = 0

export function LogEvent() {
  function LogRouteEvent() {
    const [log, setLog] = React.useState([])
    const logEvent = useEventLogger()
    const currentPrice = '12345'

    useEventLoggerReducers(
      {
        initialEventReducers: [
          // Add an id to the event
          (event: Event) => {
            // We get rid of the source event before console logging
            // because it is a synthetic event
            // but we still have access to it
            const { sourceEvent, ...payload } = event?.payload
            return {
              ...event,
              payload: {
                ...payload,
                id: ++id,
                currentPrice,
                role: sourceEvent.target?.getAttribute('role'),
              },
            }
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
      },
      [currentPrice], // needs a dependency array if the initial config depends on these
    )

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
          <KodiakLink href="https://jilt.com" target="_blank">
            External link
          </KodiakLink>

          <Text>Current iframe route: </Text>
          <Switch>
            <Route path="/pricing">Pricing</Route>
            <Route path="/home">Home</Route>
          </Switch>
          <Grid sx={{ maxWidth: '200px', gap: 4 }}>
            <Button
              aria-label="aria-label for the event target"
              onMouseOver={e => {
                const target = e.target as HTMLButtonElement
                logEvent({
                  name: 'MOUSE_OVER',
                  payload: {
                    sourceLabel:
                      target?.getAttribute('aria-label') || target.textContent,
                  },
                })
              }}
            >
              Fire a mouse over event
            </Button>

            <Button>
              <Text>Button with no aria-label</Text>
            </Button>

            <AnchorButton
              variant="secondary"
              href="https://app.jilt.com"
              target="_blank"
              onClick={event => console.info('Clicked the anchor button')}
            >
              Anchor button
            </AnchorButton>
          </Grid>
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
