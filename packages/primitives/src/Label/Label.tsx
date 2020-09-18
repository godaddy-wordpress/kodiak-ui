import styled from '@emotion/styled'
import { _variant, VariantProps, sx } from '@kodiak-ui/core'
import { SxProps } from 'theme-ui'

type LabelProps = VariantProps & SxProps

export const Label = styled<'label', LabelProps>('label')(
  {
    boxSizing: 'border-box',
    display: 'inline-block',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'labels', theme }) =>
    _variant({ variant: variantProp, variantKey, theme }),
  sx,
)
