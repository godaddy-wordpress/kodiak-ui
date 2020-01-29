/** @jsx jsx */
import styled from '@emotion/styled'
import { css, jsx } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import { space, color } from 'styled-system'

const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
])

const sx = (props: any): SerializedStyles => {
  return css(props.sx)(props.theme)
}

export const Box = styled(({ as: T = 'div', ...props }) => <T {...props} />, {
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

export default Box
