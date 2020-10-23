import { act, renderHook } from '@testing-library/react-hooks'
import { useDebounce } from '..'

jest.useFakeTimers()

const setUp = initialProps =>
  renderHook(({ value, delay }) => useDebounce(value, delay), { initialProps })

describe('useDebounce', () => {
  const initialValue = 'initialValue'
  const updatedValue = 'updatedValue'
  const delay = 500

  it('should return initial value in first render', () => {
    const { result } = setUp({ value: initialValue, delay })
    expect(result.current).toBe(initialValue)
  })

  it('should return updated value after delay', () => {
    const { result, rerender } = setUp({ value: initialValue, delay })

    rerender({ value: updatedValue })
    expect(result.current).toBe(initialValue)

    act(() => jest.advanceTimersByTime(delay))

    expect(result.current).toBe(updatedValue)
  })

  it('should use new delay value', () => {
    const newDelay = 100
    const { result, rerender } = setUp({ value: initialValue, delay })

    rerender({ delay: newDelay, value: updatedValue })

    act(() => jest.advanceTimersByTime(newDelay))

    expect(result.current).toBe(updatedValue)
  })
})
