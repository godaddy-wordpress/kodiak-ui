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

interface RegisterOptions {}

interface UseMenuReturnValue {
  register: (ref: MenuElement, registerOptions?: RegisterOptions) => void
  isExpanded: boolean
  handleToggleMenu: (event: React.MouseEvent<any, MouseEvent>) => void
  Portal: any
}

type MenuElement = HTMLButtonElement | HTMLUListElement | HTMLLIElement

enum MenuElementTagNames {
  Button = 'BUTTON',
  Ul = 'UL',
}

interface RefAndOptions<Element> {
  ref: Element | null
  options?: RegisterOptions
}

export function useMenu(): UseMenuReturnValue {
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const menuRef = React.useRef<HTMLUListElement>()

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

  useKey({
    key: 'Escape',
    handler: () => {
      if (isExpanded) {
        handleClosePortal({})
      }
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
        id: 'BUTTONIDREF',
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
        id: 'MENUIDREF',
        role: 'menu',
        tabIndex: '-1',
        'aria-labelledby':
          buttonRef && buttonRef.current ? `${buttonRef.current.id}` : '',
      })
    }

    return { ref, options }
  }

  function registerElementRefs<Element extends MenuElement = MenuElement>(
    ref: Element | null,
    options?: RegisterOptions,
  ): RefAndOptions<Element> {
    return registerMenuElement(registerButtonElement({ ref, options }))
  }

  /**
   * Register the menu elements
   *
   * Allows the ability to add the appropriate HTML attributes
   * to an HTML element.
   */
  function register<Element extends MenuElement = MenuElement>(
    ref: Element | null,
    options?: RegisterOptions,
  ): RefAndOptions<Element> | null {
    return ref && registerElementRefs(ref, options)
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

  return Object.assign(
    [
      register,
      isExpanded,
      handleOpenPortal,
      handleClosePortal,
      handleToggleMenu,
      Portal,
    ],
    {
      register: React.useCallback(register, []),
      isExpanded,
      handleToggleMenu,
      Portal,
    },
  )
}
