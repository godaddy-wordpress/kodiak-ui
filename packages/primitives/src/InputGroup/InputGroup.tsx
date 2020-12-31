import * as React from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box } from '../Box'

export type InputGroupProps = {
  children: React.ReactNode
} & KodiakUIProps

export const InputGroup = React.forwardRef(function InputGroup(
  {
    variant = 'group',
    variantKey = 'inputs',
    base,
    sx,
    children,
    ...props
  }: InputGroupProps,
  ref: React.Ref<any>,
) {
  return (
    <Box
      {...props}
      ref={ref}
      base={base}
      variant={variant}
      variantKey={variantKey}
      sx={{
        display: 'flex',
        position: 'relative',
        width: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
})
