import * as React from 'react'
import { Switch, Flex, Label } from '@kodiak-ui/primitives'

export default { title: 'Forms/Switch', component: Switch }

export function Initial() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Flex flexDirection="column">
      <Label display="flex" alignItems="center">
        <Switch
          mr={2}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Toggle this switch
      </Label>

      <Label>
        <Switch mr={2} checked={true} onChange={() => null} />
        Always checked
      </Label>

      <Label>
        <Switch
          mr={2}
          checked={checked}
          disabled={true}
          onChange={() => null}
        />
        Disabled
      </Label>
    </Flex>
  )
}

export function Variant() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Flex flexDirection="column">
      <Label display="flex" alignItems="center">
        <Switch
          mr={2}
          checked={checked}
          onChange={() => setChecked(!checked)}
          variant="alternateSwitch"
        />
        Toggle this switch
      </Label>
    </Flex>
  )
}
