import styled from '@emotion/styled'
import * as React from 'react'
import {
  css,
  getComponentBase,
  getVariants,
  KodiakUIProps,
  sx,
  _variant,
} from 'kodiak-ui'
import type {
  OverridableComponent,
  OverrideProps,
} from '../types/OverridableComponent'

function base({ theme, __base, base }) {
  const styles = base ? getComponentBase(base ? base : 'box')(theme) : null

  if (!styles || Object.keys(styles)?.length === 0) {
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

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */

export interface BoxTypeMap<P = unknown, D extends React.ElementType = 'div'> {
  props: P & React.PropsWithChildren<KodiakUIProps>
  defaultComponent: D
}

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  P = unknown
> = OverrideProps<BoxTypeMap<P, D>, D>

// export type BoxComponent = OverridableComponent<BoxTypeMap>

export const Box: OverridableComponent<BoxTypeMap> = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  boxVariant,
  sx,
)
