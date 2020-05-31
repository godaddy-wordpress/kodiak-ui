import * as React from 'react'
import { createPopper, VirtualElement, Placement } from '@popperjs/core'
import { setAttributes } from '@kodiak-ui/utils'
import { usePortal, useKey, useOnClickOutside, useId } from '@kodiak-ui/hooks'

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

interface ElementIds {
  labelId: string
  menuId: string
  getItemId: (name: string) => string
  buttonId: string
}

function generateElementIds(): ElementIds {
  const genId = useId()
  const id = `kodiak-ui-menu-${genId}`

  return {
    labelId: `${id}-label`,
    menuId: `${id}-menu`,
    getItemId: (name: string) => `${id}-item-${name}`,
    buttonId: `${id}-button`,
  }
}

interface RegisterOptions {
  name?: string
  handler?: () => void
}

interface UseMenuProps {
  placement?: Placement
  offset?: [number, number]
}

interface UseMenuReturnValue {
  register<TElement extends Element>(): (ref: TElement | null) => void
  register<TElement extends Element>(
    options: RegisterOptions,
  ): (ref: TElement | null) => void
  register<TElement extends Element>(
    ref: TElement | null,
    options?: RegisterOptions,
  ): void
  register<TElement extends Element>(
    refOrOptions?: RegisterOptions | TElement | null,
    options?: RegisterOptions,
  ): ((ref: TElement | null) => void) | void
  isExpanded: boolean
  activeItem: string
  handleToggleMenu: (event: React.MouseEvent<any, MouseEvent>) => void
  handleCloseMenu: () => void
  getItemProps: (
    name: string,
  ) => {
    onClick: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined
    onMouseEnter: () => void
  }
  Menu: any
}

enum MenuElementTagNames {
  Button = 'BUTTON',
  Ul = 'UL',
  Li = 'LI',
}

interface RefAndOptions<Element> {
  ref: Element | null
  options: RegisterOptions | null
}

export function useMenu({
  placement = 'bottom-start',
  offset = [0, 8],
}: UseMenuProps = {}): UseMenuReturnValue {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const menuRef = React.useRef<HTMLUListElement>()
  const itemsRef = React.useRef<{ [key: string]: HTMLLIElement | Element }>({})
  const itemHandlersRef = React.useRef<{
    [key: string]: ((event: any) => void) | null | undefined
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

  function focusMenuRef() {
    menuRef && menuRef.current && menuRef.current.focus()
  }

  function focusButtonRef() {
    buttonRef && buttonRef.current && buttonRef.current.focus()
  }

  useKey({
    key: 'Escape',
    target: menuRef.current,
    handler: () => {
      if (isExpanded) {
        handleClosePortal({})
      }
      focusButtonRef()
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

  React.useEffect(() => {
    if (isExpanded) {
      focusMenuRef()
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

  function registerElementRefs<TElement extends Element>(
    ref: TElement | null,
    options: RegisterOptions | null = null,
  ): RefAndOptions<Element> {
    return registerMenuItemElement(
      registerMenuElement(registerButtonElement({ ref, options })),
    )
  }

  function register<TElement extends Element>(): (ref: TElement | null) => void
  function register<TElement extends Element>(
    options: RegisterOptions,
  ): (ref: TElement | null) => void
  function register<TElement extends Element>(
    ref: TElement | null,
    options?: RegisterOptions,
  ): void
  function register<TElement extends Element>(
    refOrOptions?: RegisterOptions | TElement | null,
    options?: RegisterOptions,
  ): ((ref: TElement | null) => void) | void {
    if (refOrOptions instanceof Element) {
      registerElementRefs(refOrOptions as TElement | null, options)
    }

    return function (ref: TElement | null) {
      ref && registerElementRefs(ref, refOrOptions as RegisterOptions)
    }
  }

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

  function getItemProps(name: string) {
    return {
      onClick: (event: React.MouseEvent<any, MouseEvent>) => {
        // TS doesn't like this itemHandlersRef.current[name] && itemHandlersRef.current[name](event)
        // this will work when the bundler supports conditional chaining itemHandlersRef.current[name]?.(event)
        const itemHandler = itemHandlersRef.current[name]
        itemHandler && itemHandler(event)
      },
      onMouseEnter: () => setActiveItem(name),
    }
  }

  return {
    register: React.useCallback(register, []),
    isExpanded,
    activeItem,
    handleToggleMenu,
    handleCloseMenu,
    getItemProps,
    Menu: Portal,
  }
}
