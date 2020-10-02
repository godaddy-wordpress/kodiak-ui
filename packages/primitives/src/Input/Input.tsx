import styled from '@emotion/styled'
import { SxStyleProp, Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { _variant, sx, VariantProps } from 'kodiak-ui'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
    color: 'inherit',
    bg: 'transparent',
  })(theme)

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps & { sx?: SxStyleProp }

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Input = styled('input')<InputProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, variantKey = 'inputs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
