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

export type TooltipProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    bg: 'white',
    border: '1px solid',
    borderColor: 'muted',
    borderRadius: 'default',
    maxWidth: '250px',
  })(theme)
}

const TooltipStyle = styled('div')<TooltipProps>(
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

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>(
  function Tooltip(props: TooltipProps, ref: any) {
    return <TooltipStyle ref={ref} tabIndex={-1} {...props} />
  },
)
