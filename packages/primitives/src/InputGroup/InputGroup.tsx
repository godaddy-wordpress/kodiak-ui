import * as React from 'react'
import { VariantProps, SxStyleProp } from 'kodiak-ui'
import { Box } from '../Box'

export type InputGroupProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export const InputGroup = React.forwardRef(function InputGroup(
  {
    variant = 'group',
    variantKey = 'inputs',
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
      variant={variant}
      variantKey={variantKey}
      sx={{
        display: 'flex',
        p: 0,
        position: 'relative',
        width: '100%',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
})
