import * as React from 'react'
import { Box, Flex, Text, Label, Radio } from '@kodiak-ui/primitives'

import { withA11y } from '@storybook/addon-a11y'

export default { title: 'Forms/Radio', decorators: [withA11y] }

export function Initial() {
  return (
    <>
      <Label display="flex" alignItems="center">
        <Radio
          variant="radio"
          name="dark-mode"
          value="true"
          defaultChecked={true}
        />
        Dark Mode
      </Label>
      <Label display="flex" alignItems="center">
        <Radio name="dark-mode" value="false" />
        Light Mode
      </Label>
    </>
  )
}

export function Multiline() {
  return (
    <>
      <Label>
        <Flex sx={{ alignItems: 'center' }}>
          <Radio
            variant="radio"
            name="dark-mode"
            value="true"
            defaultChecked={true}
          />
          Dark Mode
        </Flex>
        <Box>
          <Text sx={{ fontWeight: 'normal' }}>
            This is some more text that we want to render in the label so that
            it is clickable
          </Text>
        </Box>
      </Label>
      <Label>
        <Flex sx={{ alignItems: 'center' }}>
          <Radio name="dark-mode" value="false" />
          Light Mode
        </Flex>
        <Box>
          <Text sx={{ fontWeight: 'normal' }}>
            This is some more text that we want to render in the label so that
            it is clickable
          </Text>
        </Box>
      </Label>
    </>
  )
}
