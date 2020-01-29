import styled from '@emotion/styled'
import { css, IntrinsicSxElements } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { space, color, SpaceProps, ColorProps } from 'styled-system'

/**
 * propNames are typed as string[] | undefined. Undefined is not
 * an iterator so we have to cast propNames to only a string[]
 */
const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
])

/**
 * sx function to pass the sx prop and theme
 * into Theme UI's css function with parses the values in the
 * prop and serializing them with the theme values
 *
 * @param props any
 */
const sx = (props: any): SerializedStyles => {
  return css(props.sx)(props.theme)
}

type BoxProps = { as?: React.ElementType } & SpaceProps &
  ColorProps &
  IntrinsicSxElements['div']

/**
 * Box primitive component which is the base compoent for
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
  space,
  color,
  sx,
)
