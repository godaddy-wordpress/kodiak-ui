import styled from '@emotion/styled'
import { _variant, VariantProps, sx } from 'kodiak-ui'

import { SxProps } from 'theme-ui'

export type ImageProps = VariantProps & SxProps

export const Image = styled<'img', ImageProps>('img')(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'images', theme }) =>
    _variant({ variant: variantProp, variantKey, theme }),
  sx,
)
