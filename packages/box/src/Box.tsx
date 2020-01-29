/** @jsx jsx */

import styled from '@emotion/styled'
import { css, jsx } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { space, color, SpaceProps, ColorProps } from 'styled-system'

const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
])

const sx = (props: any): SerializedStyles => {
  return css(props.sx)(props.theme)
}

interface BoxProps extends SpaceProps, ColorProps, JSX.IntrinsicAttributes {
  as: string
}

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

export default Box
