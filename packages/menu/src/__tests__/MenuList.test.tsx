import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { MenuList } from '../MenuList'

expect.addSnapshotSerializer(serializer)

describe('MenuList', () => {
  it('should render MenuList', () => {
    const component = renderer
      .create(
        <MenuList>
          <div />
        </MenuList>,
      )
      .toJSON()

    expect(component).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        background-color: white;
        border: 1px solid;
        border-color: muted;
        border-radius: default;
        list-style: none;
        margin: 0;
        margin-top: 8px;
        outline: none;
        overflow: hidden;
        padding: 0;
      }

      <ul
        className="emotion-0"
      >
        <div />
      </ul>
    `)
  })
})
