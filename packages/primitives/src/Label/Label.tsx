import {
  css,
  _variant,
  styled,
  sx,
  getComponentBase,
  getVariants,
  KodiakUIProps,
} from 'kodiak-ui'

/**
 * We use the styled API instead of passing `label` to the as prop
 * of Box to keep typing consistent so that we can properly type
 * all of the HTML Label Props
 */

export type LabelProps = KodiakUIProps & { children?: React.ReactNode }

function base({ theme, __base, base }) {
  const styles = getComponentBase(base ? base : 'label')(theme)

  if (!styles || Object.keys(styles)?.length === 0) {
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

export const Label = styled('label')<LabelProps>(
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
