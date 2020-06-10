import { renderHook } from '@testing-library/react-hooks'
import { useTabs } from '../'

describe('useTabs', () => {
  it('should return the index and props', () => {
    const tabsData = [
      {
        tab: 'Tab 1',
        panel: 'Tab 1',
      },
    ]

    const { result } = renderHook(() => useTabs({ tabs: tabsData }))

    expect(result.current.selectedIndex).toEqual(0)

    expect(result.current.tabs[0].id).toEqual('kodiak-ui-tabs-1-tabitem-0')
    expect(result.current.tabs[0]['aria-controls']).toEqual(
      'kodiak-ui-tabs-1-tabpanel-0',
    )
    expect(result.current.tabs[0]['aria-selected']).toBeTruthy()

    expect(result.current.tabPanels[0].id).toEqual(
      'kodiak-ui-tabs-1-tabpanel-0',
    )
    expect(result.current.tabPanels[0].role).toEqual('tabpanel')
    expect(result.current.tabPanels[0]['aria-labelledby']).toEqual(
      'kodiak-ui-tabs-1-tabitem-0',
    )
  })
})
