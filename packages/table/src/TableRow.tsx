import * as React from 'react'
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

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> &
  VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    color: 'inherit',
    display: 'table-row',
    outline: 0,
    verticalAlign: 'middle',
  })(theme)
}

function variant({
  variant: variantProp = 'tableRow',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableRowStyle = styled('tr')<TableRowProps>(
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

export const TableRow = React.memo(function TableRow(props) {
  return <TableRowStyle {...props} />
})
