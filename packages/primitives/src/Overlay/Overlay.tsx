import ReactDOM from 'react-dom'
import React, { forwardRef, MutableRefObject, PropsWithChildren } from 'react'
import { Box } from '../Box'

type OverlayProps = PropsWithChildren<{ isOpen: boolean; container?: Element }>

export const Overlay = forwardRef(
  (
    { children, container }: OverlayProps,
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    const element = (
      <Box
        ref={ref}
        __base={{
          bg: 'transparent',
          isolation: 'isolate',
        }}
      >
        {/* Animation will go here */}
        {children}
      </Box>
    )

    return ReactDOM.createPortal(element, container || document.body)
  },
)
