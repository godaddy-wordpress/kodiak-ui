import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage } from '../useLocalStorage'

describe('useLocalStorage', () => {
  it('should work with an initial value of an object', () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

    const { result } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'aKey',
          initialValue: { test: true },
        },
      },
    )

    expect(getItemSpy).toHaveBeenCalledWith('aKey')
    expect(getItemSpy).toHaveBeenCalledTimes(1)

    const [value, setValue] = result.current
    expect(value).toEqual({ test: true })

    act(() => {
      setValue({ test: false })
    })

    expect(setItemSpy).toHaveBeenCalledWith(
      'aKey',
      JSON.stringify({ test: false }),
    )
    expect(setItemSpy).toHaveBeenCalledTimes(1)

    expect(result.current[0]).toEqual({ test: false })
    expect(JSON.parse(window.localStorage.getItem('aKey') as string)).toEqual({
      test: false,
    })

    const { result: result2, rerender } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'aKey',
          initialValue: { test: true },
        },
      },
    )
    // it should retrieve the result in subsequent render
    expect(result2.current[0]).toEqual({ test: false })

    // A different key starts with the initial value
    rerender({ key: 'differentKey', initialValue: { test: true } })
    expect(result2.current[0]).toEqual({ test: true })
  })

  it('raise events accross listeners', () => {
    const { result } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'key1',
          initialValue: { test: true },
        },
      },
    )

    const { result: result2 } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'key1',
          initialValue: { test: true },
        },
      },
    )

    expect(result.current[0]).toEqual(result2.current[0])

    act(() => {
      const [, setValue] = result.current
      setValue({ test: false })
    })

    expect(result.current[0]).toEqual({ test: false })
    expect(result.current[0]).toEqual(result2.current[0])
  })

  it('after changing the key, events are still triggered ', () => {
    const { result, rerender } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'key1',
          initialValue: { value: 'starting' },
        },
      },
    )

    const { result: result2 } = renderHook(
      ({ key, initialValue }) => useLocalStorage(key, initialValue),
      {
        initialProps: {
          key: 'key2',
          initialValue: { value: 'starting' },
        },
      },
    )
    act(() => {
      const [, setKey2Value] = result2.current
      setKey2Value({ value: 'changed before second listener' })
    })

    act(() => {
      rerender({
        key: 'key2',
        initialValue: { value: 'key 2 initial value not used' },
      })
    })

    const [value, setValue] = result.current
    expect(value).toEqual({ value: 'changed before second listener' })
    act(() => {
      setValue({ value: 'changed' })
    })

    // First hook has changed
    expect(result.current[0]).toEqual({ value: 'changed' })

    // Second hook has followed changes
    const [value2] = result2.current
    expect(value2).toEqual({ value: 'changed' })
  })
})
