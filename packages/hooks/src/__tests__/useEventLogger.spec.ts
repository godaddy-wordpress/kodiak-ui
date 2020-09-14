import { renderHook } from '@testing-library/react-hooks'
import {
  useEventLogger,
  useEventLoggerReducers,
  useWrappedEventHandler,
} from '../useEventLogger'
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
    expect(log[2].payload.location).toBe('/home')

    location = '/my_account'
    useEventLogRouteHook.rerender()

    expect(log.length).toBe(4)
    expect(log[3].payload.location).toBe('/my_account')
  })

  it('should add an event wrapper', () => {
    const addToPayload = jest.fn(event => ({
      test: true,
      href: event.target.href,
    }))
    const handler = jest.fn()
    const hook = renderHook(() =>
      useWrappedEventHandler({
        name: 'TEST_WRAPPER',
        addToPayload,
        handler,
      }),
    )

    const event = { target: { href: 'https://jilt.com' } }
    hook.result?.current(event)
    expect(addToPayload).toBeCalledTimes(1)
    expect(addToPayload).toBeCalledWith(event)
    expect(addToPayload).toReturnWith({ test: true, href: event.target.href })
    expect(handler).toBeCalledTimes(1)
    expect(handler).toBeCalledWith(event)
  })
})
