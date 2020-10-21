import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  styled,
  CSSObject,
} from 'kodiak-ui'
import { tableRoot } from './Table'

export type TableHeadProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }): CSSObject {
  return css({
    display: 'table-header-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableHead',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): CSSObject {
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
