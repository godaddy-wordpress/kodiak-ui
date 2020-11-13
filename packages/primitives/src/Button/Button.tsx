import * as React from 'react'
import {
  _variant,
  sx,
  styled,
  getComponentBase,
  getVariants,
  css,
  KodiakUIProps,
} from 'kodiak-ui'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme, base, __base }) {
  const styles = getComponentBase(base ? base : 'button')(theme)
  if (!styles || Object.keys(styles)?.length === 0) {
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
  return { ...styles, ...__base }
}

export const buttonVariant = ({
  variant: variantProp,
  variantKey = 'buttons',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export type ButtonProps = KodiakUIProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

/**
 * Button primitive component
 */
export const StyledButton = styled('button')<ButtonProps>(
  {
    appearance: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.2s ease-in-out, border 0.2s ease-in-out',
  },
  base,
  buttonVariant,
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
