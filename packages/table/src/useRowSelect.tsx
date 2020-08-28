import * as React from 'react'
import { Checkbox, VisuallyHidden } from '@kodiak-ui/primitives'
import { Header, Cell, Data, ID } from './useTable'

export type SelectedRowsState = { [key: string]: boolean }

export function createRowState<T extends Data>({
  data,
  state = false,
  initialSelectedIds,
}: {
  data: T[]
  state: boolean
  initialSelectedIds?: ID[]
}): SelectedRowsState {
  return data?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr?.id]: initialSelectedIds?.includes(curr?.id) ? true : state,
    }),
    {},
  )
}

interface UseRowSelectReturn {
  selectedRows: SelectedRowsState
  flatSelectedRows: ID[]
  allSelected: boolean
  someSelected: boolean
  selectedCount: number
  setSelectedRows: React.Dispatch<React.SetStateAction<SelectedRowsState>>
  getSelectAllCheckbox: () => Header[]
  getRowCheckbox: (id: string | number) => Cell[]
}

interface UseRowSelectProps {
  selectable: boolean
  initialState: SelectedRowsState
  onSelect: (event: React.ChangeEvent<HTMLInputElement>, id: ID) => void
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function useRowSelect({
  selectable,
  initialState,
  onSelect,
  onSelectAll,
}: UseRowSelectProps): UseRowSelectReturn {
  const [selectedRows, setSelectedRows] = React.useState<SelectedRowsState>(
    initialState,
  )

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

  const flatSelectedRows = React.useMemo(
    () =>
      selectedRows
        ? Object.keys(selectedRows)
            ?.map(key => (selectedRows[key] ? key : null))
            ?.filter(x => x)
        : [],
    [selectedRows],
  )

  const getSelectAllCheckbox = React.useCallback(
    function getSelectAllCheckbox(): Header[] {
      return selectable
        ? [
            {
              key: 'selectAll',
              children: (
                <Checkbox
                  label={<VisuallyHidden>Select all rows</VisuallyHidden>}
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={onSelectAll}
                />
              ),
              width: '48px',
            },
          ]
        : []
    },
    [selectable, allSelected, someSelected, onSelectAll],
  )

  const getRowCheckbox = React.useCallback(
    function getRowCheckbox(id: string | number): Cell[] {
      if (selectable) {
        return [
          {
            key: `select-${id}`,
            children: (
              <Checkbox
                label={<VisuallyHidden>Select row {id}</VisuallyHidden>}
                checked={selectedRows?.[id]}
                onChange={e => onSelect(e, id)}
              />
            ),
            width: '48px',
          },
        ]
      }

      return []
    },
    [selectable, selectedRows, onSelect],
  )

  return {
    selectedRows,
    flatSelectedRows,
    allSelected,
    someSelected,
    selectedCount,
    setSelectedRows,
    getSelectAllCheckbox,
    getRowCheckbox,
  }
}
