import * as React from 'react'
import { Box, BoxProps } from '../Box'

export function Flex({ __base, ...props }: BoxProps) {
  return <Box __base={{ display: 'flex', ...__base }} {...props} />
}
