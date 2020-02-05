import { renderHook } from '@testing-library/react-hooks'
import { useBeforeUnload } from '../useBeforeUnload'

describe('useBeforeUnload', () => {
  let addEventListenerSpy: jest.SpyInstance
  let removeEventListenerSpy: jest.SpyInstance
  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
  })

  it('should add event listener', () => {
    renderHook(() => useBeforeUnload({ enabled: true }))
    expect(addEventListenerSpy).toBeCalled()

    const addBeforeUnloadCalls = addEventListenerSpy.mock.calls.filter(
      calledFn => {
        return calledFn[0] === 'beforeunload'
      },
    )
    expect(addBeforeUnloadCalls.length).toBe(1)

    const mockOnBeforeUnloadEvent = {
      preventDefault: jest.fn(),
    }

    const preventUnload = addBeforeUnloadCalls[0][1]
    preventUnload(mockOnBeforeUnloadEvent)

    expect(mockOnBeforeUnloadEvent.preventDefault).toBeCalledTimes(1)
  })

  it('should remove event listener', () => {
    expect(removeEventListenerSpy).toBeCalledTimes(0)
    renderHook(() => useBeforeUnload({ enabled: false }))

    const removeBeforeUnloadCalls = removeEventListenerSpy.mock.calls.filter(
      calledFn => {
        return calledFn[0] === 'beforeunload'
      },
    )
    expect(removeBeforeUnloadCalls.length).toBe(1)
  })
})
