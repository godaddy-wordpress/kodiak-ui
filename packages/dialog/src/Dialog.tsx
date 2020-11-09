import * as React from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box, Overlay, Underlay, VisuallyHidden } from '@kodiak-ui/primitives'
import {
  OpenTransition,
  useOpenTransition,
  useTransition,
} from '@kodiak-ui/transitions'
import { FocusScope } from '@kodiak-ui/a11y'
import { useOverlay } from '@kodiak-ui/primitives/src/Overlay/useOverlay'

export type DialogProps = any & KodiakUIProps

const DialogWrapper = React.forwardRef(
  (
    { isOpen, onDismiss, children }: DialogProps,
    ref: React.RefObject<HTMLElement>,
  ) => {
    const { styles } = useOpenTransition({ isOpen })
    const { getOverlayProps } = useOverlay({ onDismiss })

    React.useEffect(() => {
      if (ref?.current) {
        ref?.current?.focus()
      }
    }, [ref])

    return (
      <FocusScope contain restore>
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
            zIndex: 150,
          }}
        >
          <Box
            ref={ref}
            tabIndex={-1}
            __base={{
              bg: 'bg',
              borderRadius: 'default',
              maxWidth: '90vw',
              outline: 'none',
              pointerEvents: 'auto',
              position: 'relative',
              width: '600px',
              zIndex: 150,
              ...styles,
            }}
            {...getOverlayProps()}
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
    ref: React.RefObject<HTMLElement>,
  ) => {
    const { shouldMountElement, handleEntered, handleExited } = useTransition({
      isOpen,
    })

    if (!shouldMountElement) {
      return null
    }

    return (
      <VisuallyHidden isVisible={isOpen}>
        <Overlay>
          <OpenTransition
            in={isOpen}
            appear
            onExited={handleExited}
            onEntered={handleEntered}
          >
            <Underlay />
            <DialogWrapper ref={ref} {...rest}>
              {children}
            </DialogWrapper>
          </OpenTransition>
        </Overlay>
      </VisuallyHidden>
    )
  },
)
