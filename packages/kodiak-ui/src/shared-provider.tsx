import * as React from 'react'
import { ReactNode } from 'react'
import { ThemeUIStyleObject } from './types'

type ContextValue = {
  __shared: ThemeUIStyleObject
}

const Context = React.createContext<ContextValue>({
  __shared: {},
})

export const useSharedSx = () => React.useContext(Context)

export function SharedSx({
  sx,
  children,
}: {
  sx: ThemeUIStyleObject
  children: ReactNode
}) {
  return (
    <Context.Provider value={{ __shared: sx }}>{children}</Context.Provider>
  )
}
