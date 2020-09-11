import { renderHook } from '@testing-library/react-hooks'
import { useEventLogger, useEventLoggerReducers } from '../useEventLogger'
import { useEventLogRoute } from '../useEventLogRoute'

describe('useEventLogger', () => {
  it('should log an event', () => {
    let log = []
    renderHook(() =>
      useEventLoggerReducers({
        initialEventReducers: [
          event => {
            log = [...log, event]
            return event
          },
        ],
      }),
    )
    const hook = renderHook(() => useEventLogger())
    const logEventRef = hook.result
    logEventRef.current({
      name: 'TEST_EVENT',
      payload: { id: 1, data: 'TESTING' },
    })

    expect(log.length).toBe(1)

    logEventRef.current({
      name: 'TEST_EVENT',
      payload: { id: 2, data: 'TESTING' },
    })
    expect(log.length).toBe(2)

    expect(log.filter(event => event.id === 2)).toBeTruthy()

    // route log tests, add on to the existing log
    let location = '/home'
    const useEventLogRouteHook = renderHook(() =>
      useEventLogRoute({ location }),
    )

    expect(log.length).toBe(3)
    expect(log[3].payload.location).toBe('/home')

    location = '/my_account'
    useEventLogRouteHook.rerender()

    expect(log.length).toBe(4)
    expect(log[3].payload.location).toBe('/my_account')
  })
})
