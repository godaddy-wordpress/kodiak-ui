import * as React from 'react'
import {
  variant as _variant,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from '@kodiak-ui/core'

export type AccordionProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({})(theme)
}

export const Accordion = styled('div')<AccordionProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = '', variantKey = 'accordions', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
