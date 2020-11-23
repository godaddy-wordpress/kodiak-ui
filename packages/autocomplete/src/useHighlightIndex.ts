import { useRef } from 'react'

export type UseHighlightIndexProps = {
  isOpen: boolean
  options: string[]
  autoHighlightFirstOption?: boolean
  onHighlightedIndexChange?: (event, option: string) => void
}

export type SetHighlightedIndexProps = {
  diff: 'reset' | 'start' | 'end' | number
  direction: 'next' | 'previous'
  reason?: 'auto'
}

export function useHighlightIndex(
  { isOpen, options, autoHighlightFirstOption }: UseHighlightIndexProps,
  inputRef: any,
  listboxRef: any,
) {
  const defaultHighlightedIndex = autoHighlightFirstOption ? 0 : -1
  const highlightedIndexRef = useRef<number>(defaultHighlightedIndex)

  function getNextIndex(diff: SetHighlightedIndexProps['diff']) {
    const maxIndex = options?.length - 1

    if (diff === 'reset') {
      return defaultHighlightedIndex
    }

    if (diff === 'start') {
      return 0
    }

    if (diff === 'end') {
      return maxIndex
    }

    const newIndex = highlightedIndexRef?.current + diff

    if (newIndex < 0) {
      return maxIndex
    }

    if (newIndex > maxIndex) {
      return 0
    }

    return newIndex
  }

  function validateIndex(
    index: number,
    direction: SetHighlightedIndexProps['direction'],
  ) {
    if (!listboxRef?.current || index === -1) {
      return -1
    }

    let nextIndex = index

    const option = listboxRef?.current?.querySelector(
      `[data-option-index="${index}]`,
    )
  }

  function setHighlightedIndex({
    diff,
    direction = 'next',
    reason = 'auto',
  }: SetHighlightedIndexProps) {
    if (!isOpen) {
      return
    }

    const nextIndex = getNextIndex(diff)
  }

  return {}
}
