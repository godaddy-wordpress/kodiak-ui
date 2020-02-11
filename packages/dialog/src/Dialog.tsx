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
import { VisuallyHidden, Svg, SvgIcon } from '@kodiak-ui/primitives'
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
    maxHeight: '90vh',
    outline: 'none',
    overflow: 'scroll',
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
  ({ theme }: { theme: Theme }): SerializedStyles =>
    css({
      background: 'none',
      border: 'none',
      padding: 0,
    })(theme),
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
            <SvgIcon
              viewBox="0 0 14 14"
              height="14px"
              width="14px"
              color="muted"
              display="block"
              aria-hidden
            >
              <path d="M8.006 7.079a.11.11 0 0 1 0-.155l4.052-4.052a.656.656 0 1 0-.93-.928l-4.05 4.05a.11.11 0 0 1-.156 0L2.87 1.944a.656.656 0 1 0-.928.928l4.051 4.052a.11.11 0 0 1 0 .155l-4.05 4.052a.657.657 0 0 0 .927.928l4.052-4.053a.11.11 0 0 1 .155 0l4.052 4.053a.656.656 0 1 0 .928-.928L8.006 7.079z" />
            </SvgIcon>
          </StyledCloseButton>
        </DialogHeader>
        {children}
      </StyledDialog>
      <Global styles={globalStyles} />
    </>
  )
}
