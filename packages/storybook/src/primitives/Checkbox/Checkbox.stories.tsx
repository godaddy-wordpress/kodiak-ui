import * as React from 'react'
import { Checkbox, Label } from '@kodiak-ui/primitives'

import { withA11y } from '@storybook/addon-a11y'

export default { title: 'Forms/Checkbox', decorators: [withA11y] }

export function initial() {
  return (
    <>
      <Label display="flex" alignItems="center">
        <Checkbox variant="checkbox" name="dark-mode" defaultChecked={true} />
        Dark Mode
      </Label>
      <Label display="flex" alignItems="center">
        <Checkbox name="dark-mode" />
        Light Mode
      </Label>
    </>
  )
}
