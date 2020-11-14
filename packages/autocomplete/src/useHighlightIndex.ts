import { useRef } from 'react'

export type UseHighlightIndexProps = {
  isOpen: boolean
  autoHighlightFirstOption?: boolean
  onHighlightedIndexChange?: (event, option: string) => void
}

export function useHighlightIndex(
  { isOpen, autoHighlightFirstOption }: UseHighlightIndexProps,
  ref: any,
) {
  const defaultHighlightedIndexRef = autoHighlightFirstOption ? 0 : -1
  const highlightedIndexRef = useRef<number>(defaultHighlightedIndexRef)

  return {}
}
