import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Label } from '../Label'

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

      <p
        className="emotion-0"
      >
        Rendering p element
      </p>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(<Label sx={{ color: 'white' }}>Rendering p with sx prop</Label>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: white;
      }

      <p
        className="emotion-0"
      >
        Rendering p with sx prop
      </p>
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

      <p
        className="emotion-0"
      >
        Rendering bold p tag
      </p>
    `)
  })
})
