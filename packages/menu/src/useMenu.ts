import * as React from 'react'
import { createPopper, VirtualElement, Placement } from '@popperjs/core'
import { usePortal, useKey, useOnClickOutside } from '@kodiak-ui/hooks'
import { hasKey } from './utils'
import { OffsetModifier } from '@popperjs/core/lib/modifiers/offset'

/**
 * Create all of the HTML attributes for an element
 *
 * Loops over the object keys and sets the attribute on the element for each key
 */
function setAttributes<T extends Element | null>(
  element: T,
  attributes: { [key: string]: string },
): void {
  Object.keys(attributes).forEach(
    key =>
      element &&
      hasKey(attributes, key) &&
      element.setAttribute(key, attributes[key]),
  )
}

interface NextIndexProps {
  moveAmount: number
  baseIndex: number
  items: { [key: string]: HTMLLIElement | Element }
  getItemNodeFromIndex: (index: number) => HTMLLIElement | Element | null
  circular?: boolean
}

function getNextNonDisabledIndex({
  moveAmount,
  baseIndex,
  items,
  getItemNodeFromIndex,
  circular = true,
}: NextIndexProps): number {
  const itemCount = Object.keys(items).length
  const currentElementNode = getItemNodeFromIndex(baseIndex)
  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex
  }

  if (moveAmount > 0) {
    for (let index = baseIndex + 1; index < itemCount; index++) {
      const node = getItemNodeFromIndex(index)
      if (node && !node.hasAttribute('disabled')) {
        return index
      }
    }
  } else {
    for (let index = baseIndex - 1; index >= 0; index--) {
      const node = getItemNodeFromIndex(index)
      if (node && !node.hasAttribute('disabled')) {
        return index
      }
    }
  }

  if (circular) {
    return moveAmount > 0
      ? getNextNonDisabledIndex({
          moveAmount: 1,
          baseIndex: 0,
          items,
          getItemNodeFromIndex,
          circular: false,
        })
      : getNextNonDisabledIndex({
          moveAmount: -1,
          baseIndex: itemCount - 1,
          items,
          getItemNodeFromIndex,
          circular: false,
        })
  }

  return -1
}

function getNextItem({
  moveAmount,
  baseIndex,
  items,
  getItemNodeFromIndex,
  circular = true,
}: NextIndexProps): string {
  const itemCount = Object.keys(items).length
  const lastIndex = itemCount - 1

  if (
    typeof baseIndex !== 'number' ||
    baseIndex < 0 ||
    baseIndex >= itemCount
  ) {
    baseIndex = moveAmount > 0 ? -1 : lastIndex + 1
  }

  let newIndex = baseIndex + moveAmount

  if (newIndex < 0) {
    newIndex = lastIndex
  } else if (newIndex > lastIndex) {
    newIndex = 0
  }

  const nonDisabledNewIndex = getNextNonDisabledIndex({
    moveAmount,
    baseIndex: newIndex,
    items,
    getItemNodeFromIndex,
    circular,
  })

  const nonDisabledNewItem = Object.keys(items)[nonDisabledNewIndex]
  const baseItem = Object.keys(items)[baseIndex]

  return nonDisabledNewIndex === -1 ? baseItem : nonDisabledNewItem
}

let idCounter = 0

function generateId() {
  return String(idCounter++)
}

interface ElementIds {
  labelId: string
  menuId: string
  getItemId: (name: string) => string
  buttonId: string
}

function generateElementIds(): ElementIds {
  const id = `kodiak-ui-menu-${generateId()}`

  return {
    labelId: `${id}-label`,
    menuId: `${id}-menu`,
    getItemId: (name: string) => `${id}-item-${name}`,
    buttonId: `${id}-button`,
  }
}

interface RegisterOptions {
  name: string
  handler: () => void
}

interface UseMenuProps {
  placement?: Placement
  offset?: [number, number]
}

interface UseMenuReturnValue {
  register: (
    ref: (HTMLButtonElement | HTMLUListElement | HTMLLIElement) | null,
    registerOptions?: RegisterOptions,
  ) => void
  isExpanded: boolean
  activeItem: string
  handleToggleMenu: (event: React.MouseEvent<any, MouseEvent>) => void
  handleCloseMenu: () => void
  getItemProps: (
    name: string,
  ) => { onClick: (() => void) | undefined; onMouseEnter: () => void }
  Menu: React.ReactNode
}

enum MenuElementTagNames {
  Button = 'BUTTON',
  Ul = 'UL',
  Li = 'LI',
}

interface RefAndOptions<Element> {
  ref: Element | null
  options?: RegisterOptions
}

export function useMenu({
  placement = 'bottom-start',
  offset = [0, 8],
}: UseMenuProps = {}): UseMenuReturnValue {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const menuRef = React.useRef<HTMLUListElement>()
  const itemsRef = React.useRef<{ [key: string]: HTMLLIElement | Element }>({})
  const itemHandlersRef = React.useRef<{
    [key: string]: (() => void) | undefined
  }>({})
  const elementIds = React.useRef<ElementIds>(generateElementIds())
  const popperInstanceRef = React.useRef<any | null>(null)

  const [activeItem, setActiveItem] = React.useState('')

  const {
    isOpen: isExpanded,
    handleOpenPortal,
    handleClosePortal,
    Portal,
  } = usePortal()

  React.useLayoutEffect(
    function initializePopper() {
      if (!isExpanded && (!buttonRef.current || !menuRef.current)) {
        return
      }

      const popperInstance = createPopper(
        buttonRef.current as Element | VirtualElement,
        menuRef.current as HTMLElement,
        {
          placement,
          modifiers: [{ name: 'offset', options: { offset } }],
        },
      )

      popperInstanceRef.current = popperInstance

      return () => {
        popperInstance.destroy()
        popperInstanceRef.current = null
      }
    },
    [isExpanded, placement, offset],
  )

  function getItemNodeFromIndex(index: number): HTMLLIElement | Element | null {
    return itemsRef && itemsRef.current && itemsRef.current[index]
  }

  useKey({
    key: 'Escape',
    target: menuRef.current,
    handler: () => {
      if (isExpanded) {
        handleClosePortal({})
      }
    },
  })

  useKey({
    key: 'ArrowDown',
    target: menuRef.current,
    handler: () => {
      const nextItem = getNextItem({
        moveAmount: 1,
        baseIndex: Object.keys(itemsRef.current).indexOf(activeItem),
        items: itemsRef.current,
        getItemNodeFromIndex,
      })

      setActiveItem(nextItem)

      setAttributes(itemsRef.current[nextItem], {
        'aria-selected': 'true',
      })
    },
  })

  useKey({
    key: 'ArrowUp',
    target: menuRef.current,
    handler: () => {
      const nextItem = getNextItem({
        moveAmount: -1,
        baseIndex: Object.keys(itemsRef.current).indexOf(activeItem),
        items: itemsRef.current,
        getItemNodeFromIndex,
      })

      setActiveItem(nextItem)

      setAttributes(itemsRef.current[nextItem], {
        'aria-selected': 'true',
      })
    },
  })

  useKey({
    key: 'Enter',
    target: menuRef.current,
    handler: () => {
      const handler = itemHandlersRef.current[activeItem] as () => void
      handler()
    },
  })

  useOnClickOutside({
    ref: menuRef as React.MutableRefObject<Element>,
    refException: buttonRef as React.MutableRefObject<Element>,
    handler: () => {
      handleClosePortal({})
    },
  })

  function focusMenuRef() {
    menuRef && menuRef.current && menuRef.current.focus()
  }

  function focusButtonRef() {
    buttonRef && buttonRef.current && buttonRef.current.focus()
  }

  React.useEffect(() => {
    if (isExpanded) {
      focusMenuRef()
    } else {
      focusButtonRef()
    }
  }, [isExpanded])

  function registerButtonElement({
    ref,
    options,
  }: RefAndOptions<Element>): RefAndOptions<Element> {
    if (ref && ref.tagName === MenuElementTagNames.Button) {
      buttonRef.current = ref as HTMLButtonElement

      setAttributes(buttonRef.current, {
        id: elementIds.current.buttonId,
        'aria-haspopup': 'true',
        'aria-controls': 'IDREF',
      })
    }

    return { ref, options }
  }

  function registerMenuElement({
    ref,
    options,
  }: RefAndOptions<Element>): RefAndOptions<Element> {
    if (ref && ref.tagName === MenuElementTagNames.Ul) {
      menuRef.current = ref as HTMLUListElement

      setAttributes(menuRef.current, {
        id: elementIds.current.menuId,
        role: 'menu',
        tabIndex: '-1',
        'aria-labelledby':
          buttonRef && buttonRef.current ? `${buttonRef.current.id}` : '',
      })
    }

    return { ref, options }
  }

  function registerMenuItemElement({
    ref,
    options,
  }: RefAndOptions<Element>): RefAndOptions<Element> {
    if (ref && ref.tagName === MenuElementTagNames.Li) {
      const name = options && options.name
      const handler = options && options.handler
      const items = itemsRef.current
      const itemHandlers = itemHandlersRef.current

      items[name as string] = ref
      itemHandlers[name as string] = handler

      const item = items[name as string]

      setAttributes(item, {
        id: elementIds.current.getItemId(name as string),
        role: 'option',
        'aria-selected': 'false',
      })
    }

    return { ref, options }
  }

  const registerElementRefs = React.useCallback(function registerElementRefs(
    ref: Element | null,
    options?: RegisterOptions,
  ): RefAndOptions<Element> {
    return registerMenuItemElement(
      registerMenuElement(registerButtonElement({ ref, options })),
    )
  },
  [])

  /**
   * Register the menu elements
   *
   * Allows the ability to add the appropriate HTML attributes
   * to an HTML element.
   */
  const register = React.useCallback(
    function register(
      ref: (HTMLButtonElement | HTMLUListElement | HTMLLIElement) | null,
      options?: RegisterOptions,
    ): RefAndOptions<Element> | null {
      return ref && registerElementRefs(ref, options)
    },
    [registerElementRefs],
  )

  const handleToggleMenu = React.useCallback(
    function handleToggleMenu(event) {
      setAttributes(buttonRef && (buttonRef.current as Element | null), {
        'aria-expanded': `${!isExpanded}`,
      })

      isExpanded ? handleClosePortal(event) : handleOpenPortal(event)
    },
    [isExpanded, handleOpenPortal, handleClosePortal],
  )

  const handleCloseMenu = React.useCallback(
    function handleCloseMenu() {
      setAttributes(buttonRef && (buttonRef.current as Element | null), {
        'aria-expanded': 'false',
      })

      handleClosePortal({})
    },
    [handleClosePortal],
  )

  const getItemProps = React.useCallback(function getItemProps(name: string) {
    return {
      onClick: itemHandlersRef.current[name],
      onMouseEnter: () => setActiveItem(name),
    }
  }, [])

  return {
    register,
    isExpanded,
    activeItem,
    handleToggleMenu,
    handleCloseMenu,
    getItemProps,
    Menu: Portal,
  }
}
