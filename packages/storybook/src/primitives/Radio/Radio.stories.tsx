import * as React from 'react'
import { Label, Radio } from '@kodiak-ui/primitives'

import { withA11y } from '@storybook/addon-a11y'

export default { title: 'Forms/Radio', decorators: [withA11y] }

export function initial() {
  return (
    <>
      <Label display="flex" alignItems="center">
        <Radio name="dark-mode" value="true" defaultChecked={true} />
        Dark Mode
      </Label>
      <Label display="flex" alignItems="center">
        <Radio name="dark-mode" value="false" />
        Light Mode
      </Label>
    </>
  )
}
