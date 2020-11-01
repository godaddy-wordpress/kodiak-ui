import * as React from 'react'
import { useSSR } from './useSSR'
import { useSubscribe, publish } from './useSubscribe'
// based on https://usehooks.com/useLocalStorage/
// with added updates when the key changes and event listener

function stringify<T>(value: T) {
  return typeof value === 'string' ? value : JSON.stringify(value)
}

function getLocalStorageValue<T>({
  key,
  initialValue,
}: {
  key: string
  initialValue: T
}) {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key)

    return item ? item : stringify(initialValue)
  } catch (error) {
    // If error also return initialValue
    return stringify(initialValue)
  }
}

type UseLocalStorageOptions = {
  addWindowStorageListener?: boolean // disabled by default
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions = { addWindowStorageListener: false },
): [T, (value: T) => void] {
  const { isServer } = useSSR()
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState<T>(initialValue)
  // Refresh if the key changes
  React.useEffect(() => {
    setStoredValue(
      JSON.parse(
        getLocalStorageValue<T>({ key, initialValue }),
      ),
    )
  }, [key, initialValue])

  const onStorage = React.useCallback(
    function onStorage({ key: k, newValue }: StorageEvent) {
      if (k === key) {
        const newState = newValue === null ? null : JSON.parse(newValue)

        if (storedValue !== newState) {
          setStoredValue(newState)
        }
      }
    },
    [key, storedValue],
  )

  const onStorageRef = React.useRef(onStorage)
  React.useEffect(() => {
    onStorageRef.current = onStorage
  }, [onStorage])

  // Cross browser tab 'storage' event listener
  React.useEffect(() => {
    if (isServer) {
      return
    }

    const handler = (event: StorageEvent) => onStorageRef.current(event)
    if (options.addWindowStorageListener) {
      window.addEventListener('storage', handler)
    }
    return () => {
      if (options.addWindowStorageListener) {
        window.removeEventListener('storage', handler)
      }
    }
  }, [isServer, onStorage, options.addWindowStorageListener])

  // Within window simulated 'storage' event
  useSubscribe(
    {
      key: `useLocalStorage:${key}`,
      handler: (message: StorageEvent) => {
        onStorage(message)
      },
    },
    [key],
  )

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = React.useCallback(
    function setValue(value: T) {
      if (isServer) {
        return
      }

      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        // Save state
        setStoredValue(valueToStore)
        // Save to local storage
        const itemValue = JSON.stringify(valueToStore)
        window.localStorage.setItem(key, itemValue)
        publish(`useLocalStorage:${key}`, { key: key, newValue: itemValue })
      } catch (error) {
        throw error
      }
    },
    [isServer, key, storedValue],
  )

  return [storedValue, setValue]
}
