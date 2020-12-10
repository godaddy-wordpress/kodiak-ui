import * as React from 'react'
import { forwardRef, ReactNode } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '..'

export type ListboxProps = { children: ReactNode } & KodiakUIProps

export const Listbox = forwardRef(({ base, ...props }: ListboxProps, ref) => {
  return (
    <Box
      ref={ref}
      as="ul"
      __base={{
        listStyle: 'none',
        p: 0,
        m: 0,
      }}
      base={base ? base : 'listbox'}
      {...props}
    />
  )
})
