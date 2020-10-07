import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Flex } from '../Flex'

expect.addSnapshotSerializer(serializer)

describe('Box', () => {
  it('should render the Flex as a div element', () => {
    expect(renderer.create(<Flex>Rendering Flex element</Flex>).toJSON())
      .toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      <div
        className="emotion-0"
      >
        Rendering Flex element
      </div>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(<Flex sx={{ color: 'white' }}>Rendering div element</Flex>)
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
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
    expect(
      renderer
        .create(
          <Flex sx={{ alignItems: 'center' }}>Rendering div element</Flex>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
      .emotion-0 {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <div
        className="emotion-0"
      >
        Rendering div element
      </div>
    `)
  })
})
