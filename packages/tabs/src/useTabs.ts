import * as React from 'react'
import { SxStyleProp } from 'kodiak-ui'
import { getNextIndex } from '@kodiak-ui/utils'
import { useId } from '@kodiak-ui/hooks'

interface UserTab {
  tab: string | React.ReactNode
  panel: string | React.ReactNode
}

type Tab = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

type TabPanel = {
  sx: SxStyleProp
} & React.HTMLAttributes<HTMLDivElement>

interface UseTabsOptions {
  initialIndex?: number
  tabs: UserTab[]
  onTabChange?: (index: number) => void
}

interface UseTabsReturn {
  selectedIndex: number
  tabs: Tab[]
  tabPanels: TabPanel[]
}

interface RegisterOptions {
  name: string
}

interface RefAndOptions<Element> {
  ref: Element | null
  options: RegisterOptions | null
}

export function useTabs(
  { initialIndex = 0, tabs: userTabs, onTabChange }: UseTabsOptions = {
    tabs: [],
  },
): UseTabsReturn {
  const id = useId()
  const tabsRef = React.useRef<{ [key: string]: Element | null }>({})
  const [selectedIndex, setSelectedIndex] = React.useState<number>(initialIndex)

  React.useEffect(
    function handleOnTabChangeCallback() {
      onTabChange?.(selectedIndex)
    },
    [selectedIndex, onTabChange],
  )

  const onClick = React.useCallback(function handleOnClick(index: number) {
    return () => setSelectedIndex(index)
  }, [])

  function getItemNodeFromIndex(index: number): Element | null {
    const key =
      tabsRef && tabsRef.current && Object.keys(tabsRef.current)[index]
    return tabsRef.current[key]
  }

  const handleTabFocus = React.useCallback(function handleTabFocus(
    index: number,
  ) {
    const node = getItemNodeFromIndex(index) as HTMLElement
    node.focus()
  },
  [])

  const onKeyUp = React.useCallback(
    function handleOnKeyUp(event: React.KeyboardEvent) {
      switch (event.key) {
        case 'ArrowLeft':
          const prevIndex = getNextIndex({
            moveAmount: -1,
            baseIndex: selectedIndex,
            items: tabsRef.current,
            getItemNodeFromIndex,
          })

          handleTabFocus(prevIndex)
          setSelectedIndex(prevIndex)
          break
        case 'ArrowRight':
          const nextIndex = getNextIndex({
            moveAmount: 1,
            baseIndex: selectedIndex,
            items: tabsRef.current,
            getItemNodeFromIndex,
          })

          handleTabFocus(nextIndex)
          setSelectedIndex(nextIndex)
          break
        case 'Home':
          handleTabFocus(0)
          setSelectedIndex(0)
          break
        case 'End':
          const count = Object.keys(tabsRef.current).length - 1
          handleTabFocus(count)
          setSelectedIndex(count)
          break
      }
    },
    [selectedIndex, handleTabFocus],
  )

  function registerTabElements<TElement extends HTMLButtonElement>({
    ref,
    options,
  }: RefAndOptions<TElement>): RefAndOptions<TElement> {
    const name = options && options.name
    const tabs = tabsRef && tabsRef.current

    tabs[name as string] = ref

    return { ref, options }
  }

  function registerElementRefs<TElement extends HTMLButtonElement>(
    ref: TElement | null,
    options: RegisterOptions | null = null,
  ): RefAndOptions<TElement> {
    return registerTabElements({ ref, options })
  }

  function register<TElement extends HTMLButtonElement>(): (
    ref: TElement | null,
  ) => void
  function register<TElement extends HTMLButtonElement>(
    options: RegisterOptions,
  ): (ref: TElement | null) => void
  function register<TElement extends HTMLButtonElement>(
    ref: TElement | null,
    options?: RegisterOptions,
  ): void
  function register<TElement extends HTMLButtonElement>(
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

  const registerCallback = React.useCallback(register, [])

  const tabs = React.useMemo(
    function generateTabProps(): Tab[] {
      return (
        userTabs &&
        userTabs.map(({ tab }: UserTab, index: number) => ({
          ref: registerCallback({ name: `tabitem-${index}` }),
          id: `kodiak-ui-tabs-${id}-tabitem-${index}`,
          children: tab,
          tabIndex: selectedIndex === index ? 0 : -1,
          role: 'tab',
          onClick: onClick(index),
          onKeyUp,
          'aria-controls': `kodiak-ui-tabs-${id}-tabpanel-${index}`,
          'aria-selected': selectedIndex === index,
        }))
      )
    },
    [id, userTabs, selectedIndex, registerCallback, onClick, onKeyUp],
  )

  const tabPanels = React.useMemo(
    function generateTabPanelProps(): TabPanel[] {
      return (
        userTabs &&
        userTabs.map(({ panel }: UserTab, index: number) => ({
          children: panel,
          id: `kodiak-ui-tabs-${id}-tabpanel-${index}`,
          role: 'tabpanel',
          hidden: selectedIndex === index ? false : true,
          sx: { display: selectedIndex === index ? 'block' : 'none' },
          'aria-labelledby': `kodiak-ui-tabs-${id}-tabitem-${index}`,
        }))
      )
    },
    [id, userTabs, selectedIndex],
  )

  return {
    selectedIndex,
    tabs,
    tabPanels,
  }
}
