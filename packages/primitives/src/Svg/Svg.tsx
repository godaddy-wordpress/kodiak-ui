import styled from '@emotion/styled'
import { Theme, css, SxStyleProp } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { variant, VariantProps, sx } from '@kodiak-ui/core'

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

type SvgProps = React.SVGProps<SVGSVGElement> &
  VariantProps & { sx?: SxStyleProp }

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
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)
