import * as React from 'react'
import { css, Theme } from 'theme-ui'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import { Dialog as ReachDialog } from '@reach/dialog'
import {
  systemProps,
  SystemProps,
  variant,
  VariantProps,
  sx,
} from '@kodiak-ui/core'
import { VisuallyHidden } from '@kodiak-ui/primitives'
import { DialogHeader } from './DialogHeader'

type DialogProps = {
  isOpen: boolean
  children: React.ReactNode
  allowPinchZoom?: boolean
  onDismiss: () => void
} & VariantProps &
  SystemProps

const globalStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    ':root': {
      '--reach-dialog': 1,
    },
    '[data-reach-dialog-overlay]': {
      background: 'hsla(0, 0%, 0%, 0.33)',
      bottom: 0,
      left: 0,
      overflow: 'auto',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: 1000002,
    },
  })(theme)

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    background: 'white',
    borderRadius: 'default',
    margin: '10vh auto',
    outline: 'none',
    overflow: 'hidden',
    padding: '0',
    width: '50vw',
  })(theme)

const StyledDialog: React.FC<DialogProps> = styled(ReachDialog)(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, variantKey = 'dialogs', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
  sx,
)

const StyledCloseButton = styled('button')(
  ({ theme }: { theme: Theme }): SerializedStyles => css({})(theme),
)

export function Dialog({
  isOpen,
  onDismiss,
  title,
  children,
  ...props
}: DialogProps & { title?: string | React.ReactNode }) {
  return (
    <>
      <StyledDialog isOpen={isOpen} onDismiss={onDismiss} {...props}>
        <DialogHeader>
          {title}
          <StyledCloseButton className="close-button" onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </StyledCloseButton>
        </DialogHeader>
        {children}
      </StyledDialog>
      <Global styles={globalStyles} />
    </>
  )
}
