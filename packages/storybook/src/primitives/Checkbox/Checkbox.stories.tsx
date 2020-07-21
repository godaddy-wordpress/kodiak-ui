import * as React from 'react'
import { Flex, Checkbox, Label } from '@kodiak-ui/primitives'

import { withA11y } from '@storybook/addon-a11y'

export default { title: 'Forms/Checkbox', decorators: [withA11y] }

export function Initial() {
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

export function Indeterminate() {
  const [checkedItems, setCheckedItems] = React.useState<{
    [key: string]: boolean
  }>({
    option1: false,
    option2: false,
  })

  const allChecked = Object.keys(checkedItems)
    ?.map(key => checkedItems[key] === true)
    ?.every(Boolean)
  const someChecked = Object.keys(checkedItems)
    ?.map(key => checkedItems[key] === true)
    ?.some(Boolean)

  return (
    <>
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked && !allChecked}
        onChange={e =>
          setCheckedItems({
            option1: e.target.checked,
            option2: e.target.checked,
          })
        }
      />
      <Flex sx={{ flexDirection: 'column', pl: 6 }}>
        <Checkbox
          label="Option 1"
          name="option1"
          checked={checkedItems?.option1}
          onChange={e =>
            setCheckedItems({
              ...checkedItems,
              option1: e.target.checked,
            })
          }
        />
        <Checkbox
          label="Option 2"
          name="option2"
          checked={checkedItems?.option2}
          onChange={e =>
            setCheckedItems({
              ...checkedItems,
              option2: e.target.checked,
            })
          }
        />
      </Flex>
    </>
  )
}
