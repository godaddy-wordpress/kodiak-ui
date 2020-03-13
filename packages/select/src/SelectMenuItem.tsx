import * as React from 'react'
import { UseSelectGetItemPropsOptions } from 'downshift'
import {
  variant,
  VariantProps,
  shouldForwardProp,
  sx,
  styled,
} from '@kodiak-ui/core'

export type SelectMenuItemProps = {
  ref: React.Ref<HTMLLIElement>
  children: React.ReactNode
  highlightedIndex?: number
} & VariantProps &
  UseSelectGetItemPropsOptions<any>

const Li = styled('li')<SelectMenuItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey, theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const SelectMenuItem = React.forwardRef(function SelectMenuItem(
  { children, variantKey = 'selects', ...props }: SelectMenuItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  return (
    <Li ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Li>
  )
})
