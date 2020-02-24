import styled from '@emotion/styled'
import { IntrinsicSxElements } from 'theme-ui'
import {
  variant,
  VariantProps,
  sx,
  SystemProps,
  systemProps,
  shouldForwardProp,
  base,
  BaseProps,
} from '../Box'

type LinkProps = VariantProps &
  SystemProps &
  IntrinsicSxElements['a'] &
  BaseProps

export const Link = styled<'a', LinkProps>('a', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'a', variantKey = 'links', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  ...systemProps,
  sx,
)
