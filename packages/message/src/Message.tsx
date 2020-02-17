import * as React from 'react'

type MessageType = 'polite' | 'assertive'

type MessageProps = {
  children: React.ReactNode
  type: MessageType
  onDismiss: () => void
}

export function Message(props: MessageProps) {
  return <div>Testing</div>
}
