import * as React from 'react'
import { css, Theme } from 'theme-ui'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { SerializedStyles, serializeStyles } from '@emotion/serialize'
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog'
import {
  systemProps,
  SystemProps,
  variant,
  VariantProps,
  sx,
} from '@kodiak-ui/core'
import { VisuallyHidden, SvgIcon } from '@kodiak-ui/primitives'
import { DialogHeader } from './DialogHeader'

type DialogProps = {
  isOpen?: boolean
  children?: React.ReactNode
  allowPinchZoom?: boolean
  style?: any
  onDismiss?: () => void
} & VariantProps &
  SystemProps

const globalStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    ':root': {
      '--reach-dialog': 1,
    },
  })(theme)

const overlayStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
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

const containerStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    background: 'white',
    borderRadius: 'default',
    display: 'flex',
    flexDirection: 'column',
    margin: '10vh auto',
    maxHeight: '90vh',
    outline: 'none',
    overflow: 'scroll',
    padding: '0',
    width: '50vw',
  })(theme)

export const DialogOverlay: React.FC<Pick<
  DialogProps,
  'isOpen' | 'allowPinchZoom' | 'children' | 'onDismiss' | 'style'
>> = styled(ReachDialogOverlay)(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  overlayStyles,
  ...systemProps,
  sx,
)

export const DialogContainer: React.FC<Pick<
  DialogProps,
  'variant' | 'variantKey' | 'style'
>> = styled(ReachDialogContent)(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  containerStyles,
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
      <DialogOverlay isOpen={isOpen} onDismiss={onDismiss} {...props}>
        <DialogContainer {...props}>
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
        </DialogContainer>
      </DialogOverlay>
      <Global styles={globalStyles} />
    </>
  )
}
