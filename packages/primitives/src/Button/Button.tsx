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
import { wrapHandlerWithLog } from '@kodiak-ui/hooks/use-event-logger'
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

export function Button({
  ...props
}: React.ComponentProps<typeof StyledButton>) {
  const onClick = props?.onClick

  const wrappedOnClick = React.useMemo(
    () => wrapHandlerWithLog({ name: 'BUTTON_CLICK', handler: onClick }),
    [onClick], // eslint prefers a function so that it can check the dependencies statically so we useMemo instead of useCallback
  )

  return <StyledButton {...props} onClick={wrappedOnClick} />
}
