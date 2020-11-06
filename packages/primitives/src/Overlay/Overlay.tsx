import ReactDOM from 'react-dom'
import React, { forwardRef, MutableRefObject } from 'react'
import { OpenTransition, useTransition } from '@kodiak-ui/transitions'
import { Box } from '../Box'

type OverlayProps = {
  children: React.ReactNode
  isOpen: boolean
  container?: Element
}

export const Overlay = forwardRef(
  (
    { isOpen, children, container, ...rest }: OverlayProps,
    ref: MutableRefObject<HTMLDivElement>,
  ) => {
    const { shouldMountElement, handleEntered, handleExited } = useTransition({
      isOpen,
    })

    if (!shouldMountElement) {
      return null
    }

    const element = (
      <Box
        {...rest}
        ref={ref}
        __base={{
          bg: 'transparent',
          isolation: 'isolate',
        }}
      >
        <OpenTransition
          in={isOpen}
          appear
          onExited={handleExited}
          onEntered={handleEntered}
        >
          {children}
        </OpenTransition>
      </Box>
    )

    return ReactDOM.createPortal(element, container || document.body)
  },
)
