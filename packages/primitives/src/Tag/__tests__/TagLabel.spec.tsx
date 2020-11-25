import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { TagLabel } from '..'

describe('TagLabel', () => {
  it('should render the TagLabel component as a span', () => {
    expect(renderer.create(<TagLabel>Label</TagLabel>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        border: none;
        color: text;
        font-size: 14px;
        line-height: 1.2;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
      }

      <span
        className="emotion-0"
      >
        Label
      </span>
    `)
  })
})
