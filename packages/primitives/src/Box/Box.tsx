import styled from '@emotion/styled'
import * as React from 'react'
import {
  css,
  getComponentBase,
  getVariants,
  KodiakUIProps,
  sx,
  shared,
  _variant,
  useSharedSx,
} from 'kodiak-ui'

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

export type BoxProps = React.PropsWithChildren<
  KodiakUIProps & {
    ref?: React.MutableRefObject<any>
    as?: string
    __shared?: any
  } & React.AllHTMLAttributes<HTMLElement>
>

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
const BoxStyle = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  shared,
  boxVariant,
  sx,
)

export const Box = React.forwardRef(
  (props: BoxProps, ref: React.MutableRefObject<any>) => {
    const shared = useSharedSx()
    return <BoxStyle ref={ref} {...shared} {...props} />
  },
)
