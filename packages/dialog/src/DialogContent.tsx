import { _variant, VariantProps, styled, sx, css, Theme } from 'kodiak-ui'

type DialogContentProps = {
  children: React.ReactNode
} & VariantProps

const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
    background: 'white',
    padding: 4,
  })(theme)

export const DialogContent = styled('div')<DialogContentProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogContent', variantKey = 'dialogs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
