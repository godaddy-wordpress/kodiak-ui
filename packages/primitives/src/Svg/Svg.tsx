import styled from '@emotion/styled'
import { _variant, VariantProps, sx, css, SxProps, Theme } from 'kodiak-ui'

/**
 * base
 *
 * Generate the base CSS filled by the currentColor by default
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
    fill: 'currentColor',
    display: 'block',
  })(theme)

type SvgProps = React.SVGProps<SVGSVGElement> & VariantProps & SxProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Svg = styled('svg')<SvgProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, theme, variantKey = 'svg' }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
