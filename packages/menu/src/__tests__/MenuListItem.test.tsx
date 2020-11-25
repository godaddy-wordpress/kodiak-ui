import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { MenuListItem } from '../MenuListItem'

describe('MenuListItem', () => {
  it('should render MenuListItem with string as children', () => {
    const component = renderer
      .create(<MenuListItem>Item</MenuListItem>)
      .toJSON()

    expect(component).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        cursor: pointer;
        line-height: 1;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 32px;
        padding-right: 32px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      <li
        className="emotion-0"
      >
        Item
      </li>
    `)
  })

  it('should render MenuListItem with ReactElement as children', () => {
    const component = renderer
      .create(
        <MenuListItem>
          <div>Item</div>
        </MenuListItem>,
      )
      .toJSON()

    expect(component).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        cursor: pointer;
        line-height: 1;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 32px;
        padding-right: 32px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      <li
        className="emotion-0"
      >
        <div>
          Item
        </div>
      </li>
    `)
  })

  it('should render MenuListItem with custom styling', () => {
    const component = renderer
      .create(
        <MenuListItem sx={{ cursor: 'none' }}>
          <div>Item</div>
        </MenuListItem>,
      )
      .toJSON()

    expect(component).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        cursor: pointer;
        line-height: 1;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 32px;
        padding-right: 32px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        cursor: none;
      }

      <li
        className="emotion-0"
      >
        <div>
          Item
        </div>
      </li>
    `)
  })
})
