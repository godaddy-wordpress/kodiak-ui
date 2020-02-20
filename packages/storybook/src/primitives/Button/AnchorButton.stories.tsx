import * as React from 'react'
import { AnchorButton } from '@kodiak-ui/primitives'

export default { title: 'Primitives/AnchorButton' }

export function initial() {
  return <AnchorButton href="#">Default AnchorButton</AnchorButton>
}

export function systemProps() {
  return (
    <AnchorButton href="#" bg="black" color="white">
      AnchorButton with styled-system props
    </AnchorButton>
  )
}

export function variant() {
  return (
    <>
      <AnchorButton mr={2}>Default Anchorbutton</AnchorButton>
      <AnchorButton href="#" variant="secondary">
        Secondary AnchorButton
      </AnchorButton>
    </>
  )
}
