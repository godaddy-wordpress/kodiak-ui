import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { InputGroup } from '../InputGroup'

describe('InputGroup', () => {
  it('should render the div to wrap input elements', () => {
    expect(
      renderer.create(<InputGroup>Rendering input group</InputGroup>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        position: relative;
        width: 100%;
      }

      <div
        className="emotion-0"
      >
        Rendering input group
      </div>
    `)
  })
})
