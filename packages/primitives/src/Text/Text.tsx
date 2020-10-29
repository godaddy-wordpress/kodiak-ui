import styled from '@emotion/styled'
import { _variant, sx, KodiakUIProps, getVariants } from 'kodiak-ui'

type TextProps = React.PropsWithChildren<{ as?: string }> & KodiakUIProps

const textVariant = ({
  variant: variantProp,
  variantKey = 'text',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export const Text = styled('p')<TextProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  textVariant,
  sx,
)
