import * as React from 'react'
import { Box, BoxProps } from '../Box'

export type ImageProps = BoxProps & React.HTMLProps<HTMLImageElement>

export function Image(props) {
  return (
    <Box
      __base={{
        boxSizing: 'border-box',
        margin: 0,
        minWidth: 0,
      }}
      as="img"
      {...props}
    />
  )
}
