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

  it('should style the element with styled-system props and accept label props', () => {
    expect(
      renderer
        .create(
          <Label htmlFor="myinput" fontWeight="bold" sx={{ color: 'white' }}>
            Rendering bold
            <input id="myinput" />
          </Label>,
        )
        .toJSON(),
    ).toMatchInlineSnapshot(`
        .emotion-0 {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          font-weight: bold;
          color: white;
        }

        <label
          className="emotion-0"
          htmlFor="myinput"
        >
          Rendering bold
          <input
            id="myinput"
          />
        </label>
    `)
  })
})
