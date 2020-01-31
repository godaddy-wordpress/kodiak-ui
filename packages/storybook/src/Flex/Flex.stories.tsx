import * as React from 'react'
import { Box, Flex } from '@kodiak/primitives'

export default { title: 'Flex' }

export function initial() {
  return <Flex>Basic Box that renders a Div with `display: flex`</Flex>
}

export function alignItems() {
  return (
    <Flex alignItems="center" m={3} border="1px solid" borderColor="black">
      <Box flex="1 1 auto" bg="primary" height={100} width={100}>
        Item
      </Box>
      <Box bg="secondary" height={50} width={100}>
        Item 2
      </Box>
    </Flex>
  )
}
