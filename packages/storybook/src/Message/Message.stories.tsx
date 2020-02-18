import * as React from 'react'
import { Message } from '@kodiak-ui/message'

export default { title: 'Message' }

export function Initial() {
  return <Message>Testing a message</Message>
}

export function Warning() {
  return <Message variant="warning">A warning message</Message>
}

export function Danger() {
  return <Message variant="danger">A danger message</Message>
}

export function MultiLine() {
  return (
    <Message>
      This is a static, default alert with two lines of text. Copy should never
      extend past two lines for readability.
    </Message>
  )
}

export function Dismissible() {
  return (
    <Message onDismiss={() => alert('Dismissing')}>
      Testing a dismissible message
    </Message>
  )
}
