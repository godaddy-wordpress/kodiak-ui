import {
  variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { tableRoot } from './Table'

export type TableHeadProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    display: 'table-header-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableHead',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableHead = styled('th')<TableHeadProps>(
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
