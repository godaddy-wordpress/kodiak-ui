import styled from '@emotion/styled'
import * as React from 'react'
import { css } from 'theme-ui'
import {
  BaseProp,
  getComponentBase,
  getVariants,
  KodiakUIProps,
  sx,
  VariantProps,
  _variant,
} from 'kodiak-ui'

function base({ theme, __base, base }) {
  const styles = base ? getComponentBase(base ? base : 'box')(theme) : null
  if (!styles) {
    return css(__base as any)(theme)
  }
  return styles
}

const boxVariant = ({ variant: variantProp, variantKey, variants, theme }) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export type BoxProps = React.PropsWithChildren<
  KodiakUIProps & { as?: string }
> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Box = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  boxVariant,
  sx,
)
