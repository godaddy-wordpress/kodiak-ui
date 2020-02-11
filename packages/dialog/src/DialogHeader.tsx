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

type DialogHeaderProps = {
  children: React.ReactNode
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

export const DialogHeader = styled<'header', DialogHeaderProps>('header')(
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
