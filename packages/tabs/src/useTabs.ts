import * as React from 'react'
import { SxStyleProp } from 'theme-ui'

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
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex)

  const handleSelectTab = React.useCallback(function handleSelectTab(
    index: number,
  ) {
    setSelectedIndex(index)
  },
  [])

  const tabs = React.useMemo(
    function generateTabProps(): Tab[] {
      return (
        userTabs &&
        userTabs.map(({ tab }: UserTab, index: number) => ({
          children: tab,
          tabIndex: -1,
          role: 'tab',
          onClick: () => handleSelectTab(index),
          'aria-controls': '',
          'aria-selected': selectedIndex === index,
        }))
      )
    },
    [userTabs, selectedIndex, handleSelectTab],
  )

  const tabPanels = React.useMemo(
    function generateTabPanelProps(): TabPanel[] {
      return (
        userTabs &&
        userTabs.map(({ panel }: UserTab, index: number) => ({
          children: panel,
          id: '',
          role: 'tabpanel',
          tabIndex: 0,
          'aria-labelledby': '',
          sx: { display: selectedIndex === index ? 'block' : 'none' },
        }))
      )
    },
    [userTabs, selectedIndex],
  )

  return {
    selectedIndex,
    tabs,
    tabPanels,
  }
}
