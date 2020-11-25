import * as React from 'react'
import serializer from '@emotion/jest'
import renderer from 'react-test-renderer'
import { Text } from '../Text'

describe('Text', () => {
  it('should render the Text as a p element', () => {
    expect(renderer.create(<Text>Rendering p element</Text>).toJSON())
      .toMatchInlineSnapshot(`
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

  it('should render the Text component as a span element', () => {
    expect(
      renderer.create(<Text as="span">Rendering span element</Text>).toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <span
        className="emotion-0"
      >
        Rendering span element
      </span>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(<Text sx={{ color: 'white' }}>Rendering p with sx prop</Text>)
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
        .create(<Text sx={{ fontWeight: 'bold' }}>Rendering bold p tag</Text>)
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
