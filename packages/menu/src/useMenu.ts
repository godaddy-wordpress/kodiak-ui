import * as React from 'react'
import { hasKey } from '@kodiak-ui/utils'

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
  menuButtonProps: { onClick: () => void }
}

type MenuElement = HTMLButtonElement | HTMLUListElement | HTMLLIElement

enum MenuElementTagNames {
  Button = 'BUTTON',
  Ul = 'UL',
}

export function useMenu(): UseMenuReturnValue {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const buttonRef = React.useRef<HTMLButtonElement>()
  const menuRef = React.useRef<HTMLUListElement>()

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
  }: {
    ref: Element | null
    options?: RegisterOptions
  }): { ref: Element | null; options?: RegisterOptions } {
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
  }: {
    ref: Element | null
    options?: RegisterOptions
  }): { ref: Element | null; options?: RegisterOptions } {
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
  ): {
    ref: Element | null
    options?: RegisterOptions
  } {
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
  ): {
    ref: Element | null
    options?: RegisterOptions
  } | null {
    return ref && registerElementRefs(ref, options)
  }

  const handleToggleMenu = React.useCallback(
    function handleToggleMenu() {
      setAttributes(buttonRef && (buttonRef.current as Element | null), {
        'aria-expanded': `${!isExpanded}`,
      })

      setIsExpanded(!isExpanded)
    },
    [isExpanded],
  )

  const menuButtonProps = React.useMemo(
    () => ({
      onClick: handleToggleMenu,
    }),
    [handleToggleMenu],
  )

  return {
    register: React.useCallback(register, []),
    isExpanded,
    menuButtonProps,
  }
}
