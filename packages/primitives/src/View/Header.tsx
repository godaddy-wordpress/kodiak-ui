import * as React from 'react'
import { forwardRef, MutableRefObject, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '../Box'

export type HeaderProps = {
  children: ReactNode
  __shared?: any
} & KodiakUIProps

export const Header = forwardRef(
  ({ base, ...props }: HeaderProps, ref: MutableRefObject<any>) => {
    return (
      <Box ref={ref} as="header" base={base ? base : 'header'} {...props} />
    )
  },
)
