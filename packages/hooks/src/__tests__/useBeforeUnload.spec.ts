import { renderHook } from '@testing-library/react-hooks'
import { useBeforeUnload } from '../useBeforeUnload'

describe('useBeforeUnload', () => {
  let addEventListenerSpy: jest.SpyInstance

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, 'addEventListener')
  })

  afterEach(() => {
    addEventListenerSpy.mockRestore()
  })

  it('should add event listener', () => {
    renderHook(() => useBeforeUnload({ enabled: true }))
    expect(addEventListenerSpy).toBeCalled()
  })
})
