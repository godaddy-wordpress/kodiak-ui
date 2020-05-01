import * as React from 'react'
import {
  variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from '@kodiak-ui/core'

export type PopoverProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    bg: 'white',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    p: 2,
    maxWidth: '250px',
  })(theme)
}

const PopoverStyle = styled('div')<PopoverProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'popovers', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const Popover = React.forwardRef<HTMLElement, PopoverProps>(
  function Popover(props: PopoverProps, ref: any) {
    return <PopoverStyle ref={ref} tabIndex={-1} {...props} />
  },
)
