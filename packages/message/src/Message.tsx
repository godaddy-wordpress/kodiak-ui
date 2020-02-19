import * as React from 'react'
import { SystemProps, VariantProps } from '@kodiak-ui/core'
import {
  Box,
  VisuallyHidden,
  Flex,
  SvgIcon,
  Button,
} from '@kodiak-ui/primitives'

type MessageType = 'polite' | 'assertive'

type MessageProps = {
  children: React.ReactNode
  type?: MessageType
  dismissLabel?: string
  onDismiss?: () => void
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps &
  SystemProps

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  function Message(
    {
      children,
      type = 'polite',
      dismissLabel,
      onDismiss,
      variantKey = 'messages',
      ...props
    },
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
        <Flex alignItems="center" flexGrow={1} mr={4}>
          {children}
        </Flex>
        {onDismiss ? (
          <Button variant="shadow" onClick={onDismiss}>
            <VisuallyHidden>
              {dismissLabel ? dismissLabel : 'Dismiss message'}
            </VisuallyHidden>
            <SvgIcon viewBox="0 0 16 16" height="16px" width="16px">
              <path
                d="M9.15 8.088a.125.125 0 010-.177l4.63-4.63a.75.75 0 00-1.061-1.06l-4.63 4.628a.125.125 0 01-.178 0L3.281 2.22A.75.75 0 002.22 3.28l4.63 4.631a.125.125 0 010 .177L2.22 12.72a.75.75 0 101.06 1.06l4.631-4.63a.125.125 0 01.177 0l4.63 4.63a.75.75 0 101.062-1.06L9.15 8.09z"
                fill="white"
              />
            </SvgIcon>
          </Button>
        ) : null}
      </Box>
    )
  },
)
