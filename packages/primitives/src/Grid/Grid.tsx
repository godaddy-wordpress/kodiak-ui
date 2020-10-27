import * as React from 'react'
import { Box, BoxProps } from '../Box'

export function Grid({ __base, ...props }: BoxProps) {
  return <Box __base={{ display: 'grid', ...__base }} {...props} />
}
