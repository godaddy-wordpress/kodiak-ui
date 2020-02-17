import * as React from 'react'

type MessageType = 'polite' | 'assertive'

type MessageProps = {
  children: React.ReactNode
  type: MessageType
  onDismiss: () => void
}

export function Message({ children, ...props }: MessageProps) {
  return <div {...props}>{children}</div>
}
