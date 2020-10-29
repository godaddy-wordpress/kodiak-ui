import * as React from 'react'
import { Box, BoxProps } from '../Box'

export const Grid = React.forwardRef(
  ({ __base, ...props }: BoxProps, ref: any) => (
    <Box ref={ref} __base={{ display: 'grid', ...__base }} {...props} />
  ),
)
