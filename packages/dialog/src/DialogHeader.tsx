import * as React from 'react'
import styled from '@emotion/styled'
import { css, Theme } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  systemProps,
  SystemProps,
  variant,
  VariantProps,
  sx,
} from '@kodiak-ui/core'
import { VisuallyHidden, SvgIcon } from '@kodiak-ui/primitives'

type DialogHeaderProps = {
  children: React.ReactNode
  onDismiss?: () => void | undefined
} & SystemProps &
  VariantProps

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    alignItems: 'flex-start',
    background: 'white',
    borderBottom: '1px solid',
    borderColor: 'muted',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 4,
  })(theme)

const StyledDialogHeader: React.FC<Omit<
  DialogHeaderProps,
  'title' | 'onDismiss'
>> = styled<'header', DialogHeaderProps>('header')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogHeader', variantKey = 'dialogs', theme }) =>
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

export function DialogHeader({
  onDismiss,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <StyledDialogHeader {...props}>
      {children}
      <StyledCloseButton onClick={onDismiss}>
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
    </StyledDialogHeader>
  )
}
