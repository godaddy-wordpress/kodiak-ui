/** @jsx jsx */
import * as React from 'react'
import { jsx } from 'theme-ui'
import { useTabs, Tabs, TabList, Tab, TabPanel } from '@kodiak-ui/tabs'

export default { title: 'Tabs', component: Tabs }

export function Initial() {
  const tabsData = React.useMemo(function generateTabs() {
    return [
      {
        tab: 'Tab 1',
        panel: (
          <div>
            <h3>Testing</h3>
          </div>
        ),
      },
      { tab: 'Tab 2', panel: 'Tab 2' },
      { tab: 'Tab 3', panel: 'Tab 3' },
      { tab: 'Tab 4', panel: 'Tab 4' },
    ]
  }, [])

  const { tabs, tabPanels, selectedIndex } = useTabs({
    tabs: tabsData,
  })

  return (
    <Tabs sx={{ border: '1px solid', borderColor: 'gray.2' }}>
      <TabList aria-label="Describes the tabs">
        {tabs.map((props, index) => (
          <Tab
            key={index}
            {...props}
            sx={{
              color: selectedIndex === index ? 'primary' : 'text',
              position: 'relative',
              '::after': {
                bg: selectedIndex === index ? 'primary' : 'muted',
                bottom: 0,
                content: '""',
                height: selectedIndex === index ? '2px' : '1px',
                left: 0,
                position: 'absolute',
                right: 0,
                width: '100%',
              },
            }}
          />
        ))}
      </TabList>
      {tabPanels.map((props, index) => (
        <TabPanel key={index} {...props} sx={{ p: 4 }} />
      ))}
    </Tabs>
  )
}
