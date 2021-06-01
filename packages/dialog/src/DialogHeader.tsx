import * as React from 'react'
import { _variant, VariantProps, styled, sx, Theme, css } from 'kodiak-ui'
import { VisuallyHidden, SvgIcon } from '@kodiak-ui/primitives'
import { CloseButton } from '@kodiak-ui/primitives'

type DialogHeaderProps = {
  children: React.ReactNode
  onDismiss?: () => void | undefined
} & VariantProps

const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
    alignItems: 'flex-start',
    background: 'white',
    borderBottom: '1px solid',
    borderColor: 'muted',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 4,
  })(theme)

const StyledDialogHeader = styled('header')<DialogHeaderProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, variantKey, theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export function DialogHeader({
  onDismiss,
  children,
  variantKey = 'dialogs',
  variant = 'dialogHeader',
  ...props
}: DialogHeaderProps) {
  return (
    <StyledDialogHeader variantKey={variantKey} variant={variant} {...props}>
      {children}
      {onDismiss ? <CloseButton onClick={onDismiss} /> : null}
    </StyledDialogHeader>
  )
}
