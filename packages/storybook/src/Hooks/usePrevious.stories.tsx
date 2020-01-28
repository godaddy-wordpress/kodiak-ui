import * as React from 'react'
import { usePrevious } from '@kodiak/hooks'

export default {
  title: 'Hooks/usePrevious',
}

function Example() {
  const [count, setCount] = React.useState(0)
  const prevCount = usePrevious<number>(count)

  return (
    <>
      <p>Previous count: {prevCount}</p>
      <p>Current count: {count}</p>
      <button type="button" onClick={setCount(count + 1)}>
        Increase count
      </button>
    </>
  )
}

export const normal = () => <Example />
