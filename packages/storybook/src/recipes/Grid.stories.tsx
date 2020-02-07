import * as React from 'react'
import { Box, Flex, Grid } from '@kodiak-ui/primitives'

export default { title: 'Recipes/Grid' }

export function mainAside() {
  return (
    <Flex variant="layout.container">
      <Box as="header" variant="layout.header">
        Header
      </Box>
      <Grid gridGap={3} gridTemplateColumns={['auto', '1fr 256px']}>
        <Box as="main" bg="gray.2" minHeight="800px">
          Main
        </Box>
        <Box as="aside" bg="gray.2" minHeight="800px">
          Aside
        </Box>
      </Grid>
    </Flex>
  )
}

export function asideMainAside() {
  return (
    <Flex variant="layout.container">
      <Box as="header" variant="layout.header">
        Header
      </Box>
      <Grid gridGap={3} gridTemplateColumns={['auto', '256px 1fr 256px']}>
        <Box as="aside" bg="gray.2" minHeight="800px">
          Aside
        </Box>
        <Box as="main" bg="gray.2" minHeight="800px">
          Main
        </Box>
        <Box as="aside" bg="gray.2" minHeight="800px">
          Aside
        </Box>
      </Grid>
    </Flex>
  )
}
