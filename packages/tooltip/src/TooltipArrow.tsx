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

export type TooltipArrowProps = {
  sx?: SxStyleProp
} & VariantProps

const rootStyles: any = {
  position: 'absolute',
  width: '8px',
  height: '8px',
  zIndex: -1,
}

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    ...rootStyles,
    '::before': {
      ...rootStyles,
      content: '""',
      transform: 'rotate(45deg)',
      background: 'white',
    },
  })(theme)
}

const TooltipArrowStyle = styled('div')<TooltipArrowProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'tooltipArrow', variantKey = 'tooltips', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const TooltipArrow = React.forwardRef(function TooltipArrow(
  props: TooltipArrowProps,
  ref: any,
) {
  return <TooltipArrowStyle ref={ref} {...props} />
})
