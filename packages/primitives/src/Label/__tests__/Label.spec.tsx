import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Label } from '../'

expect.addSnapshotSerializer(serializer)

describe('Label', () => {
  it('should render the Label as a label element', () => {
    expect(
      renderer.create(<Label>Rendering the default element</Label>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <label
        className="emotion-0"
      >
        Rendering the default element
      </label>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(
          <Label sx={{ color: 'white' }}>Rendering with an sx prop</Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: white;
      }

      <label
        className="emotion-0"
      >
        Rendering with an sx prop
      </label>
    `)
  })

  it('should style the element with styled-system props', () => {
    expect(
      renderer
        .create(<Label fontWeight="bold">Rendering bold p tag</Label>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        font-weight: bold;
      }

      <label
        className="emotion-0"
      >
        Rendering bold p tag
      </label>
    `)
  })
})
