import * as React from 'react'
import { Switch, Flex } from '@kodiak-ui/primitives'

export default { title: 'Forms/Switch' }

export function Initial() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Flex flexDirection="column">
      <Switch
        checked={checked}
        label="Toggle this"
        onChange={() => setChecked(!checked)}
      />
      <Switch checked={true} label="Always checked" onChange={() => null} />
      <Switch
        checked={true}
        label="Disabled"
        disabled={true}
        onChange={() => null}
      />
    </Flex>
  )
}
