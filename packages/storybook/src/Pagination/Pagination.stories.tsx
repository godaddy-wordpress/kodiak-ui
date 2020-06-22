import * as React from 'react'
import {
  usePagination,
  CursorConnectionInput,
  Pagination,
  PaginationButton,
} from '@kodiak-ui/pagination'
import { Box, Text } from '@kodiak-ui/primitives'

export default { title: 'Pagination' }

export function Cursor() {
  const [input, setInput] = React.useState<CursorConnectionInput>({})
  function handlePageChange(input: CursorConnectionInput) {
    setInput(input)
  }

  const { handleNavigate } = usePagination({
    numberOfItems: 10,
    pageInfo: {
      startCursor: 'MUT',
      hasNextPage: true,
      hasPreviousPage: true,
      endCursor: 'EVA',
    },
    onPageChange: handlePageChange,
  })
  return (
    <>
      {input && (
        <Box>
          <Text>First: {input.first}</Text>
          <Text>Last: {input.last}</Text>
          <Text>Before: {input.before}</Text>
          <Text>After: {input.after}</Text>
        </Box>
      )}
      <Pagination>
        <PaginationButton onClick={() => handleNavigate({ name: 'first' })}>
          First
        </PaginationButton>
        <PaginationButton onClick={() => handleNavigate({ name: 'prev' })}>
          Previous
        </PaginationButton>
        <PaginationButton onClick={() => handleNavigate({ name: 'next' })}>
          Next
        </PaginationButton>
        <PaginationButton onClick={() => handleNavigate({ name: 'last' })}>
          Last
        </PaginationButton>
      </Pagination>
    </>
  )
}
