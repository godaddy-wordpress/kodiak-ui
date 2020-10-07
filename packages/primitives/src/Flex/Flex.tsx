import * as React from 'react'
import { Box, BoxProps } from '../Box'

export function Flex(props: BoxProps) {
  return <Box __base={{ display: 'flex' }} {...props} />
}
