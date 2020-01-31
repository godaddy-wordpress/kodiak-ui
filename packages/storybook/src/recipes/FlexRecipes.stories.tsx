import * as React from 'react'
import { Flex } from '@kodiak/flex'
import { Box } from '@kodiak/box'

export default { title: 'Recipes/FlexLayout' }

export function contentSidebar() {
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

export function sidebarContentSidebar() {
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
