import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { KodiakUIProps } from 'kodiak-ui'

export type SelectProps = React.PropsWithChildren<KodiakUIProps>

export function Select({
  children,
  __base,
  variantKey = 'selects',
  ...props
}: SelectProps) {
  return (
    <Box
      __base={{ position: 'relative', ...__base }}
      variantKey={variantKey}
      {...props}
    >
      {children}
    </Box>
  )
}
