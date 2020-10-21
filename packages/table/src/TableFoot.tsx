import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
} from 'kodiak-ui'
import { tableRoot } from './Table'

export type TableFootProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }) {
  return css({
    display: 'table-footer-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableFoot',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableFoot = styled('tfoot')<TableFootProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  tableRoot,
  base,
  variant,
  sx,
)
