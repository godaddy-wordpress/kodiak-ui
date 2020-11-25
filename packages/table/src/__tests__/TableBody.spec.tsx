import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TableBody } from '../'

expect.addSnapshotSerializer(serializer)

describe('TableBody', () => {
  it('should render the TableBody as tbody', () => {
    expect(renderer.create(<TableBody />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: table-row-group;
      }

      <tbody
        className="emotion-0"
      />
    `)
  })
})
