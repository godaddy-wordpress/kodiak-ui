/** @jsx jsx */

import styled from '@emotion/styled'
import { css, jsx } from 'theme-ui'
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

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    JSX.IntrinsicAttributes {
  /** Pass in a valid React.ElementType to render the Box as a different element than div */
  as?: React.ElementType
}

/**
 * Box primitive component which is the base compoent for
 * all components in Kodiak
 */
export const Box = styled(
  ({ as: T = 'div', ...props }: BoxProps) => <T {...props} />,
  {
    shouldForwardProp,
  },
)(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  space,
  color,
  sx,
)
