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
import { Placement } from '@popperjs/core'

export type TooltipArrowProps = {
  placement: Placement
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
      bg: 'black',
      content: '""',
      transform: 'rotate(45deg)',
    },
  })(theme)
}

const TooltipArrowStyle = styled('div')<TooltipArrowProps>(
  {
    boxSizing: 'border-box',
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
