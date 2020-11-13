import * as React from 'react'
import { ReactNode } from 'react'
import { ThemeUIStyleObject } from './types'

export function SharedSx({
  sx,
  children,
}: {
  sx: ThemeUIStyleObject
  children: ReactNode
}) {
  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child as any, {
          __shared: sx,
        }),
      )}
    </>
  )
}
