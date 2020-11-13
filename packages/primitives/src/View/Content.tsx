import * as React from 'react'
import { forwardRef, MutableRefObject, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '../Box'

export type ContentProps = { children: ReactNode } & KodiakUIProps

export const Content = forwardRef(
  ({ base, ...props }: ContentProps, ref: MutableRefObject<any>) => {
    return (
      <Box ref={ref} as="section" base={base ? base : 'content'} {...props} />
    )
  },
)
