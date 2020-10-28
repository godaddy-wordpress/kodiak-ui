import * as React from 'react'
import styled from '@emotion/styled'
import {
  css,
  sx,
  _variant,
  VariantProps,
  BaseProp,
  getComponentBase,
  getVariants,
} from 'kodiak-ui'
import { useWrappedEventHandler } from '@kodiak-ui/hooks/use-event-logger'

type LinkProps = VariantProps & BaseProp

function base({ theme, __base, base }) {
  const styles = getComponentBase(base ? base : 'link')(theme)

  if (!styles || Object.keys(styles)?.length === 0) {
    return css(__base)(theme)
  }

  return styles
}

const linkVariant = ({
  variant: variantProp,
  variantKey = 'links',
  variants,
  theme,
}) => {
  if (variants) {
    return getVariants(variants)(theme)
  }

  return _variant({ variant: variantProp, theme, variantKey, variants })
}

export const StyledLink = styled('a')<LinkProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  linkVariant,
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
