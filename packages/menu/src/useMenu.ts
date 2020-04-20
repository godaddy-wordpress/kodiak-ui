import * as React from 'react'
import { hasKey } from '@kodiak-ui/utils'
import { usePortal, useKey } from '@kodiak-ui/hooks'

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
}

interface UseMenuReturnValue {
  register: (ref: MenuElement, registerOptions?: RegisterOptions) => void
  isExpanded: boolean
  activeItem: string
  handleToggleMenu: (event: React.MouseEvent<any, MouseEvent>) => void
  Portal: any
}

type MenuElement = HTMLButtonElement | HTMLUListElement | HTMLLIElement

enum MenuElementTagNames {
  Button = 'BUTTON',
  Ul = 'UL',
  Li = 'LI',
}

interface RefAndOptions<Element> {
  ref: Element | null
  options?: RegisterOptions
}

export function useMenu(): UseMenuReturnValue {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const menuRef = React.useRef<HTMLUListElement>()
  const itemsRef = React.useRef<{ [key: string]: HTMLLIElement | Element }>({})
  const elementIds = React.useRef<ElementIds>(generateElementIds())

  const [activeItem, setActiveItem] = React.useState('')

  const {
    isOpen: isExpanded,
    handleOpenPortal,
    handleClosePortal,
    Portal,
  } = usePortal({
    onOpen({ portalRef }) {
      const clickedElement = buttonRef && buttonRef.current
      const buttonRect =
        clickedElement && clickedElement.getBoundingClientRect()

      if (!clickedElement || !buttonRect) {
        return
      }

      let left = buttonRect.left
      let top = buttonRect && buttonRect.top + clickedElement.clientHeight

      const outRight = window.innerWidth < left + clickedElement.offsetWidth

      const outBottom =
        window.innerHeight < buttonRect.top + portalRef.current.clientHeight

      if (outRight) {
        left =
          window.innerWidth -
          (buttonRect.right - buttonRect.left + clickedElement.offsetWidth)
      }

      if (outBottom) {
        top = window.innerHeight - (buttonRect.bottom - buttonRect.top + 200)
      }

      portalRef.current.style.cssText = `
        width: ${clickedElement.offsetWidth}px;
        position: absolute;
        top: ${top}px;
        left: ${left}px;
        background: #ffff;
      `
    },
  })

  function getItemNodeFromIndex(index: number): HTMLLIElement | Element | null {
    return itemsRef && itemsRef.current && itemsRef.current[index]
  }

  useKey({
    key: 'Escape',
    handler: () => {
      if (isExpanded) {
        handleClosePortal({})
      }
    },
  })

  useKey({
    key: 'ArrowDown',
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

  function registerButtonElement<Element extends MenuElement = MenuElement>({
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

  function registerMenuElement<Element extends MenuElement = MenuElement>({
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

  const registerMenuItemElement = React.useCallback(
    function registerMenuItemElement<
      Element extends MenuElement = MenuElement
    >({ ref, options }: RefAndOptions<Element>): RefAndOptions<Element> {
      if (ref && ref.tagName === MenuElementTagNames.Li) {
        const name = options && options.name
        const items = itemsRef.current

        items[name as string] = ref

        setAttributes(items[name as string], {
          id: elementIds.current.getItemId(name as string),
          role: 'option',
          'aria-selected': activeItem === name ? 'true' : 'false',
        })
      }

      return { ref, options }
    },
    [activeItem],
  )

  function registerElementRefs<Element extends MenuElement = MenuElement>(
    ref: Element | null,
    options?: RegisterOptions,
  ): RefAndOptions<Element> {
    return registerMenuItemElement(
      registerMenuElement(registerButtonElement({ ref, options })),
    )
  }

  /**
   * Register the menu elements
   *
   * Allows the ability to add the appropriate HTML attributes
   * to an HTML element.
   */
  const register = React.useCallback(function register<
    Element extends MenuElement = MenuElement
  >(
    ref: Element | null,
    options?: RegisterOptions,
  ): RefAndOptions<Element> | null {
    return ref && registerElementRefs(ref, options)
  },
  [])

  const handleToggleMenu = React.useCallback(
    function handleToggleMenu(event) {
      setAttributes(buttonRef && (buttonRef.current as Element | null), {
        'aria-expanded': `${!isExpanded}`,
      })

      isExpanded ? handleClosePortal(event) : handleOpenPortal(event)
    },
    [isExpanded, handleOpenPortal, handleClosePortal],
  )

  const handleMouseEnter = React.useCallback(function handleMouseEnter(
    index: number,
  ) {
    return () => setActiveItem('')
  },
  [])

  return {
    register,
    isExpanded,
    activeItem,
    handleToggleMenu,
    Portal,
  }
}
