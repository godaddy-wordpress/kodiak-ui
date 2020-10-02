import * as React from 'react'
import { AnchorButton } from '@kodiak-ui/primitives'

export default { title: 'Primitives/AnchorButton', component: AnchorButton }

export function Initial() {
  return <AnchorButton href="#">Default AnchorButton</AnchorButton>
}

export function Variant() {
  return (
    <>
      <AnchorButton sx={{ mr: 2 }}>Default Anchorbutton</AnchorButton>
      <AnchorButton href="#" variant="secondary">
        Secondary AnchorButton
      </AnchorButton>
    </>
  )
}
