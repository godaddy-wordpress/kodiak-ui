import * as React from 'react'
import styled from '@emotion/styled'
import { sx, _variant, VariantProps } from 'kodiak-ui'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'
import { base, BaseProps } from '../Box'

type LinkProps = VariantProps &
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
    _variant({ variant: variantProp, variantKey, theme }),
  sx,
)

export function addHrefToPayload(event) {
  return {
    href: event?.target?.getAttribute('href'),
  }
}

export const Link = React.forwardRef<
  HTMLAnchorElement,
  { eventLog?: boolean } & React.ComponentProps<typeof StyledLink>
>(({ eventLog = true, ...props }, ref) => {
  const wrappedOnClick = useWrappedEventHandler({
    name: 'LINK_CLICK',
    handler: props.onClick,
    isLoggingEventsActive: eventLog,
    addToPayload: addHrefToPayload,
  })

  return <StyledLink {...props} ref={ref} onClick={wrappedOnClick} />
})
