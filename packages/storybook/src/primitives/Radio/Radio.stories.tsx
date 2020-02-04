import * as React from 'react'
import { Label, Radio } from '@kodiak-ui/primitives'

export default { title: 'Forms/Radio' }

export function initial() {
  return (
    <>
      <Label>
        <Radio name="dark-mode" value="true" defaultChecked={true} />
        Dark Mode
      </Label>
      <Label>
        <Radio name="dark-mode" value="false" />
        Light Mode
      </Label>
    </>
  )
}
