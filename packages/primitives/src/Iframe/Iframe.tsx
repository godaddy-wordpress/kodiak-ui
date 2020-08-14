import styled from '@emotion/styled'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
  systemProps,
  SystemProps,
} from '../Box'

type IframeProps = VariantProps & SystemProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Iframe = styled<'iframe', IframeProps>('iframe', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    display: 'block',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, theme }) =>
    variant({ variant: variantProp, theme, variantKey: 'iframes' }),
  ...systemProps,
  sx,
)
