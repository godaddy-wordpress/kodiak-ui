import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { PaginationButton } from '../PaginationButton'

expect.addSnapshotSerializer(serializer)

describe('PaginationButton', () => {
  it('should render the PaginationButton as a button element', () => {
    expect(
      renderer
        .create(
          <PaginationButton>Rendering Pagination Button</PaginationButton>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        line-height: inherit;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }

      <button
        className="emotion-0"
        onClick={[Function]}
      >
        Rendering Pagination Button
      </button>
    `)
  })
})
