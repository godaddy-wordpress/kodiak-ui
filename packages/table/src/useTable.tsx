import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
import { useId } from '@kodiak-ui/hooks'
import { Checkbox } from '@kodiak-ui/primitives'
import { hasKey } from './utils'
import {
  useRowSelect,
  createInitialState,
  SelectedRowsState,
} from './useRowSelect'

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
  id: string
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
  tableLayout?: 'auto' | 'fixed'
  selectable?: boolean
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
  selectedRows: SelectedRowsState
  getTableProps: () => GetTableProps
}

export function useTable<Data>({
  columns,
  data,
  id: userId,
  describedby,
  tableLayout = 'auto',
  selectable = false,
}: UseTableProps<Data>): UseTableReturnValue<Data> {
  const id = useId(userId)
  const {
    selectedRows,
    allSelected,
    someSelected,
    setSelectedRows,
  } = useRowSelect(createInitialState(data, false))

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

      if (describedby?.current?.id) {
        return {
          'aria-describedby': describedby.current.id,
        }
      } else if (
        process.env.NODE_ENV !== 'production' &&
        !describedby?.current?.id
      ) {
        console.warn(
          `When passing a ref, the ref element must have an ID: @${describedby.current}`,
        )
      }
    },
    [describedby],
  )

  function getSelectAllCheckbox() {
    if (selectable) {
      return {
        children: (
          <Checkbox checked={allSelected} indeterminate={someSelected} />
        ),
        width: '48px',
      }
    }
  }

  function getRowCheckbox(id: string | number) {
    if (selectable) {
      return {
        children: (
          <Checkbox
            checked={selectedRows?.[id]}
            onChange={e => {
              setSelectedRows({
                ...selectedRows,
                [id]: e.target.checked,
              })
            }}
          />
        ),
        width: '48px',
      }
    }
  }

  /**
   * Return a memoized array of headers
   *
   * New array will be created only when the columns param is changed and the appropriate props are added to render
   * the header inside of the th element
   */
  const headers: HeaderProps<Data>[] = React.useMemo(
    () => [
      getSelectAllCheckbox(),
      ...columns.map((column, index) => ({
        column,
        key: `${index}`,
        scope: column.scope || 'col',
        children: column.Cell,
      })),
    ],
    [selectable, columns, selectedRows],
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
        cells: [
          getRowCheckbox(point?.id),
          ...columns.map((column: ColumnProps, index) => {
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
        ],
      })),
    [data, columns, selectedRows],
  )

  const getTableProps = React.useCallback((): GetTableProps => {
    return {
      ...getDescribedByAriaText(),
      id: `kodiak-ui-table-${id}`,
      sx: {
        tableLayout,
      },
    }
  }, [id, tableLayout])

  return {
    headers,
    rows,
    selectedRows,
    getTableProps,
  }
}
