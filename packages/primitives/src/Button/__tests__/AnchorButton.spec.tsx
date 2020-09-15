import * as React from 'react'
import serializer from 'jest-emotion'
import renderer from 'react-test-renderer'
import { AnchorButton } from '../AnchorButton'

expect.addSnapshotSerializer(serializer)

describe('AnchorButton', () => {
  it('should render the AnchorButton as a div element', () => {
    expect(
      renderer
        .create(<AnchorButton>Rendering AnchorButton</AnchorButton>)
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
      }

      <a
        className="emotion-0"
        onClick={[Function]}
      >
        Rendering AnchorButton
      </a>
    `)
  })

  it('should style the element with the `sx` prop', () => {
    expect(
      renderer
        .create(
          <AnchorButton sx={{ bg: 'black', color: 'white' }}>
            Default AnchorButton
          </AnchorButton>,
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
        background-color: black;
        color: white;
      }

      <a
        className="emotion-0"
        onClick={[Function]}
      >
        Default AnchorButton
      </a>
    `)
  })

  it('should style the element with styled-system props', () => {
    expect(
      renderer
        .create(<AnchorButton mr={1}>Default AnchorButton</AnchorButton>)
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
        margin-right: 4px;
      }

      <a
        className="emotion-0"
        onClick={[Function]}
      >
        Default AnchorButton
      </a>
    `)
  })
})
