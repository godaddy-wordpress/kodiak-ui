import * as React from 'react'
import { Switch, Flex, Label } from '@kodiak-ui/primitives'

export default { title: 'Forms/Switch', component: Switch }

export function Initial() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Label display="flex" alignItems="center">
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          sx={{ mr: 2 }}
        />
        Toggle this switch
      </Label>

      <Label>
        <Switch sx={{ mr: 2 }} checked={true} onChange={() => null} />
        Always checked
      </Label>

      <Label>
        <Switch
          checked={checked}
          disabled={true}
          onChange={() => null}
          sx={{ mr: 2 }}
        />
        Disabled
      </Label>
    </Flex>
  )
}

export function Variant() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Label sx={{ display: 'flex', alignItems: 'center' }}>
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          variant="alternateSwitch"
          sx={{ mr: 2 }}
        />
        Toggle this switch
      </Label>
    </Flex>
  )
}
