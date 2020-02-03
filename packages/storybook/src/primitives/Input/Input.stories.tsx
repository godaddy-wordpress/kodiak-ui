import * as React from 'react'
import { Input } from '@kodiak/primitives'

export default { title: 'Forms/Input' }

export function initial() {
  return <Input placeholder="Type something..."></Input>
}

export function shadow() {
  return (
    <Input variant="shadow" placeholder="Input with shadow variant"></Input>
  )
}

export function inline() {
  return (
    <Input variant="inline" placeholder="Input with inline variant"></Input>
  )
}

export function underline() {
  return (
    <Input
      variant="underline"
      placeholder="Input with underline variant"
    ></Input>
  )
}
