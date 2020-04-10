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

export interface UseTableReturnValue {
  register: (ref: Element | null) => void
}

export type TableElement = HTMLTableElement

export type RegisterOptions = Partial<{
  label: boolean
}>

export function useTable<Data>({
  columns: userColumns,
  data: userData,
}: UseTableOptions<Data>): UseTableReturnValue {
  const tableRef = React.useRef<Element>()
  const labelIdRef = React.useRef<string>()

  function setAttributes(
    element: Element,
    attributes: { [key: string]: string },
  ): void {
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key]),
    )
  }

  function registerLabelRef(ref: Element): void {
    if (!ref.id) {
      console.warn(`Missing ID @${ref}`)
    }

    labelIdRef.current = ref.id
  }

  function registerTableRef(ref: Element): void {
    tableRef.current = ref

    setAttributes(tableRef.current, {
      id: 'kodiak-ui-table', // TODO: Make this a unique ID
      ...(labelIdRef && labelIdRef.current
        ? { 'aria-describedby': labelIdRef.current }
        : {}),
    })
  }

  function registerElementRefs<Element extends TableElement = TableElement>(
    ref: Element,
    options: RegisterOptions | Element | null = {},
  ) {
    console.log('ref', ref)
    console.log('options', options)
  }

  function register<Element extends TableElement = TableElement>(): (
    ref: Element | null,
  ) => void
  function register<Element extends TableElement = TableElement>(
    refOrOptions?: RegisterOptions | Element | null,
  ): (ref: Element | null) => void | void {
    return (ref: Element | null) =>
      ref && registerElementRefs(ref, refOrOptions)
  }

  return {
    register,
  }
}
