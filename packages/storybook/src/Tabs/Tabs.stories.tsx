/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { useTabs } from '@kodiak-ui/tabs'

export default { title: 'Tabs' }

export function Initial() {
  const tabsData = React.useMemo(function generateTabs() {
    return [
      { tab: 'Tab 1', panel: 'Tab 1' },
      { tab: 'Tab 2', panel: 'Tab 2' },
    ]
  }, [])

  const { tabs, tabPanels } = useTabs({ tabs: tabsData })

  return (
    <React.Fragment>
      <div role="tablist" aria-label="Payment methods">
        {tabs.map((props, index) => (
          <button key={index} {...props} />
        ))}
      </div>
      {tabPanels.map((props, index) => (
        <div key={index} {...props} />
      ))}
    </React.Fragment>
  )
}

