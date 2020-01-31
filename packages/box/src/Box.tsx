import styled from '@emotion/styled'
import { css, IntrinsicSxElements } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  get,
} from 'styled-system'

/**
 * propNames are typed as string[] | undefined. Undefined is not
 * an iterator so we have to cast propNames to only a string[]
 */
const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
  ...(layout.propNames as string[]),
  ...(flexbox.propNames as string[]),
  ...(grid.propNames as string[]),
  ...(background.propNames as string[]),
  ...(border.propNames as string[]),
  ...(position.propNames as string[]),
  ...(shadow.propNames as string[]),
])

/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
function sx(props: any): SerializedStyles {
  return css(props.sx)(props.theme)
}

function variant(props: any) {
  const { variant, theme } = props
  const variantKey = variant && variant.split('.')[1]
  return css(get(theme, variant, get(theme, variantKey)))(theme)
}

type BoxProps = {
  as?: React.ElementType
  variant?: string
} & SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  IntrinsicSxElements['div']

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Box = styled<'div', BoxProps>('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  variant,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  sx,
)
