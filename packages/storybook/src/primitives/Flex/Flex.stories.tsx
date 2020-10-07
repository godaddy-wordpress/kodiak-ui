import * as React from 'react'
import { Box, Flex } from '@kodiak-ui/primitives'
import { variant } from 'kodiak-ui'

export default { title: 'Primitives/Flex', component: Flex }

variant('centered', { alignItems: 'center' })

export function initial() {
  return <Flex>Basic Box that renders a Div with `display: flex`</Flex>
}

export function alignItems() {
  return (
    <Flex
      variants="centered"
      sx={{
        m: 3,
        border: '1px solid',
        borderColor: 'black',
      }}
    >
      <Box sx={{ flex: '1 1 auto', bg: 'primary', height: 100, width: 100 }}>
        Item
      </Box>
      <Box sx={{ bg: 'secondary', height: 50, width: 50 }}>Item 2</Box>
    </Flex>
  )
}
