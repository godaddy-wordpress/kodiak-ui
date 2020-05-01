import * as React from 'react'

let id = 0
const generateId = () => `${++id}`

export function useId(idFromProps?: string | null): string | undefined {
  const [id, setId] = React.useState(idFromProps)

  React.useLayoutEffect(function setIdOnRender() {
    if (!id) {
      setId(generateId())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return id !== null ? id : undefined
}
