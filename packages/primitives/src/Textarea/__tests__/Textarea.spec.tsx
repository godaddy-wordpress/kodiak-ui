import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Textarea } from '../Textarea'

expect.addSnapshotSerializer(serializer)

describe('Textarea', () => {
  it('should render the Textarea component as a textarea element', () => {
    expect(
      renderer
        .create(<Textarea placeholder="Rendering the textarea component" />)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: block;
        width: 100%;
        padding: 8px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: inherit;
        line-height: inherit;
        border: 1px solid;
        border-radius: default;
        color: inherit;
        background-color: transparent;
      }

      <textarea
        className="emotion-0"
        placeholder="Rendering the textarea component"
      />
    `)
  })
})
