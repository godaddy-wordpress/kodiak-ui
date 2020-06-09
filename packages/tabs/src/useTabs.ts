import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
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
}

interface UseTabsReturn {
  selectedIndex: number | string
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
  { initialIndex = 0, tabs: userTabs }: UseTabsOptions = { tabs: [] },
): UseTabsReturn {
  const id = useId()
  const tabsRef = React.useRef<{ [key: string]: Element | null }>({})
  const [selectedIndex, setSelectedIndex] = React.useState<string | number>(
    initialIndex,
  )

  const onClick = React.useCallback(function handleOnClick(index: number) {
    return () => setSelectedIndex(index)
  }, [])

  function getItemNodeFromIndex(index: number): Element | null {
    return tabsRef && tabsRef.current && tabsRef.current[index]
  }

  const onKeyUp = React.useCallback(function handleOnKeyUp(
    event: React.KeyboardEvent,
  ) {
    console.log(tabsRef.current)
    switch (event.key) {
      case 'ArrowLeft':
        const nextIndex = getNextIndex({
          moveAmount: -1,
          baseIndex: Object.keys(tabsRef.current).indexOf(
            selectedIndex as string,
          ),
          items: tabsRef.current,
          getItemNodeFromIndex,
        })
        console.log(nextIndex)
        setSelectedIndex(nextIndex)
        break
      case 'ArrowRight':
        console.log('ArrowRight')
        break
      case 'Enter':
        console.log('Enter')
        break
      case 'Home':
        console.log('Home')
        break
      case 'End':
        console.log('End')
        break
    }
  },
  [])

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
