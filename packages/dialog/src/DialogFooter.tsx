import { _variant, styled, sx, Theme, css, KodiakUIProps } from 'kodiak-ui'

type DialogFooterProps = KodiakUIProps

const baseStyles = ({ theme }: { theme: Theme }) =>
  css({
    alignItems: 'center',
    background: 'white',
    borderTop: '1px solid',
    borderColor: 'muted',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
    padding: 4,
  })(theme)

export const DialogFooter = styled('footer')<DialogFooterProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogFooter', variantKey = 'dialogs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
