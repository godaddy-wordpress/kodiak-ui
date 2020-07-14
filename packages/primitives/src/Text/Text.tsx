import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  systemProps,
  SystemProps,
  shouldForwardProp,
} from '../Box'

type TextProps = {
  as?: React.ElementType
} & VariantProps &
  SystemProps

export const Text = styled<'p', TextProps>('p', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'text', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
  sx,
)
