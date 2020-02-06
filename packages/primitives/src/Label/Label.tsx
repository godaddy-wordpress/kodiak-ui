import styled from '@emotion/styled'
import {
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
  StyledSystemProps,
} from '../Box/Box'

type LabelProps = {
  variant?: string
  variantKey?: string
} & StyledSystemProps

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
  ...styledSystemProps,
  sx,
)
