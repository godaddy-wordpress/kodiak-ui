import ReactDOM from 'react-dom'
import React, { forwardRef, MutableRefObject } from 'react'
import { Box } from '../Box'
import { useSSR } from '@kodiak-ui/hooks'

type OverlayProps = {
  children: React.ReactNode
  container?: Element
}

export const Overlay = forwardRef(
  (
    { children, container, ...rest }: OverlayProps,
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    const { isBrowser } = useSSR()
    const element = (
      <Box
        {...rest}
        ref={ref}
        __base={{
          bg: 'transparent',
          isolation: 'isolate',
        }}
      >
        {children}
      </Box>
    )

    return ReactDOM.createPortal(
      element,
      container || (isBrowser && document.body),
    )
  },
)
