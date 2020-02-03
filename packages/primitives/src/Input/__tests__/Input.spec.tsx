import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Input } from '../Input'

expect.addSnapshotSerializer(serializer)

describe('Input', () => {
  it('should render the input as an input element', () => {
    expect(renderer.create(<Input>Rendering input element</Input>).toJSON())
      .toMatchInlineSnapshot(`
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

      <input
        className="emotion-0"
      >
        Rendering input element
      </input>
    `)
  })
})
