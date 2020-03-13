import * as React from 'react'
import { UseSelectGetMenuPropsOptions } from 'downshift'
import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  systemProps,
  SystemProps,
  shouldForwardProp,
  sx,
} from '@kodiak-ui/core'

export type SelectMenuProps = {
  ref: React.Ref<HTMLUListElement>
  children: React.ReactNode
} & VariantProps &
  SystemProps &
  UseSelectGetMenuPropsOptions

const Ul = styled('ul', {
  shouldForwardProp,
})<SelectMenuProps>(
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

export const SelectMenu = React.forwardRef(function SelectMenu(
  { children, variantKey = 'selects', ...props }: SelectMenuProps,
  ref: React.Ref<HTMLUListElement>,
) {
  return (
    <Ul ref={ref} variantKey={variantKey} {...props}>
      {children}
    </Ul>
  )
})
