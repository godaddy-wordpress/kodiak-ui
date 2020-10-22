import * as React from 'react'
import { _variant, VariantProps, sx, styled, SxStyleProp } from 'kodiak-ui'

export type AccordionProps = {
  children: React.ReactNode
  sx?: SxStyleProp
} & VariantProps

export const Accordion = styled('div')<AccordionProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp = '', variantKey = 'accordions', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
