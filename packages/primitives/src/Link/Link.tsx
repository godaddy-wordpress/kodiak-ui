import styled from '@emotion/styled'
import {
  sx,
  variant,
  VariantProps,
  systemProps,
  SystemProps,
} from '@kodiak-ui/core'
import { base, BaseProps } from '../Box'

type LinkProps = VariantProps &
  SystemProps &
  BaseProps &
  React.HTMLAttributes<HTMLAnchorElement>

export const Link = styled('a')<LinkProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'a', variantKey = 'links', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  ...systemProps,
  sx,
)
