import * as React from 'react'
import { Switch } from '@kodiak-ui/primitives'

export default { title: 'Forms/Switch' }

function ControlledSwitch() {
  const [value, setValue] = React.useState(false)

  return (
    <Switch
      checked={value}
      label="Working demo"
      onChange={() => setValue(!value)}
    />
  )
}

export function initial() {
  return (
    <>
      <ControlledSwitch />
      <Switch checked={false} label="Unchecked switch" onChange={() => null} />
      <Switch checked={true} label="Checked switch" onChange={() => null} />
    </>
  )
}
