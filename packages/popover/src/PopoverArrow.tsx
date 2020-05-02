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

export type PopoverArrowProps = {
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

const PopoverArrowStyle = styled('div')<PopoverArrowProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'popoverArrow', variantKey = 'popovers', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const PopoverArrow = React.forwardRef(function PopoverArrow(
  props: PopoverArrowProps,
  ref: any,
) {
  return <PopoverArrowStyle ref={ref} {...props} />
})
