import * as React from 'react'
import { Box, Flex } from '@kodiak-ui/primitives'

export default { title: 'Recipes/Flexbox', component: Flex }

export function mainAside() {
  return (
    <Flex variant="layout.container">
      <Box as="header" variant="layout.header">
        Header
      </Box>
      <Flex variant="layout.root">
        <Box
          as="main"
          variant="layout.main"
          border="1px solid"
          borderColor="black"
        >
          Main
        </Box>
        <Box as="aside" variant="layout.aside">
          Aside
        </Box>
      </Flex>
      <Box as="footer" variant="layout.footer">
        Footer
      </Box>
    </Flex>
  )
}

export function asideMainAside() {
  return (
    <Flex variant="layout.container">
      <Box as="header" variant="layout.header">
        Header
      </Box>
      <Flex variant="layout.root">
        <Box as="aside" variant="layout.aside">
          Aside
        </Box>
        <Box
          as="main"
          variant="layout.main"
          border="1px solid"
          borderColor="black"
        >
          Main
        </Box>
        <Box as="aside" variant="layout.aside">
          Aside
        </Box>
      </Flex>
      <Box as="footer" variant="layout.footer">
        Footer
      </Box>
    </Flex>
  )
}

export function grid() {
  return (
    <Flex flexWrap="wrap" p={4} m={4}>
      {Array.from(Array(12).keys()).map(item => (
        <Box key={item} bg="primary" height={100} width={100} m={3} />
      ))}
    </Flex>
  )
}
