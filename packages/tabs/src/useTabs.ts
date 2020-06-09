import * as React from 'react'
import { SxStyleProp } from 'theme-ui'
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
  selectedIndex: number
  tabs: Tab[]
  tabPanels: TabPanel[]
}

export function useTabs(
  { initialIndex = 0, tabs: userTabs }: UseTabsOptions = { tabs: [] },
): UseTabsReturn {
  const id = useId()
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex)

  const tabs = React.useMemo(
    function generateTabProps(): Tab[] {
      return (
        userTabs &&
        userTabs.map(({ tab }: UserTab, index: number) => ({
          id: `kodiak-ui-tabs-${id}-tabitem-${index}`,
          children: tab,
          tabIndex: selectedIndex === index ? 0 : -1,
          role: 'tab',
          onClick: () => setSelectedIndex(index),
          'aria-controls': `kodiak-ui-tabs-${id}-tabpanel-${index}`,
          'aria-selected': selectedIndex === index,
        }))
      )
    },
    [id, userTabs, selectedIndex],
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
