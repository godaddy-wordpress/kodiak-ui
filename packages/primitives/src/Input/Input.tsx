import styled from '@emotion/styled'
import { Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  _variant,
  sx,
  VariantProps,
  getVariants,
  BaseProp,
  SxStyleProp,, getComponentBase
} from 'kodiak-ui'

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

function base({ theme, __base, base }) {
  const styles = getComponentBase(base ? base : 'input')(theme)
  if (Object.keys(styles)?.length === 0) {
    return css(__base)(theme)
  }
  return styles
}

const inputVariant = ({
  variant: variantProp,
  variantKey,
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export type InputProps = BaseProp &
  VariantProps &
  SxStyleProp &
  React.HTMLProps<HTMLInputElement>

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
  base,
  inputVariant,
  sx,
)
