import * as React from 'react'
import { Box, BoxProps } from '../Box'

export type ImageProps = BoxProps & React.HTMLProps<HTMLImageElement>

export function Image({ variantKey = 'images', ...props }: ImageProps) {
  return (
    <Box
      __base={{
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
      }}
      as="img"
      variantKey={variantKey}
      {...props}
    />
  )
}
