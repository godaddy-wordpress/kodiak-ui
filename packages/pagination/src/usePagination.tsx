import * as React from 'react'

export interface CursorPageInfo {
  endCursor?: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor?: string
}

export interface CursorConnectionInput {
  after?: string
  before?: string
  first?: number
  last?: number
}

interface UsePaginationProps {
  type?: 'cursor' | 'limit'
  numberOfItems?: number
  pageInfo: CursorPageInfo
  onPageChange: (input: CursorConnectionInput) => void
}

type PaginationElement = 'prev' | 'next' | 'last' | 'first'

export function usePagination(userProps: Partial<UsePaginationProps> = {}) {
  const defaultProps = {
    type: 'cursor',
    numberOfItems: 25,
  }

  const { type, numberOfItems, pageInfo, onPageChange } = {
    ...defaultProps,
    ...userProps,
  }

  const getCursorBasedProps = React.useCallback(
    function getCursorBasedProps({
      name,
    }: {
      name: PaginationElement
    }): CursorConnectionInput {
      switch (name) {
        case 'prev':
          return {
            last: numberOfItems,
            before: pageInfo && pageInfo.startCursor,
          }
        case 'next':
          return {
            first: numberOfItems,
            after: pageInfo && pageInfo.endCursor,
          }
        case 'last':
          return {
            last: numberOfItems,
          }
        case 'first':
          return {
            first: numberOfItems,
          }
        default:
          return {}
      }
    },
    [numberOfItems, pageInfo],
  )

  const handleNavigate = React.useCallback(
    function handleNavigate({ name }: { name: PaginationElement }) {
      const props = type === 'cursor' ? getCursorBasedProps({ name }) : {}

      onPageChange && onPageChange(props)
    },
    [type, getCursorBasedProps, onPageChange],
  )

  return {
    handleNavigate,
  }
}
