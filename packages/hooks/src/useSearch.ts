import * as React from 'react'
import { useDebounce } from './useDebounce'

type SearchTerm = string | null

interface UseSearchProps {
  handler: (searchTerm: SearchTerm) => void
}

export function useSearch({
  handler,
}: UseSearchProps): [SearchTerm, React.Dispatch<React.SetStateAction<string>>] {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 300)
  const prevDebouncedTerm = usePrevious(debouncedSearchTerm)

  React.useEffect(
    function handleSearch() {
      if (debouncedSearchTerm !== prevDebouncedTerm) {
        handler?.(debouncedSearchTerm)
      }
    },
    [debouncedSearchTerm, prevDebouncedTerm, handler],
  )

  return [searchTerm, setSearchTerm]
}
