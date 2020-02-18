import * as React from 'react'
import { Message } from '@kodiak-ui/message'

export default { title: 'Message/Banner' }

export function Initial() {
  return <Message variantKey="bannerMessages">Testing a message</Message>
}

export function Warning() {
  return (
    <Message variant="warning" variantKey="bannerMessages">
      A warning banner message
    </Message>
  )
}

export function Danger() {
  return (
    <Message variant="danger" variantKey="bannerMessages">
      A danger banner message
    </Message>
  )
}
