import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TableFoot } from '../'

describe('TableFoot', () => {
  it('should render as tfoot', () => {
    expect(renderer.create(<TableFoot />).toJSON()).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border-collapse: collapse;
        border-spacing: 0;
        display: table-footer-group;
      }

      <tfoot
        className="emotion-0"
      />
    `)
  })
})
