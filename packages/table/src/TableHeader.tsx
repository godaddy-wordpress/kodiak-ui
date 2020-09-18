import * as React from 'react'
import {
  _variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { tableRoot } from './Table'

export type TableHeaderProps = React.HTMLAttributes<
  HTMLTableHeaderCellElement
> &
  VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    borderBottom: '1px solid',
    borderColor: 'muted',
    color: 'inherit',
    display: 'table-cell',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    padding: 3,
    textAlign: 'left',
    verticalAlign: 'inherit',
  })(theme)
}

function variant({
  variant: variantProp = 'tableHeader',
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableHeaderStyle = styled('th')<TableHeaderProps>(
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

export const TableHeader = React.memo(function TableHeader(props: {
  children: React.ReactNode
}) {
  return <TableHeaderStyle {...props} />
})
