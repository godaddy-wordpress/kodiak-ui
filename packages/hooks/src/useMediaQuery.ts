import * as React from 'react'

export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(
    () => window.matchMedia(query).matches,
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
