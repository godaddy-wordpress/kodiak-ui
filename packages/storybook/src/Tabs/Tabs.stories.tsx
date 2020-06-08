import * as React from 'react'
import { useTabs } from '@kodiak-ui/tabs'

export default { title: 'Tabs' }

export function Initial() {
  const tabs = React.useMemo(function generateTabs() {
    return [
      { tab: 'Tab 1', panel: 'Tab 1' },
      { tab: 'Tab 2', panel: 'Tab 2' },
    ]
  }, [])

  const { selectedIndex } = useTabs({ tabs })

  return (
    <>
      <div role="tablist" aria-label="Payment methods">
        <button
          role="tab"
          aria-selected="true"
          tabIndex={-1}
          aria-controls="tab-0"
        >
          Tab 1
        </button>
        <button
          role="tab"
          aria-selected="true"
          tabIndex={-1}
          aria-controls="tab-1"
        >
          Tab 2
        </button>
      </div>
      <div role="tabpanel" id="tab-0" aria-labelledby="tab-0">
        Tab 0
      </div>
      <div role="tabpanel" id="tab-1" aria-labelledby="tab-1">
        Tab 1
      </div>
    </>
  )
}

