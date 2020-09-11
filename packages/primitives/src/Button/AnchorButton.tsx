import * as React from 'react'
import styled from '@emotion/styled'
import { base, buttonVariant } from './Button'
import {
  shouldForwardProp,
  sx,
  systemProps,
  SystemProps,
  VariantProps,
} from '@kodiak-ui/core'
import { wrapHandlerWithLog } from '@kodiak-ui/hooks/use-event-logger'

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

export function AnchorButton({
  ...props
}: React.ComponentProps<typeof StyledAnchorButton>) {
  const onClick = props?.onClick

  const wrappedOnClick = React.useMemo(
    () =>
      wrapHandlerWithLog({
        name: 'ANCHOR_BUTTON_CLICK',
        handler: onClick,
        addToPayload: event => ({
          href: event?.target?.getAttribute('href'),
        }),
      }),
    [onClick],
  )

  return <StyledAnchorButton {...props} onClick={wrappedOnClick} />
}
