import { _variant, sx, Theme, css, styled, KodiakUIProps } from 'kodiak-ui'

export type TabProps = KodiakUIProps

export function base({ theme }: { theme: Theme }) {
  return css({
    bg: 'transparent',
    border: 'none',
    cursor: 'pointer',
    p: 4,
  })(theme)
}

export const Tab = styled('button')<TabProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'tab', variantKey = 'tabs', theme }) =>
    _variant({ variant: variantProp, theme, variantKey }),
  sx,
)
