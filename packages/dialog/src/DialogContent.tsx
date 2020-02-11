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

type DialogContentProps = {
  children: React.ReactNode
} & SystemProps &
  VariantProps

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    background: 'white',
    padding: 4,
  })(theme)

export const DialogContent = styled<'header', DialogContentProps>('header')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogContent', variantKey = 'dialogs', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  ...systemProps,
  sx,
)
