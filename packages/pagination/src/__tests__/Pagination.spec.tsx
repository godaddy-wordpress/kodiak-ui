import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Pagination } from '../Pagination'

describe('Pagination', () => {
  it('should render the Pagination as a nav element', () => {
    expect(
      renderer.create(<Pagination>Rendering Pagination</Pagination>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border: 1px solid;
        border-color: muted;
        border-radius: default;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
      }

      <nav
        className="emotion-0"
      >
        Rendering Pagination
      </nav>
    `)
  })
})
