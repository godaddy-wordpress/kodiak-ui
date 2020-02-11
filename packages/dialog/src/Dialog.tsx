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

type DialogProps = {
  isOpen: boolean
  children: React.ReactNode | React.ReactNodeArray
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

export function Dialog({ isOpen, onDismiss, ...props }: DialogProps) {
  return (
    <>
      <StyledDialog isOpen={isOpen} onDismiss={onDismiss} {...props} />
      <Global styles={globalStyles} />
    </>
  )
}
