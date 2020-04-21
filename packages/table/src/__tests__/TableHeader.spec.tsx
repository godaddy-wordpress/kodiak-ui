import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { TableHeader } from '../'

expect.addSnapshotSerializer(serializer)

describe('TableHeader', () => {
  it('should render as th', () => {
    expect(renderer.create(<TableHeader />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid;
        border-color: muted;
        color: inherit;
        display: table-cell;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 16px;
        text-align: left;
        vertical-align: inherit;
      }

      <th
        className="emotion-0"
      />
    `)
  })
})
