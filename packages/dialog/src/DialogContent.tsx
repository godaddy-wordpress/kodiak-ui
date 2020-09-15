import styled from '@emotion/styled'
import { css, Theme } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { variant, VariantProps, sx, shouldForwardProp } from '@kodiak-ui/core'

type DialogContentProps = {
  children: React.ReactNode
} & VariantProps

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    background: 'white',
    padding: 4,
  })(theme)

export const DialogContent = styled('div', {
  shouldForwardProp,
})<DialogContentProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogContent', variantKey = 'dialogs', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)
