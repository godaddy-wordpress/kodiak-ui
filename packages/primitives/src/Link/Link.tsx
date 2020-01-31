import styled from '@emotion/styled'
import { IntrinsicSxElements } from 'theme-ui'
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
  background,
  BackgroundProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system'
import { variant, sx } from '../Box'
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
  ...(background.propNames as string[]),
  ...(border.propNames as string[]),
  ...(shadow.propNames as string[]),
])

type LinkProps<T extends keyof IntrinsicSxElements = 'a'> = {
  as?: T
  variant?: string
} & IntrinsicSxElements[T] &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  ShadowProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Link = styled<'a', LinkProps>('a', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ theme, variant: defaultVariant = 'links.a' }) =>
    variant({ theme, variant: defaultVariant }),
  space,
  color,
  typography,
  background,
  shadow,
  sx,
)
