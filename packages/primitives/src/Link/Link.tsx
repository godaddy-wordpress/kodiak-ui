import * as React from 'react'
import styled from '@emotion/styled'
import {
  sx,
  variant,
  VariantProps,
  systemProps,
  SystemProps,
} from '@kodiak-ui/core'
import { wrapHandlerWithLog } from '@kodiak-ui/hooks/use-event-logger'
import { base, BaseProps } from '../Box'

type LinkProps = VariantProps &
  SystemProps &
  BaseProps &
  React.HTMLAttributes<HTMLAnchorElement>

export const StyledLink = styled('a')<LinkProps>(
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

export function Link({ ...props }: React.ComponentProps<typeof StyledLink>) {
  const onClick = props?.onClick

  const wrappedOnClick = React.useMemo(
    () =>
      wrapHandlerWithLog({
        name: 'LINK_CLICK',
        handler: onClick,
        addToPayload: event => ({
          href: event?.target?.getAttribute('href'),
        }),
      }),
    [onClick],
  )

  return <StyledLink {...props} onClick={wrappedOnClick} />
}
