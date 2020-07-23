import * as React from 'react'
import { isClient } from '@kodiak-ui/utils'

export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(
    isClient ? () => window.matchMedia(query).matches : defaultState,
  )

  React.useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    const onChange = () => {
      if (!mounted) {
        return
      }
      setState(!!mql.matches)
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}
