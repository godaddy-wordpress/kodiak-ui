import * as React from 'react'
import {
  ReactNode,
  forwardRef,
  memo,
  RefObject,
  HTMLAttributes,
  useRef,
} from 'react'
import { KodiakUIProps } from 'kodiak-ui'
import { Box, Overlay, Underlay } from '@kodiak-ui/primitives'
import { FocusScope } from '@kodiak-ui/a11y'
import { useOverlay } from '@kodiak-ui/primitives/src/Overlay/useOverlay'

export type DialogProps = {
  children: ReactNode
  isOpen: boolean
  title?: any // @deprecated
  onDismiss: () => void
} & KodiakUIProps &
  HTMLAttributes<HTMLDivElement>

export const Dialog = memo(
  forwardRef(
    (
      { children, isOpen, title, onDismiss, ...rest }: DialogProps,
      ref: RefObject<HTMLElement>,
    ) => {
      const domRef = useRef<HTMLElement>((ref as unknown) as HTMLElement)

      const { getOverlayProps } = useOverlay(
        { isOpen, hideRootElements: true, onDismiss },
        domRef,
      )

      return isOpen ? (
        <Overlay>
          <Underlay isOpen={isOpen} />
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
                {...getOverlayProps()}
                {...rest}
                ref={domRef}
                __base={{
                  bg: 'bg',
                  borderRadius: 'default',
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  maxWidth: '90vw',
                  outline: 'none',
                  overflow: 'hidden',
                  pointerEvents: 'auto',
                  position: 'relative',
                  width: '512px',
                  zIndex: 150,
                }}
              >
                {title ? title : null}
                {children}
              </Box>
            </Box>
          </FocusScope>
        </Overlay>
      ) : null
    },
  ),
)
