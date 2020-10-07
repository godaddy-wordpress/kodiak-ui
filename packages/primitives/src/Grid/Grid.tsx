import * as React from 'react'
import { Box, BoxProps } from '../Box'

export function Grid(props: BoxProps) {
  return <Box __base={{ display: 'grid' }} {...props} />
}
