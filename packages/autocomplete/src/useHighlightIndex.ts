import { useCallback } from 'react'

export type UseHighlightIndexProps = {
  id: string
  isOpen: boolean
  options: string[]
  onHighlightedIndexChange?: (option: string) => void
}

export type SetHighlightedIndexProps = {
  diff?: 'reset' | 'start' | 'end' | number
  index?: number
  direction?: 'next' | 'previous'
}

export function useHighlightIndex(
  { id, isOpen, options, onHighlightedIndexChange }: UseHighlightIndexProps,
  inputRef,
  listboxRef,
  highlightedIndexRef,
) {
  const getNextIndex = useCallback(
    (diff: SetHighlightedIndexProps['diff']) => {
      const maxIndex = options?.length - 1

      if (diff === 'reset') {
        return -1
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
    [highlightedIndexRef, options?.length],
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
    index,
    direction = 'next',
  }: SetHighlightedIndexProps) => {
    if (!isOpen || !listboxRef?.current) {
      return
    }

    const nextIndex = validateIndex(
      index || index === 0 ? index : getNextIndex(diff),
      direction,
    )
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

    const listboxNode: HTMLElement = listboxRef?.current?.parentElement.querySelector(
      '[role="listbox"]',
    )

    if (listboxNode?.scrollHeight > listboxNode?.clientHeight) {
      const element = option as HTMLElement

      const scrollBottom = listboxNode?.clientHeight + listboxNode?.scrollTop
      const elementBottom = element.offsetTop + element.offsetHeight

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode?.clientHeight
      } else if (
        element?.offsetTop - element?.offsetHeight <
        listboxNode?.offsetTop
      ) {
        listboxNode.scrollTop = element?.offsetTop - element?.offsetHeight
      }
    }
  }

  return setHighlightedIndex
}
