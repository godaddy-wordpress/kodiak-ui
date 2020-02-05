import styled from '@emotion/styled'
import { Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  StyledSystemProps,
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
} from '../Box/Box'

/**
 * base
 *
 * Generate the base CSS filled by the currentColor by default
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    fill: 'currentColor',
    color: 'black',
    display: 'block',
  })(theme)

type SvgProps = {
  variant?: string
  variantKey?: string
} & StyledSystemProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Svg = styled<'svg', SvgProps>('svg', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, theme, variantKey = 'svg' }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...styledSystemProps,
  sx,
)
