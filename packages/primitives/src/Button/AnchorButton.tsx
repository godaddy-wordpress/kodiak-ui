import * as React from 'react'
import styled from '@emotion/styled'
import { base, buttonVariant } from './Button'
import { addHrefToPayload } from '../Link/Link'
import {
  shouldForwardProp,
  sx,
  systemProps,
  SystemProps,
  VariantProps,
} from '@kodiak-ui/core'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'

export type AnchorButtonProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  VariantProps &
  SystemProps

/**
 * AnchorButton primitive component
 */
export const StyledAnchorButton = styled('a', {
  shouldForwardProp,
})<AnchorButtonProps>(
  {
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  },
  base,
  buttonVariant,
  ...systemProps,
  sx,
)

export const AnchorButton = React.forwardRef<
  HTMLAnchorElement,
  { eventLog?: boolean } & React.ComponentProps<typeof StyledAnchorButton>
>(({ eventLog = true, ...props }, ref) => {
  const wrappedOnClick = useWrappedEventHandler({
    name: 'ANCHOR_BUTTON_CLICK',
    handler: props.onClick,
    isLoggingEventsActive: eventLog,
    addToPayload: addHrefToPayload,
  })

  return <StyledAnchorButton {...props} ref={ref} onClick={wrappedOnClick} />
})
