import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { useId } from '@kodiak-ui/hooks'
import { hasKey } from './utils'

export interface ColumnProps {
  Cell: string | React.ReactNode
  accessor?: string
  scope?: 'col' | 'row'
  width?: React.CSSProperties['width']
}

export interface CellProps<Data> {
  key: string
  children: string | React.ReactNode
  rowData?: Data
  column?: ColumnProps
}

export interface RowProps<Data> {
  key: string
  id?: string
  cells: CellProps<Data>[]
  rowData: Data
}

export interface HeaderProps<Data> extends CellProps<Data> {
  scope: string
}

export interface UseTableProps<Data> {
  columns: ColumnProps[]
  data: Data[]
  id?: string
  describedby?: React.MutableRefObject<any> | string
}

export type TableElement = HTMLTableElement | null

export type GetTableProps = {
  id: string
  sx: SxStyleProp
  'aria-describedby'?: string
}

export interface UseTableReturnValue<Data> {
  headers: HeaderProps<Data>[]
  rows: RowProps<Data>[]
  getTableProps: () => GetTableProps
}

function hasWidthProvided(columns?: ColumnProps[]) {
  return !!(columns && columns.some(column => column.width))
}

export function useTable<Data>({
  columns,
  data,
  id: userId,
  describedby,
}: UseTableProps<Data>): UseTableReturnValue<Data> {
  const [hasFixedTableWidth, setHasFixedTableWidth] = React.useState(false)
  const id = useId(userId)

  React.useEffect(
    function checkHasWidthProvided() {
      setHasFixedTableWidth(hasWidthProvided(columns))
    },
    [columns],
  )

  /**
   * Generate the appropriate aria-describedby text
   *
   * Depending on whether a string or a ref is passed into the `describedby` property
   * in options, this will generate the string of the ID of the elements describing the table
   */
  const getDescribedByAriaText = React.useCallback(
    function getDescribedByAriaText():
      | { 'aria-describedby': string }
      | undefined {
      if (!describedby) {
        return
      }

      if (typeof describedby === 'string') {
        return {
          'aria-describedby': describedby,
        }
      }

      if (describedby.current && describedby.current.id) {
        return {
          'aria-describedby': describedby.current.id,
        }
      } else if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `When passing a ref, the ref element must have an ID: @${describedby.current}`,
        )
      }
    },
    [describedby],
  )

  /**
   * Return a memoized array of headers
   *
   * New array will be created only when the columns param is changed and the appropriate props are added to render
   * the header inside of the th element
   */
  const headers: HeaderProps<Data>[] = React.useMemo(
    () =>
      columns.map((column, index) => ({
        column,
        key: `${index}`,
        scope: column.scope || 'col',
        children: column.Cell,
      })),
    [columns],
  )

  /**
   * Return a memoized array of rows
   *
   * New array will be created only when `data` is changed.
   */

  const rows: RowProps<Data>[] = React.useMemo(
    () =>
      data.map((point: Data, index) => ({
        key: `${index}`,
        rowData: point,
        rowIndex: index,
        cells: columns.map((column: ColumnProps, index) => {
          return {
            key: `${index}`,
            column,
            children:
              column.accessor && hasKey(point, column.accessor)
                ? typeof point[column.accessor] === 'function'
                  ? (point[column.accessor] as any)({ rowData: point })
                  : point[column.accessor]
                : null,
            rowData: point,
          }
        }),
      })),
    [data, columns],
  )

  const getTableProps = React.useCallback((): GetTableProps => {
    return {
      ...getDescribedByAriaText(),
      id: `kodiak-ui-table-${id}`,
      sx: {
        tableLayout: hasFixedTableWidth ? 'fixed' : 'auto',
        width: hasFixedTableWidth ? 'auto' : '100%',
      },
    }
  }, [hasFixedTableWidth])

  return {
    headers,
    rows,
    getTableProps,
  }
}
