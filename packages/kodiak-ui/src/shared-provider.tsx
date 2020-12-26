import * as React from 'react'
import { ReactNode } from 'react'
import { ThemeUIStyleObject } from '.'

export function SharedSx({
  sx,
  children,
}: {
  sx: ThemeUIStyleObject
  children: ReactNode
}) {
  return (
    <>
      {React.Children.map(
        children,
        child =>
          child &&
          React.cloneElement(child as any, {
            __shared: sx,
          }),
      )}
    </>
  )
}
