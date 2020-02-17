import * as React from 'react'
import styled from '@emotion/styled'
import {
  systemProps,
  SystemProps,
  variant,
  VariantProps,
  sx,
} from '@kodiak-ui/core'

type MessageType = 'polite' | 'assertive'

type MessageProps = {
  children: React.ReactNode
  type?: MessageType
  onDismiss?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps &
  SystemProps

const MessageContainer = styled('div')(
  ({ variant: variantProp, variantKey = 'messages', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
  sx,
)

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  function Message({ children, type = 'polite', ...props }, forwardedRef) {
    return (
      <MessageContainer
        {...props}
        ref={forwardedRef}
        role={type === 'assertive' ? 'alert' : 'status'}
        aria-live={type}
      >
        {children}
      </MessageContainer>
    )
  },
)
