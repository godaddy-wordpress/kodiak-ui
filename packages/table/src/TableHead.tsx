import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
} from 'kodiak-ui'
import { tableRoot } from './Table'

export type TableHeadProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }) {
  return css({
    display: 'table-header-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableHead',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps) {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableHead = styled('thead')<TableHeadProps>(
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
