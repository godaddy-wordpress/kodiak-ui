import styled from '@emotion/styled'
import {
  css,
  sx,
  variant as getVariantStyles,
  VariantProps,
  Theme,
  SerializedStyles,
} from '@kodiak-ui/core'
import { tableRoot } from './Table'

export type TableHeaderProps = React.HTMLAttributes<
  HTMLTableHeaderCellElement
> &
  VariantProps

/**
 * base
 *
 * Generate the base CSS for the SelectMenu component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    borderBottom: '1px solid',
    borderColor: 'muted',
    color: 'text',
    display: 'table-cell',
    padding: 3,
    textAlign: 'left',
    verticalAlign: 'inherit',
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableHeader = styled('th')<TableHeaderProps>(
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
