import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
  systemProps,
  SystemProps,
} from '../Box/Box'

type LabelProps = VariantProps & SystemProps

export const Label = styled<'label', LabelProps>('label', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'labels', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  ...systemProps,
  sx,
)
