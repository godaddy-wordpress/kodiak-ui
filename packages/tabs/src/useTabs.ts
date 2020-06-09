import * as React from 'react'

interface UserTab {
  tab: string | React.ReactNode
  panel: string | React.ReactNode
}

type Tab = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLButtonElement>

interface UseTabsOptions {
  initialIndex?: number
  tabs: UserTab[]
}

interface UseTabsReturn {
  tabs: any[]
  tabPanels: any[]
}

export function useTabs(
  { initialIndex = 0, tabs: userTabs }: UseTabsOptions = { tabs: [] },
): UseTabsReturn {
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex)

  const tabs = React.useMemo(
    function generateTabs(): Tab[] {
      return userTabs?.map(({ tab }: UserTab, index: number) => ({
        children: tab,
        tabIndex: -1,
        'aria-selected': selectedIndex === index,
      }))
    },
    [userTabs, selectedIndex],
  )

  const tabPanels = React.useMemo(function generateTabPanels() {
    return []
  }, [])

  return {
    tabs,
    tabPanels,
  }
}
