import * as React from 'react'
import { Box, BoxProps } from '../Box'

type IframeProps = BoxProps & React.HTMLProps<HTMLIFrameElement>

export const Iframe = React.forwardRef(
  ({ __base, ...props }: IframeProps, ref: any) => (
    <Box
      ref={ref}
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
  ),
)
