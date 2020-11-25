import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Table } from '../Table'

describe('Table', () => {
  it('should render the Table as a div and table element', () => {
    expect(
      renderer
        .create(
          <Table>
            <span>children</span>
          </Table>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-1 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        width: 100%;
        overflow-x: auto;
      }

      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: table;
        min-width: 650px;
        width: 100%;
      }

      <div
        className="emotion-1"
      >
        <table
          className="emotion-0"
        >
          <span>
            children
          </span>
        </table>
      </div>
    `)
  })
})
