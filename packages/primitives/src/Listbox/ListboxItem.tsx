import * as React from 'react'
import { forwardRef, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '..'

export type ListboxItemProps = {
  children: ReactNode
} & KodiakUIProps

export const ListboxItem = forwardRef(
  ({ base, ...props }: ListboxItemProps, ref) => {
    return (
      <Box ref={ref} as="li" base={base ? base : 'listboxItem'} {...props} />
    )
  },
)
