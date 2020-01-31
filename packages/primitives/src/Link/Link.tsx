import styled from '@emotion/styled'
import { IntrinsicSxElements, Theme } from 'theme-ui'
import { createShouldForwardProp } from '@styled-system/should-forward-prop'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { variant, sx } from '../Box'

type LinkVariantProps = {
  theme: Theme
  variant?: string
}
const linkVariant = ({
  theme,
  variant: defaultVariant = 'links.a',
}: LinkVariantProps) => variant({ theme, variant: defaultVariant })

const shouldForwardProp = createShouldForwardProp([
  ...(space.propNames as string[]),
  ...(color.propNames as string[]),
  ...(typography.propNames as string[]),
])

type LinkProps<T extends keyof IntrinsicSxElements = 'a'> = {
  as?: T
  variant?: string
} & IntrinsicSxElements[T] &
  SpaceProps &
  ColorProps &
  TypographyProps

/**
 * Link supports `space`, `color`, `typography`, `border`
 */
export const Link = styled<'a', LinkProps>('a', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  linkVariant,
  space,
  color,
  typography,
  sx,
)
