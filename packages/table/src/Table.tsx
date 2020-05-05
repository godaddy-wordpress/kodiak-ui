import * as React from 'react'
import {
  variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
  SxStyleProp,
} from '@kodiak-ui/core'
import { Box } from '@kodiak-ui/primitives'

export function tableRoot({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    borderCollapse: 'collapse',
    borderSpacing: 0,
  })(theme)
}

export type TableProps = {
  children?: React.ReactNode // Type error if this isn't optional
  ref?: (node: HTMLTableElement) => void
  sx?: SxStyleProp
  wrapperSx?: SxStyleProp
} & VariantProps

export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    display: 'table',
    minWidth: '650px',
    width: '100%',
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey = 'tables',
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableStyle = styled('table')<TableProps>(
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

export function TableElement({ variantKey = 'tables', ...props }: TableProps) {
  return <TableStyle variantKey={variantKey} {...props} />
}

export const Table = React.forwardRef<
  HTMLTableElement,
  React.ComponentProps<typeof TableStyle>
>(function Table(
  { sx, wrapperSx, variant, variantKey = 'tables', ...props }: TableProps,
  ref,
) {
  return (
    <Box
      __base={{ width: '100%', overflowX: 'auto' }}
      sx={wrapperSx}
      variant="tableWrapper"
      variantKey={variantKey}
    >
      <TableStyle
        variant={variant}
        variantKey={variantKey}
        ref={ref as any}
        sx={sx}
        {...props}
      />
    </Box>
  )
})
