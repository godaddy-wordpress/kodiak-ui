import * as React from 'react'
import {
  _variant as getVariantStyles,
  sx,
  Theme,
  css,
  styled,
  VariantProps,
  SxStyleProp,
  KodiakUIProps,
} from 'kodiak-ui'

export type { VariantProps, SxStyleProp } from 'kodiak-ui'
import { Box } from '@kodiak-ui/primitives'

export function tableRoot({ theme }: { theme: Theme }) {
  return css({
    borderCollapse: 'collapse',
    borderSpacing: 0,
  })(theme)
}

export type TableProps = KodiakUIProps & { wrapperSx?: SxStyleProp }

export function base({ theme }: { theme: Theme }) {
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
}: { theme: Theme } & VariantProps) {
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

export const Table = React.memo(
  React.forwardRef<HTMLTableElement, React.ComponentProps<typeof TableStyle>>(
    function Table(
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
    },
  ),
)
