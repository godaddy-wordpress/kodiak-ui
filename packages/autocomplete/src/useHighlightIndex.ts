import { useCallback, useRef } from 'react'

export type UseHighlightIndexProps = {
  id: string
  isOpen: boolean
  options: string[]
  autoHighlightFirstOption?: boolean
  onHighlightedIndexChange?: (option: string) => void
}

export type SetHighlightedIndexProps = {
  diff: 'reset' | 'start' | 'end' | number
  direction: 'next' | 'previous'
  reason?: 'auto'
}

export function useHighlightIndex(
  {
    id,
    isOpen,
    options,
    autoHighlightFirstOption,
    onHighlightedIndexChange,
  }: UseHighlightIndexProps,
  inputRef: any,
  listboxRef: any,
) {
  const defaultHighlightedIndex = autoHighlightFirstOption ? 0 : -1
  const highlightedIndexRef = useRef<number>(defaultHighlightedIndex)

  const getNextIndex = useCallback(
    (diff: SetHighlightedIndexProps['diff']) => {
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
    },
    [defaultHighlightedIndex, options?.length],
  )

  const validateIndex = useCallback(
    (index: number, direction: SetHighlightedIndexProps['direction']) => {
      if (!listboxRef?.current || index === -1) {
        return -1
      }

      let nextIndex = index

      const option = listboxRef?.current?.querySelector(
        `[data-option-index="${index}]`,
      )

      const isDisabled =
        option?.disabled || option?.getAttribute('aria-disabled') === 'true'

      if ((option && !option.hasAttribute('tabindex')) || isDisabled) {
        nextIndex += direction === 'next' ? 1 : -1
      } else {
        return nextIndex
      }
    },
    [listboxRef],
  )

  const setHighlightedIndex = ({
    diff,
    direction = 'next',
  }: SetHighlightedIndexProps) => {
    if (!isOpen || !listboxRef?.current) {
      return
    }

    const nextIndex = validateIndex(getNextIndex(diff), direction)
    highlightedIndexRef.current = nextIndex

    // Set appropriate aria attributes on the input
    if (nextIndex === -1) {
      inputRef?.current?.removeAttribute('aria-activedescendant')
    } else {
      inputRef?.current?.setAttribute(
        'aria-activedescendant',
        `${id}-option-${nextIndex}`,
      )
    }

    const previousHilightedIndex = listboxRef?.current?.querySelector(
      '[data-option-highlighted]',
    )
    if (previousHilightedIndex) {
      previousHilightedIndex.removeAttribute('data-option-highlighted')
    }

    const option = listboxRef?.current?.querySelector(
      `[data-option-index="${nextIndex}"]`,
    )

    if (!option) {
      return
    }

    option.setAttribute('data-option-highlighted', 'true')
    onHighlightedIndexChange?.(nextIndex === -1 ? null : options?.[nextIndex])
  }

  return { setHighlightedIndex }
}
