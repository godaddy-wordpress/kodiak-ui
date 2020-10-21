import * as React from 'react'
import { _variant, sx, styled, KodiakUIProps } from 'kodiak-ui'

export type AccordionItemProps = {
  children: React.ReactNode
} & KodiakUIProps

export const AccordionItem = styled('div')<AccordionItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({
    variant: variantProp = 'accordionItem',
    variantKey = 'accordions',
    theme,
  }) => _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
