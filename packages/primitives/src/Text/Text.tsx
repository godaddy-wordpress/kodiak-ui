import styled from '@emotion/styled'
import { _variant, sx, KodiakUIProps } from 'kodiak-ui'

type TextProps = React.PropsWithChildren<{ as?: string }> & KodiakUIProps

export const Text = styled('p')<TextProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  ({ variant: variantProp, variantKey = 'text', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
