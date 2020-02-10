import styled from '@emotion/styled'
import {
  variant,
  sx,
  shouldForwardProp,
  systemProps,
  SystemProps,
} from '../Box/Box'

type LabelProps = {
  variant?: string
} & SystemProps

export const Label = styled<'label', LabelProps>('label', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp = 'default', theme }) =>
    variant({ variantKey: 'labels', variant: variantProp, theme }),
  ...systemProps,
  sx,
)
