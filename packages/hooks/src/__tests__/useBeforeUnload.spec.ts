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
  })

  it('should remove event listener', () => {
    expect(removeEventListenerSpy).toBeCalledTimes(0)
    renderHook(() => useBeforeUnload({ enabled: false }))
    expect(removeEventListenerSpy).toBeCalled()
  })
})
