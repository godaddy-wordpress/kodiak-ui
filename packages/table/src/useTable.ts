import * as React from 'react'

export interface ColumnProps {
  accessor: string
  id?: number
  Cell?: string | React.ReactNode
}

export interface HeaderProps {
  key: string
  id?: number
  scope: string
  children: string | React.ReactNode
}

export interface UseTableOptions<Data> {
  columns: ColumnProps[]
  data: Data[]
}

export type TableElement = HTMLTableElement | null

export interface UseTableReturnValue {
  register: (ref: TableElement, registerOptions: RegisterOptions) => void
  headers: HeaderProps[]
  rows: any[]
}

export type RegisterOptions = {
  describedby?: string | React.RefObject<any>
}

export function useTable<Data>({
  columns,
  data,
}: UseTableOptions<Data>): UseTableReturnValue {
  const tableRef = React.useRef<TableElement>(null)

  /**
   * Create all of the HTML attributes for an element
   *
   * Loops over the object keys and sets the attribute on the element for each key
   */
  function setAttributes(
    element: TableElement,
    attributes: { [key: string]: string },
  ): void {
    Object.keys(attributes).forEach(
      key => element && element.setAttribute(key, attributes[key]),
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
    } else {
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

    setAttributes(tableRef.current, {
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
   * Return a memoized array or headers
   *
   * New array will be created only when the columns param is changed and the appropriate props are added to render
   * the header inside of the th element
   */
  const headers = React.useMemo(
    () =>
      columns.map(({ id, accessor, Cell, ...column }) => ({
        ...column,
        id,
        key: `${id}`,
        scope: 'col',
        children: Cell,
      })),
    [columns],
  )

  const rows = React.useMemo(
    () =>
      data.map((point, index) => ({
        id: `${index}`,
        index,
        cells: ['Michael Scott', 'Regional manager'],
      })),
    [data],
  )

  return {
    register,
    headers,
    rows,
  }
}
