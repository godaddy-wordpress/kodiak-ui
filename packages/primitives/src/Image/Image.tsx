import * as React from 'react'
import { Box, BoxProps } from '../Box'

export type ImageProps = BoxProps &
  React.HTMLProps<HTMLImageElement> & { loading?: string }

export const Image = React.forwardRef(
  ({ __base, ...props }: ImageProps, ref: any) => (
    <Box
      ref={ref}
      __base={{
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
        ...__base,
      }}
      as="img"
      {...props}
    />
  ),
)
