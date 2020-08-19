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

export type TableDataProps = React.HTMLAttributes<HTMLTableDataCellElement> &
  VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    borderBottom: '1px solid',
    borderColor: 'muted',
    display: 'table-cell',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    padding: 3,
    verticalAlign: 'inherit',
  })(theme)
}

function variant({
  variant: variantProp = 'tableData',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableDataStyle = styled('td')<TableDataProps>(
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

export const TableData = React.memo(function TableData(props) {
  return <TableDataStyle {...props} />
})
