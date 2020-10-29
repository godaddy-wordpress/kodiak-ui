import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const Flex = React.forwardRef(
  ({ __base, ...props }: BoxProps, ref: any) => (
    <Box ref={ref} __base={{ display: 'flex', ...__base }} {...props} />
  ),
)
