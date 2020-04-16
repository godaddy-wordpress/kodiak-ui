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

export type TableBodyProps = React.HTMLAttributes<HTMLElement> & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    display: 'table-row-group',
  })(theme)
}

function variant({
  variant: variantProp = 'tableBody',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
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
