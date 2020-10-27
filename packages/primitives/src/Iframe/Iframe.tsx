import * as React from 'react'
import { Box, BoxProps } from '../Box'

type IframeProps = BoxProps & React.HTMLProps<HTMLIFrameElement>

export function Iframe({ __base, ...props }: IframeProps) {
  return (
    <Box
      __base={{
        boxSizing: 'border-box',
        display: 'block',
        margin: 0,
        minWidth: 0,
        ...__base,
      }}
      as="iframe"
      {...props}
    />
  )
}
