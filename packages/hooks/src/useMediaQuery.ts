import * as React from 'react'
import { useSSR } from './useSSR'

export const useMediaQuery = (query: string, defaultState = false) => {
  const { isServer } = useSSR()
  const [state, setState] = React.useState(
    () => window.matchMedia(query).matches,
  )

  React.useEffect(() => {
    if (isServer) {
      return
    }

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
  }, [isServer, query])

  return state
}
