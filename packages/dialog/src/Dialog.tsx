import * as React from 'react'
import { RefObject } from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box, Button, Overlay, Underlay } from '@kodiak-ui/primitives'
import { useOpenTransition } from '@kodiak-ui/transitions'
import { FocusScope } from '@kodiak-ui/a11y'
import { useOverlay } from '@kodiak-ui/primitives/src/Overlay/useOverlay'

export type DialogProps = any & KodiakUIProps

const DialogWrapper = React.forwardRef(
  (
    { isOpen, onDismiss, children, ...rest }: DialogProps,
    ref: RefObject<any>,
  ) => {
    const { getOpenTransitionStyles } = useOpenTransition({ isOpen })
    const { getOverlayProps } = useOverlay({ onDismiss }, ref)

    return (
      <FocusScope contain refocus>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            pointerEvents: 'none',
            width: '100%',
            visibility: isOpen ? 'visible' : 'hidden',
            zIndex: 150,
          }}
        >
          <Box
            {...rest}
            {...getOverlayProps()}
            ref={ref}
            __base={{
              bg: 'bg',
              borderRadius: 'default',
              maxWidth: '90vw',
              outline: 'none',
              pointerEvents: 'auto',
              position: 'relative',
              width: '600px',
              zIndex: 150,
              ...getOpenTransitionStyles(),
            }}
          >
            {children}
          </Box>
        </Box>
      </FocusScope>
    )
  },
)

export const Dialog = React.forwardRef(
  (
    { children, isOpen, ...rest }: DialogProps,
    ref: React.MutableRefObject<any>,
  ) => {
    return (
      <Overlay isOpen={isOpen}>
        <Underlay />
        <DialogWrapper ref={ref} {...rest}>
          {children}
        </DialogWrapper>
      </Overlay>
    )
  },
)
