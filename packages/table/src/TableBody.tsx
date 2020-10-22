import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
} from 'kodiak-ui'
import { tableRoot } from './Table'

export type TableBodyProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }) {
  return css({
    display: 'table-row-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableBody',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableBody = styled('tbody')<TableBodyProps>(
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
