import styled from '@emotion/styled'
import { systemProps, SystemProps } from '@kodiak-ui/core'
import {
  variant,
  VariantProps,
  sx,
  shouldForwardProp,
  BaseProp,
  base,
} from '../Box/Box'

import { SxProps } from 'theme-ui'

export type ImageProps = VariantProps & SystemProps & SxProps & BaseProp

export const Image = styled<'img', ImageProps>('img', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp, variantKey = 'images', theme }) =>
    variant({ variant: variantProp, variantKey, theme }),
  ...systemProps,
  sx,
)
