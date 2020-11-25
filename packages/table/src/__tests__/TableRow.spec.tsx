import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TableRow } from '../'

expect.addSnapshotSerializer(serializer)

describe('TableRow', () => {
  it('should render as tr', () => {
    expect(renderer.create(<TableRow />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        color: inherit;
        display: table-row;
        outline: 0;
        vertical-align: middle;
      }

      <tr
        className="emotion-0"
      />
    `)
  })
})
