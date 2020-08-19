import * as React from 'react'

export type SelectedRowsState = { [key: string]: boolean }

export function createInitialState<T>(
  data: T,
  state: boolean = false,
): SelectedRowsState {
  return data?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr?.id]: state,
    }),
    {},
  )
}

interface UseRowSelectReturn {
  selectedRows: SelectedRowsState
  allSelected: boolean
  someSelected: boolean
  selectedCount: number
  setSelectedRows: React.Dispatch<React.SetStateAction<SelectedRowsState>>
}

export function useRowSelect(
  initialState: SelectedRowsState,
): UseRowSelectReturn {
  const [selectedRows, setSelectedRows] = React.useState<{
    [key: string]: SelectedRowsState
  }>(initialState)

  const allSelected = React.useMemo(
    () => (selectedRows ? Object.values(selectedRows)?.every(Boolean) : false),
    [selectedRows],
  )

  const someSelected = React.useMemo(
    () => (selectedRows ? Object.values(selectedRows)?.some(Boolean) : false),
    [selectedRows],
  )

  const selectedCount = React.useMemo(
    () =>
      selectedRows ? Object.values(selectedRows)?.filter(Boolean).length : 0,
    [selectedRows],
  )

  return {
    selectedRows,
    allSelected,
    someSelected,
    selectedCount,
    setSelectedRows,
  }
}
