import * as React from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box, Button, Overlay, Underlay } from '@kodiak-ui/primitives'
import { useOpenTransition } from '@kodiak-ui/transitions'
import { FocusScope } from '@kodiak-ui/a11y'
import { useOverlay } from '@kodiak-ui/primitives/src/Overlay/useOverlay'

const DialogWrapper = React.forwardRef(
  (
    {
      isOpen,
      onDismiss,
      children,
      ...rest
    }: {
      isOpen?: boolean
      onDismiss?: () => void
      children: React.ReactNode
    } & KodiakUIProps,
    ref: React.MutableRefObject<any>,
  ) => {
    const { getOpenTransitionStyles } = useOpenTransition({ isOpen })
    const { getOverlayProps } = useOverlay({ onDismiss })

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

export type DialogProps = React.PropsWithChildren<{
  isOpen: boolean
  onDismiss: () => void
}> &
  KodiakUIProps

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
