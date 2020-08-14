import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
  systemProps,
  SystemProps,
} from '../Box'
import { SxProps } from 'theme-ui'

type LabelProps = VariantProps & SystemProps & SxProps

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
