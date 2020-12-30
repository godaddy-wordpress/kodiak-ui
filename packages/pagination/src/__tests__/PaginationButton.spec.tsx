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
        -webkit-transition-property: background,border,-webkit-transform;
        -webkit-transition-property: background,border,transform;
        transition-property: background,border,transform;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-in-out;
        transition-timing-function: ease-in-out;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        color: white;
        background-color: primary;
        border: 0;
        border-radius: default;
      }

      .emotion-0:hover {
        background-color: secondary;
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
