import * as React from 'react'
import { Box } from '@kodiak-ui/primitives/box'
import { SxStyleProp, VariantProps } from 'kodiak-ui'

type TooltipArrowProps = VariantProps & {
  styles?: {
    root?: SxStyleProp
    before?: SxStyleProp
  }
}

export const TooltipArrow = React.forwardRef(function TooltipArrow(
  { variant = 'tooltipArrow', styles, ...props }: TooltipArrowProps,
  ref: any,
) {
  return (
    <Box
      ref={ref}
      sx={{
        position: 'absolute',
        width: '8px',
        height: '8px',
        zIndex: -1,
        '::before': {
          bg: 'white',
          content: "''",
          transform: 'rotate(45deg)',
          position: 'absolute',
          width: '8px',
          height: '8px',
          zIndex: -1,
          ...styles?.before,
        },
        ...styles?.root,
      }}
      id="kodiak-ui-tooltip-arrow"
      variantKey="tooltips"
      variant={variant}
      data-popper-arrow
      {...props}
    />
  )
})
