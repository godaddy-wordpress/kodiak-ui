import * as React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog'
import { _variant, VariantProps, css, Theme, sx, CSSObject } from 'kodiak-ui'
import { DialogHeader } from './DialogHeader'

type DialogProps = {
  isOpen?: boolean
  children?: React.ReactNode
  allowPinchZoom?: boolean
  style?: React.CSSProperties
  onDismiss?: React.ComponentProps<typeof DialogHeader>['onDismiss']
  onOverlayDismiss?: React.ComponentProps<
    typeof ReachDialogOverlay
  >['onDismiss']
} & VariantProps

const globalStyles = ({ theme }: { theme: Theme }) =>
  css({
    ':root': {
      '--reach-dialog': 1,
    },
  })(theme)

const overlayStyles = ({ theme }: { theme: Theme }) =>
  css({
    background: 'hsla(0, 0%, 0%, 0.33)',
    bottom: 0,
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000002,
  })(theme)

const containerStyles = ({ theme }: { theme: Theme }) =>
  css({
    background: 'white',
    borderRadius: 'default',
    display: 'flex',
    flexDirection: 'column',
    margin: '10vh auto',
    maxHeight: '70vh',
    outline: 'none',
    overflow: 'auto',
    padding: '0',
    width: '50vw',
  })(theme)

export const DialogOverlay = styled(ReachDialogOverlay)<DialogProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  overlayStyles,
  ({ variant: variantProp = 'overlay', variantKey = 'dialogs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export const DialogContainer = styled(ReachDialogContent)<DialogProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  containerStyles,
  ({ variant: variantProp, variantKey = 'dialogs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export function Dialog({
  isOpen,
  onDismiss,
  onOverlayDismiss,
  title,
  children,
  variant,
  ...props
}: DialogProps & { title?: string | React.ReactNode }) {
  return (
    <>
      <DialogOverlay
        isOpen={isOpen}
        onDismiss={onOverlayDismiss || onDismiss}
        {...props}
      >
        <DialogContainer
          {...props}
          variant={variant}
          aria-label={props?.['aria-label'] || title}
        >
          <DialogHeader onDismiss={onDismiss}>{title}</DialogHeader>
          {children}
        </DialogContainer>
      </DialogOverlay>
      <Global styles={globalStyles} />
    </>
  )
}
