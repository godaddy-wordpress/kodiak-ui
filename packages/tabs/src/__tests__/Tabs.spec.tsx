import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Tabs, TabList, Tab, TabPanel, useTabs } from '../'

expect.addSnapshotSerializer(serializer)

function TabsExample() {
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

  const { tabs, tabPanels, selectedIndex } = useTabs({ tabs: tabsData })

  return (
    <Tabs sx={{ border: '1px solid', borderColor: 'gray.2' }}>
      <TabList aria-label="Payment methods">
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

describe('Tabs', () => {
  it('should render the Tabs', () => {
    expect(renderer.create(<TabsExample />).toJSON()).toMatchInlineSnapshot(`
      .emotion-9 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border: 1px solid;
        border-color: gray.2;
      }

      .emotion-4 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 32px;
        color: primary;
        position: relative;
      }

      .emotion-0::after {
        background-color: primary;
        bottom: 0;
        content: "";
        height: 2px;
        left: 0;
        position: absolute;
        right: 0;
        width: 100%;
      }

      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 32px;
        color: text;
        position: relative;
      }

      .emotion-1::after {
        background-color: muted;
        bottom: 0;
        content: "";
        height: 1px;
        left: 0;
        position: absolute;
        right: 0;
        width: 100%;
      }

      .emotion-5 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        padding: 32px;
      }

      <div
        className="emotion-9"
      >
        <div
          aria-label="Payment methods"
          className="emotion-4"
          role="tablist"
        >
          <button
            aria-controls="kodiak-ui-tabs-1-tabpanel-0"
            aria-selected={true}
            className="emotion-0"
            id="kodiak-ui-tabs-1-tabitem-0"
            onClick={[Function]}
            onKeyUp={[Function]}
            role="tab"
            tabIndex={0}
          >
            Tab 1
          </button>
          <button
            aria-controls="kodiak-ui-tabs-1-tabpanel-1"
            aria-selected={false}
            className="emotion-1"
            id="kodiak-ui-tabs-1-tabitem-1"
            onClick={[Function]}
            onKeyUp={[Function]}
            role="tab"
            tabIndex={-1}
          >
            Tab 2
          </button>
          <button
            aria-controls="kodiak-ui-tabs-1-tabpanel-2"
            aria-selected={false}
            className="emotion-1"
            id="kodiak-ui-tabs-1-tabitem-2"
            onClick={[Function]}
            onKeyUp={[Function]}
            role="tab"
            tabIndex={-1}
          >
            Tab 3
          </button>
          <button
            aria-controls="kodiak-ui-tabs-1-tabpanel-3"
            aria-selected={false}
            className="emotion-1"
            id="kodiak-ui-tabs-1-tabitem-3"
            onClick={[Function]}
            onKeyUp={[Function]}
            role="tab"
            tabIndex={-1}
          >
            Tab 4
          </button>
        </div>
        <div
          aria-labelledby="kodiak-ui-tabs-1-tabitem-0"
          className="emotion-5"
          hidden={false}
          id="kodiak-ui-tabs-1-tabpanel-0"
          role="tabpanel"
        >
          <div>
            <h3>
              Testing
            </h3>
          </div>
        </div>
        <div
          aria-labelledby="kodiak-ui-tabs-1-tabitem-1"
          className="emotion-5"
          hidden={true}
          id="kodiak-ui-tabs-1-tabpanel-1"
          role="tabpanel"
        >
          Tab 2
        </div>
        <div
          aria-labelledby="kodiak-ui-tabs-1-tabitem-2"
          className="emotion-5"
          hidden={true}
          id="kodiak-ui-tabs-1-tabpanel-2"
          role="tabpanel"
        >
          Tab 3
        </div>
        <div
          aria-labelledby="kodiak-ui-tabs-1-tabitem-3"
          className="emotion-5"
          hidden={true}
          id="kodiak-ui-tabs-1-tabpanel-3"
          role="tabpanel"
        >
          Tab 4
        </div>
      </div>
    `)
  })
})
