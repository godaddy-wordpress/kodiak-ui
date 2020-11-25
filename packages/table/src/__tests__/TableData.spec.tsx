import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TableData } from '../'

describe('TableData', () => {
  it('should render as td', () => {
    expect(renderer.create(<TableData>Cell content</TableData>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid;
        border-color: muted;
        display: table-cell;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        padding: 16px;
        vertical-align: inherit;
      }

      <td
        className="emotion-0"
      >
        Cell content
      </td>
    `)
  })
})
