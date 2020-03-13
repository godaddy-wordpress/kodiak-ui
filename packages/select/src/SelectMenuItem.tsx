import * as React from 'react'
import { UseSelectGetItemPropsOptions } from 'downshift'
import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  systemProps,
  SystemProps,
  shouldForwardProp,
  sx,
} from '@kodiak-ui/core'

export type SelectMenuItemProps = {
  ref: React.Ref<HTMLLIElement>
  children: React.ReactNode
} & VariantProps &
  SystemProps &
  UseSelectGetItemPropsOptions<any>

const Li = styled('li', {
  shouldForwardProp,
})<SelectMenuItemProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey, theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
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
