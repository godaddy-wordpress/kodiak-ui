import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TableHead } from '../'

describe('TableHead', () => {
  it('should render as thead', () => {
    expect(
      renderer
        .create(
          <TableHead>
            <tr>
              <th>Header</th>
            </tr>
          </TableHead>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: table-header-group;
      }

      <thead
        className="emotion-0"
      >
        <tr>
          <th>
            Header
          </th>
        </tr>
      </thead>
    `)
  })
})
