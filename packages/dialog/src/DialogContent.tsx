import styled from '@emotion/styled'
import { InterpolationWithTheme } from '@emotion/core'
import { css, Theme } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  systemProps,
  SystemProps,
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
} from '@kodiak-ui/core'

type DialogContentProps = {
  children: React.ReactNode
  css?: InterpolationWithTheme<any> // TODO: remove when types are fixed, this shouldn't be required
} & SystemProps &
  VariantProps

const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    background: 'white',
    padding: 4,
  })(theme)

export const DialogContent = styled<'div', DialogContentProps>('div', {
  shouldForwardProp,
})(
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
