import * as React from 'react'

export interface ColumnProps {
  accessor: string
  id?: number
  Header?: string | React.ReactNode
}

export interface UseTableOptions<Data> {
  columns: ColumnProps[]
  data: Data[]
}

export type TableElement = HTMLTableElement | null

export interface UseTableReturnValue {
  register: (ref: TableElement, registerOptions: RegisterOptions) => void
}

export type RegisterOptions = {
  describedby?: string | React.RefObject<any>
}

export function useTable<Data>({
  columns: userColumns,
  data: userData,
}: UseTableOptions<Data>): UseTableReturnValue {
  const tableRef = React.useRef<TableElement>(null)

  function setAttributes(
    element: TableElement,
    attributes: { [key: string]: string },
  ): void {
    Object.keys(attributes).forEach(
      key => element && element.setAttribute(key, attributes[key]),
    )
  }

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

    defineDescribedByAriaText(options)

    setAttributes(tableRef.current, {
      id: 'kodiak-ui-table', // TODO: Make this a unique ID
      ...defineDescribedByAriaText(options),
    })

    return { ref, options }
  }

  function registerElementRefs(
    ref: TableElement,
    options?: RegisterOptions,
  ): {
    ref: TableElement
    options?: RegisterOptions
  } {
    return registerTableRef({ ref, options })
  }

  function register(
    ref: TableElement,
    options?: RegisterOptions,
  ): {
    ref: TableElement
    options?: RegisterOptions
  } | null {
    return ref && registerElementRefs(ref, options)
  }

  return {
    register,
  }
}
