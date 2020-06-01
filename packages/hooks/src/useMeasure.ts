import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useMeasure = <T>(): [
  { ref: React.MutableRefObject<T | null> },
  {
    left: number
    top: number
    width: number
    height: number
    bottom: number
    x: number
    y: number
  },
] => {
  const ref = React.useRef(null)
  const [bounds, set] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    x: 0,
    y: 0,
  })
  const [ro] = React.useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect)),
  )
  React.useEffect(() => {
    if (ref && ref.current) ro.observe((ref.current as unknown) as Element)
    return () => ro.disconnect()
  }, [ro])
  return [{ ref }, bounds]
}
