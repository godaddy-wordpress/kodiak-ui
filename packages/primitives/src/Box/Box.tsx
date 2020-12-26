import * as React from 'react'
import {
  css,
  getComponentBase,
  getVariants,
  KodiakUIProps,
  styled,
  sx,
  shared,
  _variant,
  ThemeUIStyleObject,
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

export type BoxProps = KodiakUIProps & {
  as?: React.ElementType<any>
  children?: React.ReactNode
  __shared?: ThemeUIStyleObject
} & React.AllHTMLAttributes<HTMLElement>

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
    return <BoxStyle ref={ref} {...props} />
  },
)
