import styled from '@emotion/styled'
import { _variant, VariantProps, sx } from 'kodiak-ui'

type IframeProps = VariantProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Iframe = styled('iframe')<IframeProps>(
  {
    boxSizing: 'border-box',
    display: 'block',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, theme }) =>
    _variant({ variant: variantProp, theme, variantKey: 'iframes' }),
  sx,
)
