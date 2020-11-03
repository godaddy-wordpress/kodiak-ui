import * as React from 'react'
import { FocusScope } from '@kodiak-ui/a11y'
import { Box, Button, Input, Text } from '@kodiak-ui/primitives'

export default { title: 'a11y', component: FocusScope }

export function ContainFocus() {
  return (
    <Box>
      <Input name="Email" placeholder="Out of scope" sx={{ mb: 4 }} />
      <FocusScope contain>
        <Text as="span">
          Focus will not leave these two inputs. Focus will keep looping over.
        </Text>
        <Input name="inscope" placeholder="Inscope Email" sx={{ my: 2 }} />
        <Input name="inscopeName" placeholder="Inscope Name" sx={{ mb: 4 }} />
        <Button type="submit">Submit</Button>
      </FocusScope>
    </Box>
  )
}
