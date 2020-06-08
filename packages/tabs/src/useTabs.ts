import * as React from 'react'

interface UseTabsOptions {
  initialIndex?: number
}

interface UseTabsReturn {
  selectedIndex: number
}

export function useTabs({
  initialIndex = 0,
}: UseTabsOptions = {}): UseTabsReturn {
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex)

  return {
    selectedIndex,
  }
}
