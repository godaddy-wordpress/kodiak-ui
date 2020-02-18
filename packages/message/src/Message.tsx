import * as React from 'react'
import { SystemProps, VariantProps } from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives'

type MessageType = 'polite' | 'assertive'

type MessageProps = {
  children: React.ReactNode
  type?: MessageType
  onDismiss?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps &
  SystemProps

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  function Message(
    { children, type = 'polite', onDismiss, variantKey = 'messages', ...props },
    forwardedRef,
  ) {
    return (
      <Box
        __base={{
          alignItems: 'center',
          bg: 'highlight',
          borderLeftStyle: 'solid',
          borderLeftWidth: t => t.space[2],
          borderLeftColor: 'primary',
          borderRadius: 'default',
          display: 'inline-flex',
          justifyContent: 'space-between',
          maxWidth: 636,
          minWidth: 370,
          minHeight: 64,
          padding: 4,
        }}
        ref={forwardedRef}
        role={type === 'assertive' ? 'alert' : 'status'}
        aria-live={type}
        variantKey={variantKey}
        {...props}
      >
        <Box>{children}</Box>
        {onDismiss ? <button onClick={onDismiss}>Dismiss</button> : null}
      </Box>
    )
  },
)
