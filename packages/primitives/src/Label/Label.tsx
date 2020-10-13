import styled from '@emotion/styled'
import {
  _variant,
  VariantProps,
  sx,
  SxStyleProp,
  BaseProp,
  getComponentBase,
  getVariants,
} from 'kodiak-ui'
import { css } from 'theme-ui'

/**
 * We use the styled API instead of passing `label` to the as prop
 * of Box to keep typing consistent so that we can properly type
 * all of the HTML Label Props
 */

export type LabelProps = BaseProp &
  VariantProps &
  SxStyleProp &
  React.HTMLProps<HTMLLabelElement>

function base({ theme, __base, base }) {
  const styles = getComponentBase(base ? base : 'label')(theme)
  if (Object.keys(styles)?.length === 0) {
    return css(__base)(theme)
  }
  return styles
}

const labelVariant = ({
  variant: variantProp,
  variantKey = 'labels',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export const Label = styled<'label', LabelProps>('label')(
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: 0,
    minWidth: 0,
  },
  base,
  labelVariant,
  sx,
)
