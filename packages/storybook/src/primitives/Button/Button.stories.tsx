import * as React from 'react'
import { Button } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Button' }

export function initial() {
  return <Button>Default button</Button>
}

export function systemProps() {
  return (
    <Button bg="black" color="white">
      Button with styled-system props
    </Button>
  )
}

export function variant() {
  return (
    <>
      <Button mr={2}>Default</Button>
      <Button variant="buttons.secondary">Secondary button</Button>
    </>
  )
}
