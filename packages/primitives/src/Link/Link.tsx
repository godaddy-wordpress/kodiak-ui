import * as React from 'react'
import styled from '@emotion/styled'
import {
  sx,
  variant,
  VariantProps,
  systemProps,
  SystemProps,
} from '@kodiak-ui/core'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'
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

export function addToPayload(event) {
  return {
    href: event?.target?.getAttribute('href'),
  }
}

export function Link({
  eventLog = true,
  ...props
}: { eventLog?: boolean } & React.ComponentProps<typeof StyledLink>) {
  const wrappedOnClick = useWrappedEventHandler({
    name: 'LINK_CLICK',
    handler: props.onClick,
    isActive: eventLog,
    addToPayload,
  })

  return <StyledLink {...props} onClick={wrappedOnClick} />
}
