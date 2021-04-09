import * as React from 'react'
import { Checkbox, CheckboxProps } from '@kodiak-ui/primitives'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
}

const Template = (args: CheckboxProps) => (
  <Checkbox name="checkbox" {...args}>
    Unsubscribe
  </Checkbox>
)

export const Base = Template.bind({})
Base.args = {}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}

export const Error = Template.bind({})
Error.args = {
  error: 'Testing some error',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  checked: true,
}

export const Default = Template.bind({})
Default.args = {
  defaultChecked: true,
}
