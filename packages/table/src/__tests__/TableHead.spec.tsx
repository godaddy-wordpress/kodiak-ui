import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { TableHead } from '../'

expect.addSnapshotSerializer(serializer)

describe('TableHead', () => {
  it('should render as thead', () => {
    expect(renderer.create(<TableHead />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: table-header-group;
      }

      <th
        className="emotion-0"
      />
    `)
  })
})
