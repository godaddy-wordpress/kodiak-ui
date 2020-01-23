import { renderHook } from '@testing-library/react-hooks'
import { useIsMounted } from '../useIsMounted'

describe('useIsMounted', () => {
  it('should be defined', () => {
    expect(useIsMounted).toBeDefined()
  })

  it('should return a function', () => {
    const hook = renderHook(() => useIsMounted(), { initialProps: false })

    expect(typeof hook.result.current).toEqual('function')
  })

  it('should return true if component is mounted', () => {
    const hook = renderHook(() => useIsMounted(), { initialProps: false })

    expect(hook.result.current()).toBeTruthy()
  })

  it('should return false if component is unmounted', () => {
    const hook = renderHook(() => useIsMounted(), { initialProps: false })

    hook.unmount()

    expect(hook.result.current()).toBeFalsy()
  })
})
