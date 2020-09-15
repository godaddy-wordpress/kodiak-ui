import styled from '@emotion/styled'
import { InterpolationWithTheme } from '@emotion/core'
import { css, Theme } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import { variant, VariantProps, sx, shouldForwardProp } from '@kodiak-ui/core'

type DialogFooterProps = {
  children: React.ReactNode
  css?: InterpolationWithTheme<any> // TODO: this type shouldn't be required
} & VariantProps

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
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

export const DialogFooter = styled<'footer', DialogFooterProps>('footer', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp = 'dialogFooter', variantKey = 'dialogs', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)
