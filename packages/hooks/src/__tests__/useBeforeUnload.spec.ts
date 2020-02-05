import { renderHook } from '@testing-library/react-hooks'
import { useBeforeUnload } from '../useBeforeUnload'

describe('useBeforeUnload', () => {
  let addEventListenerSpy: jest.SpyInstance
  let removeEventListenerSpy: jest.SpyInstance
  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, 'addEventListener')
    removeEventListenerSpy = jest.spyOn(window, 'addEventListener')
  })

  afterEach(() => {
    addEventListenerSpy.mockRestore()
  })

  it('should add event listener', () => {
    renderHook(() => useBeforeUnload({ enabled: true }))
    expect(addEventListenerSpy).toBeCalled()
  })

  it('should remove event listener', () => {
    renderHook(() => useBeforeUnload({ enabled: false }))
    expect(removeEventListenerSpy).toBeCalled()
  })
})
