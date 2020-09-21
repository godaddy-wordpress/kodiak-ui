import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Box } from '../Box'

expect.addSnapshotSerializer(serializer)

describe('Box', () => {
  it('should render the Box as a div element', () => {
    expect(renderer.create(<Box>Rendering div element</Box>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-0"
      >
        Rendering div element
      </div>
    `)
  })

  it('should render the Box as a main element', () => {
    expect(renderer.create(<Box as="main">Rendering div element</Box>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <main
        className="emotion-0"
      >
        Rendering div element
      </main>
      `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(<Box sx={{ color: 'white' }}>Rendering div element</Box>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        color: white;
      }

      <div
        className="emotion-0"
      >
        Rendering div element
      </div>
      `)
  })

  it('should style the element with styled-system props', () => {
    expect(renderer.create(<Box>Rendering div element</Box>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
      }

      <div
        className="emotion-0"
      >
        Rendering div element
      </div>
    `)
  })
})
