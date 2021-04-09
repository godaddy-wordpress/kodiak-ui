import * as React from 'react'
import { useControlled, useId } from '@kodiak-ui/hooks'
import update from 'immutability-helper'
import { hasKey } from './utils'
import { useRowSelect, createRowState, SelectedRowsState } from './useRowSelect'
import { SxProps } from 'kodiak-ui'

export type ID = string | number
export type Scope = 'col' | 'row'
export type TableLayout = 'auto' | 'fixed'

export type Data = {
  id: ID
}

export type Column = {
  Cell: string | React.ReactNode
  accessor?: string
  scope?: Scope
  width?: string
}

export type Cell = {
  column?: Column
  key: string
  children: React.ReactNode
  rowData?: any
  width?: string
}

export type Header = { scope?: Scope } & Cell

export type Row = {
  key: string
  id: ID
  cells: Cell[]
  rowData: any
}

export interface UseTableProps<T> {
  columns: Column[]
  data: T[]
  tableLayout?: TableLayout
  selectable?: boolean
  initialSelectedIds?: ID[]
  allRecordsSelected?: boolean
  attributes?: {
    id?: string
    describedby?: React.MutableRefObject<any> | string
  }
}

export type GetTableProps = {
  id: string
  'aria-describedby'?: string
} & SxProps

export interface UseTableReturnValue {
  headers: Header[]
  rows: Row[]
  selectedRows: SelectedRowsState
  flatSelectedRows: ID[]
  allSelected: boolean
  someSelected: boolean
  selectedCount: number
  getTableProps: () => GetTableProps
  clearSelection: () => void
  moveRow: (dragIndex: number, hoverIndex: number) => void
}

export function useTable<T extends Data>({
  columns,
  data: dataProp,
  tableLayout = 'auto',
  selectable = false,
  initialSelectedIds,
  allRecordsSelected,
  attributes = {},
}: UseTableProps<T>): UseTableReturnValue {
  const { id: userId, describedby } = attributes
  const id = useId(userId)

  const [data, setData] = useControlled<T[]>({
    controlled: dataProp,
    default: dataProp,
    name: 'useTable',
  })

  const {
    selectedRows,
    flatSelectedRows,
    allSelected,
    someSelected,
    selectedCount,
    setSelectedRows,
    getSelectAllCheckbox,
    getRowCheckbox,
    clearSelection,
  } = useRowSelect({
    selectable,
    data,
    initialSelectedIds,
    allRecordsSelected,
    onSelect: (event, id) => {
      setSelectedRows({
        ...selectedRows,
        [id]: event.target.checked,
      })
    },
    onSelectAll: event =>
      setSelectedRows(
        createRowState<T>({ data, state: event.target.checked }),
      ),
  })

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

  /**
   * Return a memoized array of headers
   *
   * New array will be created only when the columns param is changed and the appropriate props are added to render
   * the header inside of the th element
   */
  const headers = React.useMemo(
    () => [
      ...getSelectAllCheckbox(),
      ...columns.map((column, index) => ({
        column,
        key: `${index}`,
        scope: column.scope || 'col',
        children: column.Cell,
        width: column.width,
      })),
    ],
    [columns, getSelectAllCheckbox],
  )

  /**
   * Return a memoized array of rows
   *
   * New array will be created only when `data` is changed.
   */

  const rows = React.useMemo(
    () =>
      data?.map((point: any, index) => ({
        id: point?.id,
        key: `${index}`,
        rowData: point,
        rowIndex: index,
        cells: [
          ...getRowCheckbox(point?.id),
          ...columns.map((column: Column, index) => {
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
    [data, columns, getRowCheckbox],
  )

  const getTableProps = React.useCallback((): GetTableProps => {
    return {
      ...getDescribedByAriaText(),
      id: `kodiak-ui-table-${id}`,
      sx: {
        tableLayout,
      },
    }
  }, [id, tableLayout, getDescribedByAriaText])

  const moveRow = React.useCallback((dragIndex, hoverIndex) => {
    const dragRecord = data[dragIndex]
    setData(
      update(data, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      }),
    )
  }, [])

  return {
    headers,
    rows,
    selectedRows,
    flatSelectedRows,
    allSelected,
    someSelected,
    selectedCount,
    getTableProps,
    clearSelection,
    moveRow,
  }
}
