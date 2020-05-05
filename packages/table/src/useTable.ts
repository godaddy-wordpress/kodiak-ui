import * as React from 'react'
import { hasKey } from './utils'
import { SxStyleProp } from '@kodiak-ui/core'

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

export interface UseTableOptions<Data> {
  columns: ColumnProps[]
  data: Data[]
}

export type TableElement = HTMLTableElement | null

export interface UseTableReturnValue<Data> {
  register: (ref: TableElement, registerOptions: RegisterOptions) => void
  headers: HeaderProps<Data>[]
  rows: RowProps<Data>[]
  getTableProps: () => {
    sx: SxStyleProp
  }
}

export type RegisterOptions = {
  describedby?: string | React.RefObject<any>
}

function hasWidthProvided(columns?: ColumnProps[]) {
  return !!(columns && columns.some(column => column.width))
}

export function useTable<Data>({
  columns,
  data,
}: UseTableOptions<Data>): UseTableReturnValue<Data> {
  const tableRef = React.useRef<TableElement>(null)
  const [hasFixedTableWidth, setHasFixedTableWidth] = React.useState(false)

  React.useEffect(
    function checkHasWidthProvided() {
      setHasFixedTableWidth(hasWidthProvided(columns))
    },
    [columns],
  )
  /**
   * Create all of the HTML attributes for an element
   *
   * Loops over the object keys and sets the attribute on the element for each key
   */
  function setAttributes<T extends Element | null>(
    element: T,
    attributes: { [key: string]: string },
  ): void {
    Object.keys(attributes).forEach(
      key =>
        element &&
        hasKey(attributes, key) &&
        element.setAttribute(key, attributes[key]),
    )
  }

  /**
   * Generate the appropriate aria-describedby text
   *
   * Depending on whether a string or a ref is passed into the `describedby` property
   * in options, this will generate the string of the ID of the elements describing the table
   */
  function defineDescribedByAriaText(
    options?: RegisterOptions,
  ): { 'aria-describedby': string } | undefined {
    if (!(options && options.describedby)) {
      return
    }

    if (typeof options.describedby === 'string') {
      return {
        'aria-describedby': options.describedby,
      }
    }

    if (options.describedby.current && options.describedby.current.id) {
      return {
        'aria-describedby': options.describedby.current.id,
      }
    } else if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `When passing a ref, the ref element must have an ID: @${options.describedby.current}`,
      )
    }
  }

  /**
   * Register the parent table element ref
   *
   * Adds the unique ID to the table element and generates the aria-describedby attribute
   */
  function registerTableRef({
    ref,
    options,
  }: {
    ref: TableElement
    options?: RegisterOptions
  }): {
    ref: TableElement
    options?: RegisterOptions
  } {
    tableRef.current = ref

    setAttributes<TableElement>(tableRef.current, {
      id: 'kodiak-ui-table', // TODO: Make this a unique ID that can be utilized on SSR installations
      ...defineDescribedByAriaText(options),
    })

    return { ref, options }
  }

  /**
   * Register all element refs
   *
   * Runs the passed ref and options into a series of functions to
   * add HTML attributes to all elements with `register` called in the `ref`
   *
   * Example: registerTableRef(registerTableBodyRef({ ref, options }))
   */
  function registerElementRefs(
    ref: TableElement,
    options?: RegisterOptions,
  ): {
    ref: TableElement
    options?: RegisterOptions
  } {
    return registerTableRef({ ref, options })
  }

  /**
   * Register the table element
   *
   * Allows the ability to add the appropriate HTML attributes
   * to an HTML element. Currently, it is only used for
   * the table element but should be updated to work with any children
   * elements
   */
  function register(
    ref: TableElement,
    options?: RegisterOptions,
  ): {
    ref: TableElement
    options?: RegisterOptions
  } | null {
    return ref && registerElementRefs(ref, options)
  }

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

  const getTableProps = React.useCallback((): { sx: SxStyleProp } => {
    return {
      sx: {
        tableLayout: hasFixedTableWidth ? 'fixed' : 'auto',
        width: hasFixedTableWidth ? 'auto' : '100%',
      },
    }
  }, [hasFixedTableWidth])

  return {
    register,
    headers,
    rows,
    getTableProps,
  }
}
