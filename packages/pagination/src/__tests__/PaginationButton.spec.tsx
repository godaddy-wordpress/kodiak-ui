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
        background-color: white;
        border-right: 1px solid;
        border-color: gray.3;
        border-radius: none;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.15);
        color: text;
        font-size: 16px;
        line-height: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
      }

      .emotion-0:first-of-type {
        border-top-left-radius: default;
        border-bottom-left-radius: default;
      }

      .emotion-0:last-of-type {
        border-top-right-radius: default;
        border-bottom-right-radius: default;
        border-right: none;
      }

      <button
        className="emotion-0"
      >
        Rendering Pagination Button
      </button>
    `)
  })
})
