import * as React from 'react'
import { Box, BoxProps } from '../Box'

export type ImageProps = BoxProps &
  React.HTMLProps<HTMLImageElement> & { loading?: string }

export function Image({ __base, ...props }: ImageProps) {
  return (
    <Box
      __base={{
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
        ...__base,
      }}
      as="img"
      {...props}
    />
  )
}
