import styled from '@emotion/styled'
import { _variant, VariantProps, sx } from '@kodiak-ui/core'

type TextProps = {
  as?: React.ElementType
} & VariantProps

export const Text = styled<'p', TextProps>('p')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'text', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
