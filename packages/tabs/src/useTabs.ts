import * as React from 'react'

interface UseTabsOptions {
  initialIndex?: number
  tabs: { tab: string | React.ReactNode; panel: string | React.ReactNode }[]
}

interface UseTabsReturn {
  selectedIndex: number
}

export function useTabs(
  { initialIndex = 0, tabs }: UseTabsOptions = { tabs: [] },
): UseTabsReturn {
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex)

  return {
    selectedIndex,
  }
}
