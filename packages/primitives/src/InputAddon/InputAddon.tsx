import * as React from 'react'
import { VariantProps } from '@kodiak-ui/core'
import { Box } from '../Box'

type InputAddonProps = {
  children: React.ReactNode
  position?: 'left' | 'right'
} & VariantProps

export const InputAddon = React.forwardRef(function InputAddon(
  {
    position = 'left',
    variant = 'addon',
    variantKey = 'inputs',
    children,
    ...props
  }: InputAddonProps,
  ref: React.Ref<any>,
) {
  const radii =
    position === 'right'
      ? {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }
      : {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }

  const borders =
    position === 'right'
      ? {
          borderTop: 'none',
          borderBottom: 'none',
          borderRight: 'none',
        }
      : {
          borderTop: 'none',
          borderBottom: 'none',
          borderLeft: 'none',
        }

  return (
    <Box
      {...props}
      ref={ref}
      variant={variant}
      variantKey={variantKey}
      sx={{
        ...radii,
        ...borders,
        display: 'flex',
        flex: '0 0 auto',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        width: 'auto',
      }}
    >
      {children}
    </Box>
  )
})
