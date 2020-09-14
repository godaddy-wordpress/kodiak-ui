import * as React from 'react'
import {
  variant,
  sx,
  VariantProps,
  systemProps,
  SystemProps,
  shouldForwardProp,
  css,
  Theme,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'
import { base as baseProp, BaseProps } from '../Box'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    px: 3,
    py: 2,
    color: 'white',
    bg: 'primary',
    border: 0,
    borderRadius: 'default',
    '&:hover': {
      bg: 'secondary',
    },
  })(theme)
}

export const buttonVariant = ({
  variant: variantProp,
  variantKey = 'buttons',
  theme,
}: { theme: Theme } & VariantProps) =>
  variant({ variant: variantProp, theme, variantKey })

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps &
  SystemProps &
  BaseProps

/**
 * Button primitive component
 */
export const StyledButton = styled('button', {
  shouldForwardProp,
})<ButtonProps>(
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
  baseProp,
  buttonVariant,
  ...systemProps,
  sx,
)

export type ButtonEvent = {
  name: string
  payload: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    sourceLabel: string
  }
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  { eventLog?: boolean } & Omit<
    React.ComponentProps<typeof StyledButton>,
    'ref'
  >
>(({ eventLog = true, ...props }, ref) => {
  const wrappedOnClick = useWrappedEventHandler({
    name: 'BUTTON_CLICK',
    handler: props.onClick,
    isLoggingEventsActive: eventLog,
  })

  return <StyledButton {...props} ref={ref} onClick={wrappedOnClick} />
})
