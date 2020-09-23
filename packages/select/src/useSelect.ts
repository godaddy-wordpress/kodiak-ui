import * as React from 'react'
import { useOverlay } from '@kodiak-ui/hooks/use-overlay'
import { useId } from '@kodiak-ui/hooks/use-id'
import { useKeyboard } from '@kodiak-ui/hooks/use-keyboard'
import { useOnClickOutside } from '@kodiak-ui/hooks/use-on-click-outside'

type View = 'INITIAL' | 'INTERACTING'

export type UseSelectProps = {
  items: string[]
}

export type OptionProps = {
  index: number
  isDisabled?: boolean
}

export type UseSelectReturn = {
  isOpen: boolean
  selectedItem: string
  activeIndex: number
  getLabelProps: () => void
  getTriggerProps: () => void
  getMenuProps: () => void
  getOptionProps: (args: OptionProps) => void
}

export function useSelect({ items }: UseSelectProps): UseSelectReturn {
  const triggerRef = React.useRef<HTMLElement>(null)
  const menuRef = React.useRef<HTMLElement>(null)

  const id = useId()
  const {
    isOpen,
    toggle: toggleMenu,
    open: openMenu,
    close: closeMenu,
  } = useOverlay()

  const [view, transition] = React.useState<View>('INITIAL')
  const [selectedItem, setSelectedItem] = React.useState<string>(null)
  const [activeIndex, setActiveIndex] = React.useState<number>(null)

  const labelId = `kodiak-ui-${id}-select-label`
  const buttonId = `kodiak-ui-${id}-select-button`
  const menuId = `kodiak-ui-${id}-select-menu`

  const handleTriggerOnKeyDown = React.useCallback(
    function handleTriggerOnKeyDown({ key }: React.KeyboardEvent) {
      switch (key) {
        case 'Enter':
          if (view === 'INITIAL') {
            transition('INTERACTING')
          } else {
            transition('INITIAL')
          }

        case 'ArrowUp':
        case 'ArrowDown':
          if (view === 'INITIAL') {
            transition('INTERACTING')
          }

        default:
      }
    },
    [view],
  )

  const handleMenuOnKeyDown = React.useCallback(function handleMenuOnKeyDown({
    key,
  }: React.KeyboardEvent) {
    switch (key) {
      case 'Enter':
      case ' ':
        transition('INITIAL')

      case 'Escape':
        transition('INITIAL')

      case 'ArrowDown':

      case 'ArrowUp':

      case 'Home':

      case 'End':

      default:
    }
  },
  [])

  const { getKeyboardProps: getTriggerKeyboardProps } = useKeyboard({
    onKeyDown: handleTriggerOnKeyDown,
  })

  const { getKeyboardProps: getMenuKeyboardProps } = useKeyboard({
    onKeyDown: handleMenuOnKeyDown,
  })

  useOnClickOutside({
    ref: menuRef as React.MutableRefObject<Element>,
    refException: triggerRef as React.MutableRefObject<Element>,
    handler: () => {
      transition('INITIAL')
    },
  })

  React.useEffect(
    function closeMenuOnTransitionToInitial() {
      if (view === 'INITIAL') {
        closeMenu()
      }
    },
    [closeMenu, view],
  )

  React.useEffect(
    function openMenuOnTransitionToInteracting() {
      if (view === 'INTERACTING') {
        openMenu()
      }
    },
    [openMenu, view],
  )

  const getLabelProps = React.useCallback(
    (): React.LabelHTMLAttributes<HTMLLabelElement> => ({
      id: labelId,
    }),
    [labelId],
  )

  const getTriggerProps = React.useCallback(
    ({
      isDisabled,
    }: {
      isDisabled?: boolean
    } = {}): React.ButtonHTMLAttributes<HTMLButtonElement> & {
      ref: React.MutableRefObject<HTMLElement>
    } => {
      const eventHandlers = isDisabled
        ? { disabled: true }
        : { onClick: toggleMenu, ...getTriggerKeyboardProps() }

      return {
        ref: triggerRef,
        id: buttonId,
        'aria-labelledby': `${labelId} ${buttonId}`,
        'aria-haspopup': 'listbox',
        ...eventHandlers,
        ...(isOpen ? { 'aria-expanded': 'true' } : {}),
      }
    },
    [buttonId, getTriggerKeyboardProps, isOpen, labelId, toggleMenu],
  )

  const getMenuProps = React.useCallback(
    (): React.HTMLAttributes<HTMLUListElement> & {
      ref: React.MutableRefObject<HTMLElement>
    } => ({
      ref: menuRef,
      id: menuId,
      tabIndex: -1,
      role: 'listbox',
      'aria-labelledby': labelId,
      ...getMenuKeyboardProps(),
    }),
    [getMenuKeyboardProps, labelId, menuId],
  )

  const getOptionProps = React.useCallback(
    ({
      index,
      isDisabled,
    }: OptionProps): React.LiHTMLAttributes<HTMLLIElement> => {
      const eventHandlers = isDisabled ? {} : { onClick: () => null }

      return {
        id: `kodiak-ui-${id}-select-li-${index}`,
        role: 'option',
        'aria-selected': index === activeIndex ? 'true' : 'false',
        ...eventHandlers,
      }
    },
    [activeIndex, id],
  )

  return {
    isOpen,
    selectedItem,
    activeIndex,
    getLabelProps,
    getTriggerProps,
    getMenuProps,
    getOptionProps,
  }
}
