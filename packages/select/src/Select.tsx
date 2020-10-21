import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { KodiakUIProps } from 'kodiak-ui'

export type SelectProps = React.PropsWithChildren<KodiakUIProps>
export function Select({
  children,
  variantKey = 'selects',
  ...props
}: SelectProps) {
  return (
    <Box __base={{ position: 'relative' }} variantKey={variantKey} {...props}>
      {children}
    </Box>
  )
}
